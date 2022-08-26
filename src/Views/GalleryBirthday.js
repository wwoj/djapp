import React, { useEffect } from "react";
import Gallery from "../Components/Gallery";

const GalleryBirthday = (props) => {
  useEffect(() => {
    props.setPath(window.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="page-container">
      <Gallery />
    </div>
  );
};

export default GalleryBirthday;
