import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FirstImage = ({ image }) => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const imageLoader = new Image();
  //   imageLoader.src = image;
  //   imageLoader.onload = () => {
  //     setLoading(false);
  //   };
  // }, [image]);

  return (
    <>
      <div className="blogslider1">
        {/* {loading ? (
          <Skeleton height={500} width={"100%"} />
        ) : ( */}
        <img
          src={image}
          className="img-fluid w-100 first-img"
          alt={"Blog Slider"}
          loading="lazy"
        />
        {/* )} */}
      </div>
    </>
  );
};
export default FirstImage;
