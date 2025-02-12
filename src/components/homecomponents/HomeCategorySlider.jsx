import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Container } from "react-bootstrap";

const Homecategoryslider = ({ sliderimage }) => {
  return (
    <Container fluid>
      <div className="row">
        <div className="col-12">
          <div className="w-100">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {sliderimage.map((slide, i) => (
                <SwiperSlide key={i}>
                  <img src={slide.image} alt="slide" className="img-fluid" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Homecategoryslider;
