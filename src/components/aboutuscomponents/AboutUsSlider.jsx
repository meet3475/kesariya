import React, { useRef, useEffect } from "react";
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUsSlider = ({ aboutuslist }) => {
  const leftSliderRef = useRef(null);
  const rightSliderRef = useRef(null);

  const leftSettings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    arrows: false,
    pauseOnHover: false,
    rtl: true,
  };

  const rightSettings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    arrows: false,
    pauseOnHover: false,
  };

  useEffect(() => {
    if (leftSliderRef.current && rightSliderRef.current) {
      leftSliderRef.current.slickGoTo(0);
      rightSliderRef.current.slickGoTo(0);
    }
  }, [aboutuslist]);

  return (
    <Col xl={6} md={12} lg={6} sm={12} xs={12} className="aboutussec2">
      <div className="slider-wrapper">
        <div className="slider-container">
          <Slider {...leftSettings} ref={leftSliderRef}>
            {aboutuslist?.imageSet1?.map((content, index) => (
              <div key={index} className="slider-content">
                <img
                  src={content}
                  className="slider-image"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="slider-container">
          <Slider {...rightSettings} ref={rightSliderRef}>
            {aboutuslist?.imageSet2?.map((content, index) => (
              <div key={index} className="slider-content">
                <img
                  src={content}
                  className="slider-image"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Col>
  );
};

export default AboutUsSlider;
