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

  const scroll = (location) => {
    window.scrollTo({
      top: window.innerHeight * location,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`navbar-wrapper ${isHidden ? "hidden" : ""}`}>
      <nav className="navbar">
        <a href="/about" onClick={(e) => { e.preventDefault(); scroll(1); }}>about me</a>
        <a href="/projects" onClick={(e) => { e.preventDefault(); scroll(2); }}>projects</a>
        <a href="/experience" onClick={(e) => { e.preventDefault(); scroll(3); }}>experience</a>
        <a href="/leadership" onClick={(e) => { e.preventDefault(); scroll(4); }}>leadership</a>
        <a href="/resume" onClick={(e) => { e.preventDefault(); scroll(5); }}>resume</a>
        <a href="/contact" onClick={(e) => { e.preventDefault(); scroll(6); }}>contact</a>
      </nav>
    </div>
  );
};

export default Navbar;