import Navbar from "./components/NavBar";
import snolab from "./images/snolab.JPG";
import cloud1 from "./images/cloud1.png";
import cloud2 from "./images/cloud2.png";
import cloud3 from "./images/cloud3.png";
import resume from "./images/cv-cmurat.jpg";
import useInView from "./components/useInView";
import Carousel from "./components/Carousel";
import Selector from "./components/Selector";
import Polaroids from "./components/Polaroids";

function App() {
  const [titleRef, titleInView] = useInView();
  const [aboutRef, aboutInView] = useInView();
  const [projectsRef, projectsInView] = useInView();
  const [expRef, expInView] = useInView();
  const [leadRef, leadInView] = useInView();
  const [resRef, resInView] = useInView();
  const [conRef, conInView] = useInView();

  const onDownloadClick = () => {
    const pdfUrl = "/cv-cmurat.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "cv-cmurat.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <div id="background">
        <div id="p1" ref={titleRef} className={`fade ${titleInView ? "visible" : ""}`}>
        <img className="cloud c1" src={cloud2} alt="Dinosaur"/>
        <img className="cloud c2" src={cloud1} alt="Dinosaur"/>
        {/* <img className="cloud c3" src={cloud3} alt="Dinosaur"/> */}
        <img className="cloud c4" src={cloud3} alt="Dinosaur"/>
        <img className="cloud c5" src={cloud1} alt="Dinosaur"/>
        <img className="cloud c6" src={cloud3} alt="Dinosaur"/>
        <img className="cloud c7" src={cloud2} alt="Dinosaur"/>
          <div id="title-container">
            <p id="title">charlotte murat</p>
            <p id="subtitle">passionate about software engineering & biomedical research</p>
          </div>
        </div>
        <div id="p2">
          <div className="p-container">
            <div id="p-title-container">
            <p ref={aboutRef} id="page-title" className={`fade ${aboutInView ? "visible" : ""}`}>about me</p>
            </div>
            <div id="about-img-container">
            <div id="about-container">
              <p id="about1" className={`about-item fade ${aboutInView ? "visible" : ""}`}>➵ &nbsp;&nbsp;&nbsp;&nbsp;Currently a 5G Software Developer (Co-op) at Ericsson</p>
              <p id="about2" className={`about-item fade ${aboutInView ? "visible" : ""}`}>➵ &nbsp;&nbsp;&nbsp;&nbsp;Engineering Physics + Computing student at Queen's University</p>
              <p id="about3" className={`about-item fade ${aboutInView ? "visible" : ""}`}>➵ &nbsp;&nbsp;&nbsp;&nbsp;President of Queen's Women in Science & Engineering (WiSE)</p>
              <p id="about4" className={`about-item fade ${aboutInView ? "visible" : ""}`}>➵ &nbsp;&nbsp;&nbsp;&nbsp;I love going to the gym & used to be a rhythmic gymnast!</p>
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
        <div id="p4">
          <div className="p-container">
            <div id="p-title-container">
            <p ref={expRef} id="page-title" className={`fade ${expInView ? "visible" : ""}`}>experience</p>
            </div>
            <Selector/>
          </div>
        </div>
        <div id="p5">
          <div className="p-container">
            <div id="p-title-container">
            <p ref={leadRef} id="page-title" className={`fade ${leadInView ? "visible" : ""}`}>leadership</p>
            </div>
            <Polaroids/>
          </div>
        </div>
        <div id="p6">
          <div className="p-container">
            <div id="p-title-container">
              <p ref={resRef} id="page-title" className={`fade ${resInView ? "visible" : ""}`}>resume</p>
            </div>
            <div ref={resRef} className={`resume-container fade ${resInView ? "visible" : ""}`}>
              <img id="resume-img" src={resume} alt="Dinosaur"/>
              <button className="download" onClick={onDownloadClick}>Download my resume!</button>
            </div>
          </div>
        </div>
        <div id="p7">
          <div className="p-container">
            <div id="p-title-container">
            <p ref={conRef} id="page-title" className={`fade ${conInView ? "visible" : ""}`}>contact</p>
            </div>
            <div ref={conRef} className={`contact-container fade ${conInView ? "visible" : ""}`}>
              <p className="thanks">Thank you for viewing my website!</p>
              <p className="questions">contact me for more information :)</p>
              <a href="mailto:charlottemuratt@gmail.com" target="_blank" rel="noreferrer">
                <button className="download">Email</button>
              </a>
              <a href="https://github.com/charlottemurat" target="_blank" rel="noreferrer">
                <button className="download" style={{marginTop: 10}}>GitHub</button>
              </a>
            </div>
          </div>
        </div>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
