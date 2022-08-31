import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faXmark,
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Gallery = ({ data }) => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [currentId, setCurrentId] = useState(0);

  const getImg = (imgSrc, index) => {
    setTempImgSrc(imgSrc);
    setCurrentId(index);

    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <button
          className="btn-prev"
          onClick={() => {
            let tempId = currentId - 1;
            let maxIndex = data.length - 1;
            tempId = tempId < 0 ? maxIndex : tempId;
            setCurrentId(tempId);
            setTempImgSrc(data[tempId].imgSrc);
          }}
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faCircleChevronLeft}
            size="3x"
          />
        </button>

        <img src={tempImgSrc} alt="popup" />

        <button
          className="btn-next"
          onClick={() => {
            let tempId = currentId + 1;
            let maxIndex = data.length - 1;
            tempId = tempId > maxIndex ? 0 : tempId;
            setCurrentId(tempId);
            setTempImgSrc(data[tempId].imgSrc);
          }}
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faCircleChevronRight}
            size="3x"
          />
        </button>

        <FontAwesomeIcon
          style={{ color: "white" }}
          icon={faXmark}
          size="3x"
          className="picture-close"
          onClick={() => {
            setModel(false);
            setTempImgSrc("");
          }}
        />
      </div>
      <h1 class="gallery-title"> GALLERY</h1>

      <div className="gallery" id="galleryPicture">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => {
                getImg(item.imgSrc, index);
              }}
            >
              <img
                src={item.imgSrc}
                alt={`pic_${index}`}
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Gallery;
