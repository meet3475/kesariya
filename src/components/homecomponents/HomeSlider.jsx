import React, { useRef } from "react";
import { Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import demoimage from "../../assets/images/Rectangle 1909.webp";
import newImage from "../../assets/images/demoimage02.webp";
import MultiImageCard from "./MultipalCard";
export const Homeslider = () => {
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

  const cardData = [
    {
      images: [demoimage, newImage],
      text: "House Of Begum 1",
      backgroundColor: "#E1B679",
    },
    {
      images: [demoimage, newImage],
      text: "House Of Begum 2",
      backgroundColor: "#A9CCE3",
    },
    {
      images: [demoimage, newImage],
      text: "House Of Begum 3",
      backgroundColor: "#F7DC6F",
    },
    {
      images: [demoimage, newImage],
      text: "House Of Begum 4",
      backgroundColor: "#F7DC6F",
    },
    {
      images: [demoimage, newImage],
      text: "House Of Begum 5",
      backgroundColor: "#F7DC6F",
    },
    {
      images: [demoimage, newImage],
      text: "House Of Begum 6",
      backgroundColor: "#F7DC6F",
    },
    {
      images: [demoimage, newImage],
      text: "House Of Begum 7",
      backgroundColor: "#F7DC6F",
    },
    {
      images: [demoimage],
      text: "House Of Begum 8",
      backgroundColor: "#F7DC6F",
    },
  ];

  return (
    <Container>
      <div className="row">
        <div className="col-12">
          <div className="p-3 d-flex flex-wrap ">
            <Swiper
              ref={swiperRef}
              spaceBetween={10}
              slidesPerView={5}
              navigation={true}
              loop={true}
              centeredSlides={true}
              breakpoints={{
                340: {
                  slidesPerView: 1.5,
                  centeredSlides: true,
                },
                540: {
                  slidesPerView: 2,
                },
                650: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                  centeredSlides: false,
                },
                1200: {
                  slidesPerView: 5,
                  centeredSlides: false,
                },
                1400: {
                  slidesPerView: 5,

                  centeredSlides: false,
                },
              }}
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            >
              {cardData.length > 0 &&
                cardData.map((data, index) => (
                  <SwiperSlide key={index}>
                    <MultiImageCard
                      images={data.images}
                      text={data.text}
                      backgroundColor={data.backgroundColor}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Container>
  );
};
