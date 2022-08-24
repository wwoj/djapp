import React from "react";
import "../Style/ContainerWidget.scss";

function ContainerWidgetVideo(props) {
  return <div className={`video-container`}>
    {props.video}
    </div>;
}
export default ContainerWidgetVideo;
