import Navbar from "./components/NavBar";
import React, { useEffect, useRef, useState } from "react";
import snolab from "./snolab.JPG";
import cloud1 from "./cloud1.png";
import useInView from "./components/useInView";
import Carousel from "./components/Carousel";

function App() {
  const [aboutRef, aboutInView] = useInView();
  const [projectsRef, projectsInView] = useInView();

  return (
    <div className="App">
      <div id="background">
        <div id="p1">
        {/* <img className="cloud c1" src={cloud1} alt="Dinosaur"/> */}
          <div id="title-container">
            <p id="title">charlotte murat</p>
            <p id="subtitle">aspiring engineer; passionate about software & biomedical research</p>
          </div>
        </div>
        <div id="p2">
          <div className="p-container">
            <div id="p-title-container">
            <p ref={aboutRef} id="page-title" className={`fade ${aboutInView ? "visible" : ""}`}>about me</p>
            </div>
            <div id="about-img-container">
            <div id="about-container">
              <p id="about1" className={`about-item fade ${aboutInView ? "visible" : ""}`}>➵ &nbsp;&nbsp;&nbsp;&nbsp;currently a 5G software developer (co-op) at ericsson</p>
              <p id="about2" className={`about-item fade ${aboutInView ? "visible" : ""}`}>➵ &nbsp;&nbsp;&nbsp;&nbsp;engineering physics + computing student at queen's university</p>
              <p id="about3" className={`about-item fade ${aboutInView ? "visible" : ""}`}>➵ &nbsp;&nbsp;&nbsp;&nbsp;president of queen's women in science & engineering (WiSE)</p>
              <p id="about4" className={`about-item fade ${aboutInView ? "visible" : ""}`}>➵ &nbsp;&nbsp;&nbsp;&nbsp;i love going to the gym & used to be a rhythmic gymnast!</p>
            </div>
            <div id="img-container" className={`fade ${aboutInView ? "visible" : ""}`}>
              <img id="about-img" src={snolab} alt="Dinosaur"/>
              <div className="img-text">Me at SNOLAB!</div>
            </div>
            </div>
          </div>
        </div>
        <div id="p3">
          <div className="p-container">
            <div id="p-title-container">
            <p ref={projectsRef} id="page-title" className={`fade ${projectsInView ? "visible" : ""}`}>projects</p>
            </div>
            <Carousel/>
          </div>
        </div>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
