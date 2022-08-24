import React from "react";
import "../Style/ContainerWidget.scss";

function ContainerWidgetText(props) {
  return (
    <div className="text-container">
      <ul>
        <li></li>
        <li>
          <h2>{props.title}</h2>
        </li>
        <li>
          <h3>{props.description}</h3>
        </li>
        <li></li>
      </ul>
    </div>
  );
}
export default ContainerWidgetText;
