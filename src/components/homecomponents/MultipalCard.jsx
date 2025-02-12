import React, { useRef } from "react";
import { Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";

const MultiImageCard = ({ images, text, backgroundColor }) => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Card className="slider-card" style={{ background: backgroundColor }}>
            <Card.Img variant="top" src={image} className="mb-2" />
            <Card.Text className="text-center">{text}</Card.Text>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default MultiImageCard;
