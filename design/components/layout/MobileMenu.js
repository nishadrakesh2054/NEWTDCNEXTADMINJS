"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  const pathname = usePathname();
  const [currentMenuItem, setCurrentMenuItem] = useState("");
  const [isAccordion, setIsAccordion] = useState(0);
  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  useEffect(() => {
    setCurrentMenuItem(pathname);
  }, [pathname]);

  const checkCurrentMenuItem = (path) =>
    currentMenuItem === path ? "current-menu-item" : "";
  const checkParentActive = (paths) =>
    paths.some((path) => currentMenuItem.startsWith(path))
      ? "current-menu-item"
      : "";

  return (
    <>
      <nav
        id="mainnav-mobi"
        className={`mainnav style1 ${isMobileMenu ? "active" : ""}`}
      >
        <div id="logo-mobie" className="logo">
          <a href="index.html" rel="home">
            <img
              src="assets/logo/white-logo.png"
              alt="image"
              style={{ width: "200px", objectFit: "contain", height: "auto" }}
            />
          </a>
        </div>
        <ul className="menu">
          {/* <li className={`${checkParentActive(["/homev2", "/homev3"])}`}>
            <Link href="/#">Home page</Link>
            <span className="btn-submenu" onClick={() => handleAccordion(1)} />
            <ul
              className="submenu"
              style={{ display: `${isAccordion === 1 ? "block" : "none"}` }}
            >
              <li className={`item ${checkCurrentMenuItem("/")}`}>
                <Link href="/">Home V.1</Link>
              </li>
            </ul>
          </li> */}

          <li className={`item ${pathname === "/" ? "current-menu-item" : ""}`}>
            <Link href="/">Home </Link>
          </li>
          <li
            className={`item ${
              pathname === "/about" ? "current-menu-item" : ""
            }`}
          >
            <Link href="/about">About us</Link>
          </li>

          <li className={`${checkParentActive(["/individual", "squad"])}`}>
            <Link href="/#">Academy </Link>
            <span className="btn-submenu" onClick={() => handleAccordion(2)} />
            <ul
              className="submenu"
              style={{ display: `${isAccordion === 2 ? "block" : "none"}` }}
            >
              <li className={`item ${checkCurrentMenuItem("/individual")}`}>
                <Link href="/individual">Individual</Link>
              </li>
              <li className={`item ${checkCurrentMenuItem("/squad")}`}>
                <Link href="/squad">Squad</Link>
              </li>
            </ul>
            {/* /.submenu */}
          </li>
          {/* <li className={`${checkParentActive(["/blog", "/blog-single"])}`}>
            <Link href="/#">Latest News</Link>
            <span className="btn-submenu" onClick={() => handleAccordion(3)} />
            <ul
              className="submenu"
              style={{ display: `${isAccordion === 3 ? "block" : "none"}` }}
            >
              <li className={`item ${checkCurrentMenuItem("/blog")}`}>
                <Link href="/blog">Blogs</Link>
              </li>
              <li className={`item ${checkCurrentMenuItem("/blog-single")}`}>
                <Link href="/blog-single">Blogs Single</Link>
              </li>
            </ul>
          
          </li> */}
          <li
            className={`item ${
              pathname === "/camps" ? "current-menu-item" : ""
            }`}
          >
            <Link href="/camps">Special Camps</Link>
          </li>
          <li
            className={`item ${
              pathname === "/course" ? "current-menu-item" : ""
            }`}
          >
            <Link href="/course">Course</Link>
          </li>
          <li
            className={`item ${
              pathname === "/contact" ? "current-menu-item" : ""
            }`}
          >
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
        {/* /.menu */}
        <div className="mobile-register-btn text-start ps-4 mt-4">
          <Link href="/register">
            <button className="btn btn-warning px-4 py-2 rounded-pill fw-semibold shadow-sm text-uppercase">
              Register Now
            </button>
          </Link>
        </div>
      </nav>
      <div
        className={`overlay-menu-mobie ${isMobileMenu ? "active" : ""}`}
        onClick={handleMobileMenu}
      >
        <div className="close-btn">
          <span className="close-menus" />
        </div>
      </div>
    </>
  );
}
