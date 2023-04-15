import "./stylesAbout.css";
// import Post from "./post";
import React from "react";
import { useState } from "react";
import main from "../images/Business-merger.svg";
import { Container, Row, Col, Image } from 'react-bootstrap';
import mission from "../images/mission.svg";
import vision from "../images/vision.png";
import objective from "../images/objective.png";
// import patron from "./images/CIG Patron's Card Design.png";
import patron1 from "../images/patron1.png";
import patron2 from "../images/patron2.png";
import patron3 from "../images/patron3.png";
import chairperson from "../images/Chairperson.png";
import vicecp from "../images/vicecp.png";
import postImage from "../images/Goodteam-cuate.svg";

export default function About2() {
  const [data1, setData1] = useState(["W1", "W2", "W3", "W4", "W5", "W6"]);
  const map1 = new Map();
  map1.set("W", 6);
  map1.set("E", 10);
  map1.set("C", 4);
  map1.set("D", 4);

  const handleClick = (event) => {
    let eve = event.target.name;
    const times = map1.get(eve);
    let data2 = [];
    for (let i = 1; i <= times; i++) {
      data2.push(eve + i);
    }
    setData1(data2);
  };
  return (
    <div className="blog">
        
      <div className="adminBodyDiv">
      
        <h1 id="adminHeading">Administrative Body</h1>
        <div className="adminBody">
          <img className="adminBodyImage" src={patron1} width alt="" />
          <img className="adminBodyImage" src={patron2} alt="" />
          <img className="adminBodyImage" src={patron3} alt="" />
        </div>
      </div>
      <h1 id="studentHeading">Student Body</h1>
      <br />
      <h2>Secreataries</h2>
      <div class="Secy">
        <img className="secyImage" src={chairperson} alt="" />
        <img className="secyImage" src={vicecp} alt="" />
      </div>
      <br />
      <h2>Team</h2>
      <div className="student">
          <button
            onClick={handleClick}
            name="W"
            className="button-30 stuButton "
          >
            Web Development
          </button>
          <button
            onClick={handleClick}
            name="E"
            className="button-30 stuButton"
          >
            Event
          </button>
          <button
            onClick={handleClick}
            name="C"
            className="button-30 stuButton"
          >
            Content{" "}
          </button>
          <button
            onClick={handleClick}
            name="D"
            className="button-30 stuButton"
          >
            Design
          </button>
        <div className="team">
          {data1.map((ele) => (
            <img
              className="teamEle"
              alt=""
              src={process.env.PUBLIC_URL + "/images/" + ele + ".png"}
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
}
