import React, { useState } from "react";
import "../styles/Selector.css";
import useInView from "../components/useInView";

const experiences = [
  {
    title: "5G Software Developer Co-op",
    company: "ericsson",
    time: "sep 2024 - aug 2025",
    points: [
      "Redesigned an internal ticketing system using JavaScript, HTML, and PHP, improving usability and efficiency for 50+ users",
      "Collaborated with engineers to deliver a cutting-edge feature to clients, validate product components, and create documentation",
      "Implemented and improved product tests in a simulated 5G telecommunications environment, increasing success rate to 100%",
    ],
  },
  {
    title: "Full-Stack Programmer",
    company: "office of the privacy commissioner of canada",
    time: "oct 2023 - aug 2024",
    points: [
      "Developed 2 survey web applications for contractor screenings with Vue.js & TypeScript, reducing processing time from several days to minutes",
      "Improved CI/CD pipelines by optimizing Azure DevOps workflows; Increased developer productivity by automating testing and build processes",
      "Developed and maintained issue-tracking solutions in Microsoft PowerApps by creating custom forms, implemented cloud flows with rule logic, and integrated C# plugins and TypeScript-based web components",
    ],
  },
  {
    title: "Astrophysics Research Student",
    company: "queen's university department of physics",
    time: "may 2023 - aug 2023",
    points: [
      "Analyzed performance of GALFIT and AstroPhot, 2-dimensional photometry algorithms for astronomical images of galaxies, concluding that certain image areas require further pixel integration",
      "Made 30+ galaxy model comparisons by programming with Python libraries, created visualizations of changes across 6 parameters and 3 integration models",
      "Authored and published an abstract in a peer-reviewed undergraduate research journal"
    ],
  },
  {
    title: "Junior Analyst",
    company: "statistics canada",
    time: "may 2022 - apr 2023",
    points: [
      "Developed a web application to display metadata from 20+ international databases using Python, Javascript, HTML & CSS",
      "Designed and implemented a VBA algorithm to automatically identify faulty cells in Excel, reducing administrative processing time",
      "Researched, developed, and documented REST APIs, creating clear guides to support integration and maintenance"
    ],
  }
];

export default function Selector() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionIn, setTransitionIn] = useState(false);
  const [expRef, expInView] = useInView();

  const onClick = (key) => {
    setCurrentIndex(key);
    setTransitionIn(true)
  }

  const handleAnimationEnd = () => {
    setTransitionIn(false);
  }

  const currentExp = experiences[currentIndex];

  return (
    <div ref={expRef} className={"selector-container fade " + (expInView ? "visible" : "")}>
      <div className="buttons-container">
        <button className="exp-button" onClick={() => onClick(0)}>Ericsson</button>
        <button className="exp-button" onClick={() => onClick(1)} style={{marginTop: 30}}>OPC</button>
        <button className="exp-button" onClick={() => onClick(2)} style={{marginTop: 30}}>Queen's</button>
        <button className="exp-button" onClick={() => onClick(3)} style={{marginTop: 30}}>StatCan</button>
      </div>
      <div className="line"></div>
      <div 
        className={"exp-desc " + (transitionIn ? "in" : "out")}
        onAnimationEnd={handleAnimationEnd}
      >
        <p className="exp-title">{currentExp.title}</p>
        <p className="exp-company">{currentExp.company}</p>
        <p className="exp-time">{currentExp.time}</p>
        <ul>
        {currentExp.points.map((point, i) => (
          <li key={i} className="exp-point">{point}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}
