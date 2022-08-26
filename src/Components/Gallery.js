import React, { useState } from "react";
import ContainerWidget from "./ContainerWidget";
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
      <ContainerWidget
        left="photo"
        photoURL="https://images.unsplash.com/photo-1546447911-95677822edea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
        right="text"
        title="DJ na wesele"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a risus at nunc sollicitudin tincidunt. Morbi lobortis interdum luctus. Aenean id blandit nunc, in lobortis odio. Nulla tempus justo at dui volutpat bibendum. Fusce diam sapien, bibendum et enim ut, tempus convallis nisi. Quisque euismod metus rhoncus arcu mollis ultrices. Nunc eget aliquet erat, vel elementum libero. Aliquam lacinia luctus massa, ac pharetra nisl luctus vel. Duis tempor fringilla lectus non ornare. Integer finibus commodo justo quis elementum. Sed dapibus, justo et volutpat convallis, nibh neque pulvinar magna, et maximus purus ex sit amet nisi. Fusce elit sapien, posuere in semper vel, pulvinar sit amet turpis. Etiam iaculis neque eget tortor sagittis, ultricies laoreet neque feugiat. Aenean lacinia blandit fringilla"
      />
      <ContainerWidget
        left="text"
        title="DJ na wesele"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a risus at nunc sollicitudin tincidunt. Morbi lobortis interdum luctus. Aenean id blandit nunc, in lobortis odio. Nulla tempus justo at dui volutpat bibendum. Fusce diam sapien, bibendum et enim ut, tempus convallis nisi. Quisque euismod metus rhoncus arcu mollis ultrices. Nunc eget aliquet erat, vel elementum libero. Aliquam lacinia luctus massa, ac pharetra nisl luctus vel. Duis tempor fringilla lectus non ornare. Integer finibus commodo justo quis elementum. Sed dapibus, justo et volutpat convallis, nibh neque pulvinar magna, et maximus purus ex sit amet nisi. Fusce elit sapien, posuere in semper vel, pulvinar sit amet turpis. Etiam iaculis neque eget tortor sagittis, ultricies laoreet neque feugiat. Aenean lacinia blandit fringilla"
        right="video"
        video={elementToPrint}
      />
      <ContainerWidget
        left="photo"
        photoURL="https://images.unsplash.com/photo-1460494936962-50da3863c15b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
        right="text"
        title="DJ na wesele"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a risus at nunc sollicitudin tincidunt. Morbi lobortis interdum luctus. Aenean id blandit nunc, in lobortis odio. Nulla tempus justo at dui volutpat bibendum. Fusce diam sapien, bibendum et enim ut, tempus convallis nisi. Quisque euismod metus rhoncus arcu mollis ultrices. Nunc eget aliquet erat, vel elementum libero. Aliquam lacinia luctus massa, ac pharetra nisl luctus vel. Duis tempor fringilla lectus non ornare. Integer finibus commodo justo quis elementum. Sed dapibus, justo et volutpat convallis, nibh neque pulvinar magna, et maximus purus ex sit amet nisi. Fusce elit sapien, posuere in semper vel, pulvinar sit amet turpis. Etiam iaculis neque eget tortor sagittis, ultricies laoreet neque feugiat. Aenean lacinia blandit fringilla"
      />
    </>
  );
};
export default Gallery;
const elementToPrint = (
  <iframe
    src="https://www.youtube.com/embed/ntBOaJPmxdY"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);
