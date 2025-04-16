"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Menu() {
  const pathname = usePathname();
  const [currentMenuItem, setCurrentMenuItem] = useState("");

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
      <ul className="menu">
        <li className={`item ${pathname === "/#" ? "current-menu-item" : ""}`}>
          <Link href="/#">Home</Link>
        </li>

        <li
          className={`item ${pathname === "/about" ? "current-menu-item" : ""}`}
        >
          <Link href="/about">About us</Link>
        </li>

        {/* <li className={`${checkParentActive(["/blog", "/blog-single"])}`}>
          <Link href="/#">Blog</Link>
          <ul className="submenu">
            <li className={`item ${checkCurrentMenuItem("/blog")}`}>
              <Link href="/blog">Blogs</Link>
            </li>
            <li className={`item ${checkCurrentMenuItem("/blog-single")}`}>
              <Link href="/blog-single">Single Blog</Link>
            </li>
          </ul>
          
        </li> */}

        <li className={`${checkParentActive(["/individual", "/squad"])}`}>
          <Link href="/#">Academy</Link>
          <ul className="submenu">
            <li className={`item ${checkCurrentMenuItem("/individual")}`}>
              <Link href="/individual">Individual</Link>
            </li>
            <li className={`item ${checkCurrentMenuItem("/squad")}`}>
              <Link href="/squad">Squad</Link>
            </li>
          </ul>
        
        </li>

        <li
          className={`item ${pathname === "/camps" ? "current-menu-item" : ""}`}
        >
          <Link href="/camps">Special Camps</Link>
        </li>
{/* 
        <li className={`${checkParentActive(["/event", "/event-details"])}`}>
          <Link href="/#"> Events</Link>
          <ul className="submenu">
            <li className={`item ${checkCurrentMenuItem("/event")}`}>
              <Link href="/event">Thunderbolts Cup</Link>
            </li>
            <li className={`item ${checkCurrentMenuItem("/event-details")}`}>
              <Link href="/event-details">Football League</Link>
            </li>
          </ul>
        </li> */}
{/* 
        <li
          className={`item ${
            pathname === "/gallery" ? "current-menu-item" : ""
          }`}
        >
          <Link href="/gallery">gallery</Link>
        </li> */}
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
    </>
  );
}
