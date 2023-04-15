import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import main from "../images/Business-merger.svg";

import mission from "../images/mission.svg";
import vision from "../images/vision.png";
import objective from "../images/objective.png";
// import patron from "./images/CIG Patron's Card Design.png";
import patron1 from "../images/patron1.png";
import patron2 from "../images/patron2.png";
import patron3 from "../images/patron3.png";
import chairperson from "../images/Chairperson.png";
import vicecp from "../images/vicecp.png";

function About() {
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
    <>
      {/* <header
        _ngcontent-wws-c36=""
        class="page-header-ui bg-white page-header-ui-light"
      >
        <div _ngcontent-wws-c38="" class="page-header-ui-content pt-5">
          <div _ngcontent-wws-c38="" class="container px-5">
            <div _ngcontent-wws-c38="" class="row gx-5 align-items-center">
              <div
                _ngcontent-wws-c38=""
                data-aos="fade-up"
                class="text-start col-lg-6 aos-init aos-animate"
              >
                <h1 _ngcontent-wws-c38="" class="page-header-ui-title">
                  Corporate Interactions Group
                </h1>
                <p _ngcontent-wws-c38="" class="page-header-ui-text mb-5">
                  Corporate Interaction Group(CIG) is a student body of IITR
                  founded on Ist October 2015 that works for creating and
                  nurturing excellent relationships with industries catering to
                  technological and research needs of industry and walking
                  together towards innovating our society that is mutually
                  beneficial to both IIT Roorkee and the industries.
                </p>
              </div>
              <div
                _ngcontent-wws-c38=""
                data-aos="fade-up"
                data-aos-delay="50"
                class="col-lg-6 d-none d-lg-block aos-init aos-animate"
              >
                <img
                  _ngcontent-wws-c38=""
                  src={main}
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <sbpro-border _ngcontent-wws-c36="" _nghost-wws-c35="">
          <div _ngcontent-wws-c35="" class="svg-border-rounded text-light">
            <svg
              _ngcontent-wws-c35=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 144.54 17.34"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <path
                _ngcontent-wws-c35=""
                d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"
              ></path>
            </svg>
          </div>
        </sbpro-border>
      </header> */}

      {/* <div class="my-5 mx-5">
        <div class="row mt-5 d-flex justify-content-evenly">
          <div class="col-lg-3 shadow-lg pt-5 rounded-1">
            <img src={mission} width="70" height="70" />
            <h2>Mission</h2>
            <p>
              Building a stronger connection between academia & Industry via
              valuable collaborations.
            </p>
            <p></p>
          </div>
          <div class="col-lg-3 shadow-lg pt-5 rounded-1">
            <img src={vision} width="70" height="70" />
            <h2>Vision</h2>
            <p>
              To make IIT Roorkee a hub of Innovation, research and
              opportunities.
            </p>
            <p></p>
          </div>
          <div class="col-lg-3 shadow-lg pt-5 rounded-1">
            <img src={objective} width="70" height="70" />

            <h2>Objective</h2>
            <p>
              Knowledge Exchange Seminars Industry Interactions Events Corporate
              Collaborations.
            </p>
            <p></p>
          </div>
        </div>
      </div> */}
      {/* <h1>Administrative Body</h1>
      <br />
      <div class="d-flex justify-content-evenly my-4">
        <div class="card col-lg-2 shadow-lg mx-3 ">
          <img src={patron1} class="rounded-2" width />
        </div>
        <div class="card col-lg-2 shadow-lg mx-3">
          <img src={patron2} class="rounded-2" />
        </div>
        <div class="card col-lg-2 shadow-lg mx-3">
          <img src={patron3} class="rounded-2" />
        </div>
      </div>

      <h1>Student Body</h1>
      <br />
      <h3>Secreataries</h3>
      <div class="d-flex justify-content-evenly my-4">
        <div class="card col-lg-2 shadow-lg mx-3 ">
          <img src={chairperson} />
        </div>
        <div class="card col-lg-2 shadow-lg mx-3">
          <img src={vicecp} />
        </div>
      </div>
      <br />
      <h3>Team</h3>
      <nav>
        <button
          onClick={handleClick}
          name="W"
          class="btn btn-outline-primary mx-2"
        >
          Web Development
        </button>
        <button
          onClick={handleClick}
          name="E"
          class="btn btn-outline-primary mx-2 "
        >
          Events
        </button>
        <button
          onClick={handleClick}
          name="D"
          class="btn btn-outline-primary mx-2 "
        >
          Design
        </button>
        <button
          onClick={handleClick}
          name="C"
          class="btn btn-outline-primary mx-2 "
        >
          Content
        </button>
      </nav>
      <div class="container">
        <div
          class="row my-5 justify-content-evenly
      
      "
        >
          {data1.map((ele) => (
            <div class="col-sm-12 col-md-3 ">
              <img
                class="img-fluid my-2 border-end border-bottom border-start"
                alt=""
                src={process.env.PUBLIC_URL + "/images/" + ele + ".png"}
              ></img>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}
export default About;
