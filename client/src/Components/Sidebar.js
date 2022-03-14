import React, { Component } from "react";
import "../css/menu.css";
import { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="navbar">
      <header>
        {showNav ? (
          <MdClose onClick={() => setShowNav(false)} />
        ) : (
          <GiHamburgerMenu onClick={() => setShowNav(true)} />
        )}
      </header>

      <div className={showNav ? "sidenav active" : "sidenav"}>
        <nav className="main-menu_nav">
          <div className="portfolio-sidenav">
            <ul>
              <li>
                <a href="/#home" onClick={() => setShowNav(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" onClick={() => setShowNav(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="/#skills" onClick={() => setShowNav(false)}>
                  Skills
                </a>
              </li>
              <li>
                <a href="/#experiences" onClick={() => setShowNav(false)}>
                  Experiences
                </a>
              </li>
              <li>
                <Link to="/contact" onClick={() => setShowNav(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="main-menu_icons">
          <a href="#">
            <FaGithub
              className="navbar-icon github"
              style={{ fontSize: 30, textShadow: "2px 2px 4px #000000" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/abdallah-badra/?originalSubdomain=lb" target={'_blank'}>
            <FaLinkedin
              className="navbar-icon linkedIn"
              style={{ fontSize: 30, textShadow: "2px 2px 4px #000000" }}
            />
          </a>
          <a href="https://wa.me/96176569525" target={'_blank'}>
            <FaWhatsapp
              className="navbar-icon whatsapp"
              style={{ fontSize: 30, textShadow: "2px 2px 4px #000000" }}
            />
          </a>
          <a href="https://www.facebook.com/abdallah.badra.1/" target={'_blank'}>
            <FaFacebook
              className="navbar-icon facebook"
              style={{ fontSize: 30, textShadow: "2px 2px 4px #000000" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
