import React from "react";
import ContainerWidget from "./ContainerWidget";

const GalleryMovies = ({ moviesData }) => {
  return (
    <>
      <div id="gallery-video">
        <h1 class="gallery-title"> VIDEOS</h1>
        {moviesData.map((item, index) => {
          if (typeof item.videoUrl === "undefined") {
            return (
              <ContainerWidget
                left={item.left}
                photoURL="https://images.unsplash.com/photo-1546447911-95677822edea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
                right={item.right}
                title={item.title}
                description={item.description}

                // video={"YT URL"}
              />
            );
          } else {
            return (
              <ContainerWidget
                left={item.left}
                // photoURL="https://images.unsplash.com/photo-1546447911-95677822edea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
                right={item.right}
                title={item.title}
                description={item.description}
                video={item.videoUrl}
              />
            );
          }
        })}
      </div>
    </>
  );
};
export default GalleryMovies;
