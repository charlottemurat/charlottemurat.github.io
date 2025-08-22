import "../styles/Polaroids.css";
import polaroid from "../images/polaroid-frame.png";
import pres from "../images/pres-team.JPG";
import spons from "../images/spons.jpg";
import oec from "../images/oec.JPG";
import funds from "../images/funds.JPG";
import qsc from "../images/qsc.JPG";
import useInView from "../components/useInView";

export default function Polaroids() {
  const [oneRef, oneInView] = useInView();
  const [twoRef, twoInView] = useInView();
  const [threeRef, threeInView] = useInView();
  const [fourRef, fourInView] = useInView();
  const [fiveRef, fiveInView] = useInView();

  return (
    <div className="pol-container">
      <div className="pol-top-row">
        <div id="one" ref={oneRef} className={"pol-img-container fade " + (oneInView ? "visible" : "")}>
          <div className="pol-desc">Currently overseeing an executive team of 55 & a $20,000+ budget at Queen's Women in Science and Engineering!</div>
          <img className="pol-img" alt="Dinosaur" src={pres}></img>
          <img id="pol-frame" alt="Dinosaur" src={polaroid}></img>
          <div className="pol-img-text">WiSE President (2025)</div>
        </div>
        <div id="two" ref={twoRef} className={"pol-img-container fade " + (twoInView ? "visible" : "")} style={{marginLeft: 200, marginRight: 200}}>
          <div className="pol-desc">Oversaw the development of 9 competitions for 300+ participants at the 2024 Ontario Engineering Competition!</div>
          <img className="pol-img" alt="Dinosaur" src={oec}></img>
          <img id="pol-frame" alt="Dinosaur" src={polaroid}></img>
          <div className="pol-img-text">OEC VP Competitions (2023)</div>
        </div>
        <div id="three" ref={threeRef} className={"pol-img-container fade " + (threeInView ? "visible" : "")}>
          <div className="pol-desc">Managed a budget of $20,000+ & secured funding from 6 corporate sponsors for the 2023 Queen's Space Conference!</div>
          <img className="pol-img" alt="Dinosaur" src={qsc}></img>
          <img id="pol-frame" alt="Dinosaur" src={polaroid}></img>
          <div className="pol-img-text">QSC Sponsorship & Finance Director (2022)</div>
        </div>
      </div>
      <div className="pol-bottom-row">
        <div id="four" ref={fourRef} className={"pol-img-container fade " + (fourInView ? "visible" : "")} style={{marginRight: 100}}>
          <div className="pol-desc">Secured $10,000+ in external funding from 10 companies, representing a 72% increase from the previous year!</div>
          <img className="pol-img" alt="Dinosaur" src={spons}></img>
          <img id="pol-frame" alt="Dinosaur" src={polaroid}></img>
          <div className="pol-img-text">WiSE Sponsorship Director (2024)</div>
        </div>
        <div id="five" ref={fiveRef} className={"pol-img-container fade " + (fiveInView ? "visible" : "")} style={{marginLeft: 100}}>
          <div className="pol-desc">Coordinated merchandise & bake sales where over $600 was raised and donated to local and national charities!</div>
          <img className="pol-img" alt="Dinosaur" src={funds}></img>
          <img id="pol-frame" alt="Dinosaur" src={polaroid}></img>
          <div className="pol-img-text">WiSE Fundraising Director (2023)</div>
        </div>
      </div>
    </div>
  );
}
