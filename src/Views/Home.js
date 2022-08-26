import React, { useEffect } from "react";
import ParallaxImg from "../Components/Parallax.js";
import ContainerWidget from "../Components/ContainerWidget.js";
import Contact from "../Components/Contact.js";
const Home = (props) => {
  useEffect(() => {
    props.setPath(window.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="page-container">
      <ParallaxImg
        title="DJ FOR YOU PARTY"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imgSrc="https://wallpaperaccess.com/full/220675.jpg"
      />
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

      <ParallaxImg
        title="CONTACT"
        text=""
        imgSrc="https://i.etsystatic.com/17955362/r/il/aba266/1560218792/il_fullxfull.1560218792_p0wt.jpg"
      />

      <Contact />
    </div>
  );
};

export default Home;

const elementToPrint = (
  <iframe
    src="https://www.youtube.com/embed/ntBOaJPmxdY"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);
