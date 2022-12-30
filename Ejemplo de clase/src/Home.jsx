import React, { Component } from "react";
import Productos from "./Productos";

class Home extends Component {
  render() {
    return (
      <>
        <div className="">Carousel</div>
        <Productos />
        <div className="">Banners</div>
      </>
    );
  }
}

export default Home;
