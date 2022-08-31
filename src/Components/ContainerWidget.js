import React from "react";
import "../Style/ContainerWidget.scss";
import ContainerWidgetVideo from "./ContainerWidgetVideo";
import ContainerWidgetText from "./ContainerWidgetText";
import ContainerWidgetPhoto from "./ContainerWidgetPhoto";

function ContainerWidget(props) {
  return (
    <section className="full-container" id={props.id}>
      <div className={`half-container ${props.left}`}>
        {typeOfLeftContent()}
      </div>
      <div className={`half-container ${props.right}`}>
        {typeOfRightContent()}
      </div>
    </section>
  );

  function typeOfLeftContent() {
    if (props.left === "video") {
      return <ContainerWidgetVideo video={props.video} />;
    }
    if (props.left === "text") {
      return (
        <ContainerWidgetText
          title={props.title}
          description={props.description}
        />
      );
    }
    if (props.left === "photo") {
      return <ContainerWidgetPhoto photoURL={props.photoURL} />;
    }
  }

  function typeOfRightContent() {
    if (props.right === "text") {
      return (
        <ContainerWidgetText
          title={props.title}
          description={props.description}
        />
      );
    }
    if (props.right === "video") {
      return <ContainerWidgetVideo video={props.video} />;
    }

    if (props.right === "photo") {
      return <ContainerWidgetPhoto photoURL={props.photoURL} />;
    }
  }
}
export default ContainerWidget;
