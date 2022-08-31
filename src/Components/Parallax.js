import React from "react";
import { Parallax } from "react-parallax";

const ParallaxImg = (props) => {
  return (
    <div id={props.id}>
      <Parallax
        bgImage={props.imgSrc}
        strength={-450}
        // style={{ height: "500px" }}
      >
        <div className="parallax-container">
          <p className="parallax-title">{props.title}</p>
          <p className="parallax-text">{props.text}</p>
        </div>
      </Parallax>
    </div>
  );
};
export default ParallaxImg;
