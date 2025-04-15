"use client";
import Link from "next/link";
import { useState } from "react";
import Menu from "../Menu";
import { FaTiktok } from "react-icons/fa";

export default function Header1({ scroll, handleMobileMenu }) {
  const [isToggled, setToggled] = useState(false);
  const handleToggled = () => setToggled(!isToggled);
  return (
    <>
      <div className="header-top">
        <div className="themeflat-container">
          <div className="header-top-inner">
            <div className="address">
              <Link href="/mailto:">
                <i className="icon-Vector" />
                info@thunderbolts.com.np


              </Link>
              <address>
                <i className="icon-Vector-22" />
                Dhapakhel, Lalitpur, Nepal


              </address>
            </div>
            <div className="social-icon">
              <Link href="/facebook.com">
                <i className="icon-facebook" />
              </Link>
              <Link href="/instagram.com">
                <i className="icon-instagram" />
              </Link>
              <Link href="/youtube.com">
                <i className="icon-youtube" />
              </Link>
              <Link href="/twitter.com">
               <FaTiktok />
              </Link>
           
            </div>
          </div>
        </div>
      </div>

      <header
        id="header"
        className={`header style1 clearfix ${scroll ? "downscrolled" : ""}`}
      >
        <div className="themeflat-container">
          <div className="header-inner">
            <div id="logo" className="logo img-fluid ">
              <Link href="/" rel="home">
                <img id="a2" src="assets/logo/white-logo.png" alt="image" style={{width:'230px' , objectFit:'contain', height:'auto'}} />
              </Link>
            </div>
            <div className="nav-wrap">
              <div className="btn-menu" onClick={handleMobileMenu}>
                <span className="line-1" />
              </div>
              {/* //mobile menu button */}
              <nav id="mainnav" className="mainnav">
                <div id="logo-mobie" className="logo img-fluid">
                  <Link href="/" rel="home">
                    <img src="assets/logo/white-logo.png" alt="image" style={{width:'200px' , objectFit:'contain', height:'auto'}} />
                  </Link>
                </div>
                <Menu />
              </nav>
            </div>

            <div className="header-right">
            <Link href="/register">
              <button className="btn-contact">Register Now</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
