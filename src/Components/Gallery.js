import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Img1 from "../Pictures/pic1.jpg";
import Img2 from "../Pictures/pic2.jpg";
import Img3 from "../Pictures/pic3.jpg";
import Img4 from "../Pictures/pic4.jpg";
import Img5 from "../Pictures/pic5.jpg";
import Img6 from "../Pictures/pic6.jpg";
import Img7 from "../Pictures/pic7.jpg";
import Img8 from "../Pictures/pic8.jpg";
import Img9 from "../Pictures/pic9.jpg";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [currentId, setCurrentId] = useState(0);
  // useEffect(() => {
  //   console.log("ID changed");
  //   setTempImgSrc(data[currentId].imgSrc);
  // }, [currentId]);
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
      <div className="gallery">
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
