import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true); // Scrolling down
      } else {
        setIsHidden(false); // Scrolling up or near top
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar-wrapper ${isHidden ? "hidden" : ""}`}>
      <nav className="navbar">
        <a href="/about">about me</a>
        <a href="/projects">projects</a>
        <a href="/experience">experience</a>
        <a href="/leadership">leadership</a>
        <a href="/resume">resume</a>
        <a href="/contact">contact</a>
      </nav>
    </div>
  );
};

export default Navbar;