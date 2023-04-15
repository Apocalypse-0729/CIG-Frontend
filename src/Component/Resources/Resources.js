import React, { Component } from "react";

import Departments from "./Department";
import Groups from "./Groups";

class Resources extends Component {
  render() {
    return (
      <>
        <Departments />
        <Groups />
      </>
    );
  }
}

export default Resources;
