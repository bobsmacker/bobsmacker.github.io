import * as React from "react";
import "./App.css";
import rectangle1 from "./assets/rectangle1.svg";
import ellipse from "./assets/ellipse.svg";
import polygon from "./assets/polygon.svg";
import rectangle from "./assets/rectangle.svg";
import vector from "./assets/vector.svg";
const App = () => {
  return (
    <div className="frame-1">
      <div className="flex-container">
        <div className="flex-container-1">
          <img className="polygon" src={polygon} />
          <img className="rectangle-3" src={rectangle1} />
        </div>
        <span className="title-title-title">Title Title Title</span>
        <span className="home">HOME</span>
        <span className="about-us">ABOUT US</span>
        <span className="projects">PROJECTS</span>
        <span className="contact">CONTACT</span>
        <img className="vector" src={vector} />
      </div>
      <span className="our-vision">OUR VISION</span>
      <span className="what-the-fuck-is-goi">
        what the fuck is going on bitches
      </span>
      <span className="lorem-ipsum-dolor-si">
        Lorem ipsum dolor sit amet consect adipiscing elit ed vestibul facibus
        ed eget elementum dio. Lorem ipsum dolor sit amet consect adipiscing
        elit ed vestibul facibus ed eget elementum dio. Lorem ipsum dolor sit
        amet consect adipiscing elit ed vestibul facibus ed eget elementum dio.
      </span>
      <div className="flex-container-2">
        <img className="ellipse" src={ellipse} />
        <span>Lorem ipsum </span>
      </div>
      <hr className="line" />
      <div className="flex-container-3">
        <img className="ellipse-1" src={ellipse} />
        <span>Lorem ipsum </span>
      </div>
      <div className="flex-container-4">
        <img className="ellipse-2" src={ellipse} />
        <span>Lorem ipsum </span>
      </div>
      <div className="flex-container-5">
        <img className="rectangle-1" src={rectangle} />
        <img className="rectangle-4" src={rectangle} />
      </div>
    </div>
  );
};
export default App;
