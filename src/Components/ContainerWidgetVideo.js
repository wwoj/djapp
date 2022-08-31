import React from "react";
import "../Style/ContainerWidget.scss";

function ContainerWidgetVideo(props) {
  return (
    <div className={`video-container`}>
      <iframe
        src={props.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default ContainerWidgetVideo;
