import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

const Blogslider = ({ data }) => {
  const navigate = useNavigate();

  const handleSlideClick = (category_id) => {
    navigate(`/product/${category_id}`);
  };

  return (
    <Carousel controls={true} className="d-none d-lg-block" indicators={true}>
      {data.map((item, index) => (
        <Carousel.Item
          key={index}
          interval={2000}
          style={{ cursor: "pointer" }}
        >
          <img
            className="d-block w-100 blogslider"
            src={item?.image || item?.image2}
            alt={item?.title}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Blogslider;
