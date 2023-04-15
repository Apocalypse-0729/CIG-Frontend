import React, { useState, useRef } from "react";
import "./Department.css";

import building from "../images/building.jpg";
import list from "./departmentInfo";

const Departments = () => {
  const [background, setBackground] = useState("");
  const [clickBackground, setClickBackground] = useState("");
  const [id, setId] = useState("");

  const backgroundColor_List = ["#06ca3d", "#026ba1"];

  const OnHoverHandler = () => {
    let indx;
    do {
      indx = Math.floor(2 * Math.random());
    } while (background === backgroundColor_List[indx]);
    setBackground(backgroundColor_List[indx]);
  };

  return (
    <>
      <div className="HeadingD">
        <h1> Departments</h1>
      </div>

      <div className="department">
        {list.map((data, idx) => {
          return (
            <>
              <div
                className="cardD"
                key={data.id}
                onMouseEnter={OnHoverHandler}
                style={{
                  backgroundColor: `${id === idx ? clickBackground : ""}`,
                  coloimppr: `${id === idx ? "#ffff" : ""}`,
                  "--hover_color": background,
                }}
              >
                <div className="departmentEle">
                  <img id="dept" src={building} alt="dept" />
                  <h3 id="deptName">{data.dep}</h3>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Departments;
