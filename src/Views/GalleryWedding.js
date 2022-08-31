import React, { useEffect, useState } from "react";
import Gallery from "../Components/GalleryPictures";
import { GetPictures } from "../Services/ServiceGalleryWeeding";
import GalleryMovies from "../Components/GalleryMovies";

const GalleryWedding = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    props.setPath(window.location.pathname);
    GetPictures().then((res) => {
      setData(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="page-container">
      <Gallery data={data} />
      <GalleryMovies moviesData={MoviesData} />
    </div>
  );
};

export default GalleryWedding;

const MoviesData = [
  {
    left: "video",
    videoUrl: "https://www.youtube.com/embed/ntBOaJPmxdY",
    right: "text",
    title: "DJ na wesele",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a risus at nunc sollicitudin tincidunt. Morbi lobortis interdum luctus. Aenean id blandit nunc, in lobortis odio. Nulla tempus justo at dui volutpat bibendum. Fusce diam sapien, bibendum et enim ut, tempus convallis nisi. Quisque euismod metus rhoncus arcu mollis ultrices. Nunc eget aliquet erat, vel elementum libero. Aliquam lacinia luctus massa, ac pharetra nisl luctus vel. Duis tempor fringilla lectus non ornare. Integer finibus commodo justo quis elementum. Sed dapibus, justo et volutpat convallis, nibh neque pulvinar magna, et maximus purus ex sit amet nisi. Fusce elit sapien, posuere in semper vel, pulvinar sit amet turpis. Etiam iaculis neque eget tortor sagittis, ultricies laoreet neque feugiat. Aenean lacinia blandit fringilla",
  },
  {
    left: "text",
    videoUrl: "https://www.youtube.com/embed/ntBOaJPmxdY",
    right: "video",
    title: "DJ na wesele",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a risus at nunc sollicitudin tincidunt. Morbi lobortis interdum luctus. Aenean id blandit nunc, in lobortis odio. Nulla tempus justo at dui volutpat bibendum. Fusce diam sapien, bibendum et enim ut, tempus convallis nisi. Quisque euismod metus rhoncus arcu mollis ultrices. Nunc eget aliquet erat, vel elementum libero. Aliquam lacinia luctus massa, ac pharetra nisl luctus vel. Duis tempor fringilla lectus non ornare. Integer finibus commodo justo quis elementum. Sed dapibus, justo et volutpat convallis, nibh neque pulvinar magna, et maximus purus ex sit amet nisi. Fusce elit sapien, posuere in semper vel, pulvinar sit amet turpis. Etiam iaculis neque eget tortor sagittis, ultricies laoreet neque feugiat. Aenean lacinia blandit fringilla",
  },
  {
    left: "video",
    videoUrl: "https://www.youtube.com/embed/ntBOaJPmxdY",
    right: "text",
    title: "DJ na wesele",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a risus at nunc sollicitudin tincidunt. Morbi lobortis interdum luctus. Aenean id blandit nunc, in lobortis odio. Nulla tempus justo at dui volutpat bibendum. Fusce diam sapien, bibendum et enim ut, tempus convallis nisi. Quisque euismod metus rhoncus arcu mollis ultrices. Nunc eget aliquet erat, vel elementum libero. Aliquam lacinia luctus massa, ac pharetra nisl luctus vel. Duis tempor fringilla lectus non ornare. Integer finibus commodo justo quis elementum. Sed dapibus, justo et volutpat convallis, nibh neque pulvinar magna, et maximus purus ex sit amet nisi. Fusce elit sapien, posuere in semper vel, pulvinar sit amet turpis. Etiam iaculis neque eget tortor sagittis, ultricies laoreet neque feugiat. Aenean lacinia blandit fringilla",
  },
];
