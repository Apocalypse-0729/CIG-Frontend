import "./stylesAbout.css";
// import Post from "./post";
import React from "react";
import { useState } from "react";

import main from "../images/Business-merger.svg";

import mission from "../images/mission.svg";
import vision from "../images/vision.png";
import objective from "../images/objective.png";
// import patron from "./images/CIG Patron's Card Design.png";
import patron1 from "../images/patron1.png";
import patron2 from "../images/patron2.png";
import patron3 from "../images/patron3.png";
import center_image from "../images/Center-Image.svg"
import chairperson from "../images/Chairperson.png";
import vicecp from "../images/vicecp.png";
import postImage from "../images/Post Image.svg";
import bar from "../images/bar.svg";

export default function Blog() {
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
      <div className="banner">
        <div className="blogContent">
          <h1 id="top-heading">CORPORATE INTERACTIONS GROUP</h1>
          <div>
            <h2>Connect | Collaborate | Innovate. </h2>
            <p>
            Corporate Interactions Group (CIG) is a student body of IITR founded on 01st October 2015 that works for creating and nurturing excellent relationships with industries catering to technological and research needs of industry and walking together towards innovating our society that is mutually beneficial to both IIT Roorkee and the industries. 
            </p>
          </div>
        </div>
        <img className="postImage" src={postImage} alt=""></img>
      </div>
      <img src={center_image} alt="About-image"/>
      <div className="adminBodyDiv">
        <h1 id="adminHeading">Administrative Body  <br/><img src={bar} alt="bar"/></h1>
        
        <div className="adminBody">
          <img className="adminBodyImage" src={patron1} alt="" />
          <img className="adminBodyImage" src={patron2} alt="" />
          <img className="adminBodyImage" src={patron3} alt="" />
        </div>
      </div>
      <h1 id="studentHeading" className="Border border-bottom">Student Body<br/><img src={bar} alt="bar"/></h1>
      <br />
      <div class="Secy">
        <img className="secyImage" src={chairperson} alt="" />
        <img className="secyImage" src={vicecp} alt="" />
      </div>
      <br />
      <h1>Meet Our Team<br/><img src={bar} alt="bar"/></h1>
        <div className="student">
        <button type="button" onClick={handleClick} name ="W" class="btn btn-outline-primary">Web D Team</button>
        <button type="button" onClick={handleClick} name="D" class="btn btn-outline-primary">Design Team</button>
        <button type="button" onClick={handleClick} name="C" class="btn btn-outline-primary">Content Team</button>
        <button type="button" onClick={handleClick} name="E" class="btn btn-outline-primary">Events Team</button>
        <div className="team">
          {data1.map((ele) => (
            <img
              className="teamEle"
              alt=""
              // src={process.env.PUBLIC_URL + "/images/" + ele + ".png"}
              src={chairperson}
            ></img>
          ))}
        </div>
        </div>
      </div>
  );
}
