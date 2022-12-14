import React from "react";
import Ratio from "react-bootstrap/Ratio";
const Gallery = () => {
  return (
    <div className="page-container">
      Gallery
      <div style={{ width: 660, height: "auto" }}>
        <Ratio aspectRatio="16x9">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/LVhNmk_J0Jc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Ratio>
      </div>
    </div>
  );
};

export default Gallery;
