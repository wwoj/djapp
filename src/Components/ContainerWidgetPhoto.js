import React from "react";
import "../Style/ContainerWidget.scss";

function ContainerWidgetPhoto(props) {
  return (
    <div
      className="photo-container"
      style={{
        backgroundImage: `url(${props.photoURL})`
      }}
    ></div>
  );
}
export default ContainerWidgetPhoto;
