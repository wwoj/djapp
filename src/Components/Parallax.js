import React from "react";
import { Parallax } from "react-parallax";

const ParallaxImg = (props) => {
  return (
    <Parallax
      bgImage={props.imgSrc}
      strength={-500}
      style={{ height: "500px" }}
    >
      <div className="parallax-container">
        <p className="parallax-title">{props.title}</p>
        <p className="parallax-text">{props.text}</p>
      </div>
    </Parallax>
  );
};
export default ParallaxImg;
