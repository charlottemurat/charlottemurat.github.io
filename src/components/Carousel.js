import React, { useState } from "react";
import "../styles/Carousel.css";

const projects = [
  {
    title: "Drug Classification Machine Learning Algorithms",
    desc: "This project classifies drugs into the seven categories defined by the IACP using a dataset of 310 drugs. Chemical structure information was derived from each drug’s SMILES representation to generate features for model training. Several machine learning algorithms, including Random Forest, Multinomial Logistic Regression, Decision Tree, Support Vector Machine, Naive Bayes, and K-Nearest Neighbors, were applied and evaluated for classification performance.",
    tools: ["Python", "scikit-learn"],
    link: ["https://github.com/charlottemurat/drug-classification"]
  },
  {
    title: "Mood Tracker Web Application",
    desc: "This project is a full-stack web application built with React that enables users to log in through Google authentication, complete a dynamic survey that resets daily, and track their mood trends over time. The questionnaire is based on the Multi-Scale Monthly Mood Tracker developed by the Bipolar Initiative. Users can view their responses visualized through interactive charts created with Chart.js.",
    tools: ["JavaScript", "React"],
    link: ["https://github.com/charlottemurat/mood-tracker", "https://mood-tracker-5ab88.web.app/"]
  },
  {
    title: "Breast Cancer Detection Convolutional Neural Network",
    desc: "This project implements a Convolutional Neural Network (CNN) to classify mammogram images as benign or malignant, using a dataset of 3,383 images sourced via the Kaggle API and organized into directories labeled “0” (benign) and “1” (malignant). The data is split into training, validation, and test sets, with the model achieving accuracies of 68%, 65%, and 62% respectively. The CNN was built using PyTorch.",
    tools: ["Python", "PyTorch"],
    link: ["https://github.com/charlottemurat/breast-cancer-detection"]
  },
  {
    title: "LiveListing Mobile App",
    desc: "This prototype, LiveListing, addresses the massive waste generated during annual student move-in and move-out periods by connecting students moving out with those moving in, reducing landfill contributions and overconsumption. The app enables real-time messaging, item search, and location- and time-based recommendations, making it easier for students to find and exchange items when and where they need them. ",
    tools: ["TypeScript", "React Native"],
    link: ["https://github.com/charlottemurat/live-listing"]
  },
  {
    title: "Interview Scheduler",
    desc: "Developed a Python script in Jupyter Notebook to schedule 140+ interviews for Women in Science and Engineering. Candidate & panel availabilities are input into a JSON file and the scheduler inputs candidates into 15-minute slots. A break is added after each hour of interviews. This project significantly reduced the club’s workload by automating a previously time-consuming manual process.",
    tools: ["Python"],
    link: ["https://github.com/charlottemurat/interview-scheduler"]
  },
  {
    title: "Finance Planner",
    desc: "Developed a Python script in Jupyter Notebook to plan out my finances. The script calculates TFSA contribution room based on birth year and uses SciPy to optimize the amount of money that can be spend each month and the amount that can be added to my TFSA. This tool provides a clear, data-driven budgeting strategy, helping to maximize savings while maintaining manageable monthly expenses.",
    tools: ["Python", "SciPy"],
    link: ["https://github.com/charlottemurat/finance-planner"]
  },
  {
    title: "Bioinformatics Problems",
    desc: "This project includes various bioinformatics-related problems solved using C++, including counting DNA nucleotides, transcribing DNA to RNA, and complementing a strand of DNA. Problems are taken from Rosalind (https://rosalind.info/problems/list-view/). The solutions demonstrate both algorithmic problem-solving skills and the ability to apply programming to real-world biological data analysis.",
    tools: ["C++"],
    link: ["https://github.com/charlottemurat/bioinformatics-problems"]
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionIn, setTransitionIn] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTransitionIn(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
    setTransitionIn(true);
  };

  const handleAnimationEnd = () => {
    setTransitionIn(false);
  }

  const currentProject = projects[currentIndex];

  return (
    <div className="carousel-container">
      <button className="arrow prev" onClick={prevSlide}>
        &#8592;
      </button>

      <div 
        className={"project-container " + (transitionIn ? "in" : "out")}
        onAnimationEnd={handleAnimationEnd}
      >
        <p className="project-title">{currentProject.title}</p>
        <p className="project-desc">{currentProject.desc}</p>
        <div className="project-links">
          {currentProject.tools.map((tool, i) => (
            <div key={i} className="project-tool">
              {tool}
            </div>
          ))} 
          <a
            className="project-link"
            href={currentProject.link[0]}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          { currentProject.link.length < 2 ? "" : 
            <a
              className="project-link"
              href={currentProject.link[1]}
              target="_blank"
              rel="noopener noreferrer"
              style={{marginLeft: 0}}
            >
              Website
            </a> 
          }
        </div>
      </div>

      <button className="arrow next" onClick={nextSlide}>
        &#8594;
      </button>

      <div className="indicator-container">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
