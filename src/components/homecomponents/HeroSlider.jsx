import React, { useState, useEffect } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import sliderImage from "../../assets/images/ezgif-2-044caaa4dd.gif";
import uperimage from "../../assets/images/ezgif-1-27d1c13b4f.gif";
import righticon from "../../assets/images/Vector.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../loaderspinnercomponents/Loader";

const Heroslider = ({ sliderData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const handleSlideNumberClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeIndex]);

  return (
    <div className="home-bgimage">
      <Container fluid className="px-0 hero-slider-container">
        <div className="row hero-main ps-md-0">
          <div className="col-12 px-0">
            <div className="w-100">
              <div>
                <div className="px-0">
                  <Carousel
                    fade
                    activeIndex={activeIndex}
                    controls={false}
                    onSelect={handleSelect}
                  >
                    {sliderData.length > 0 ? (
                      sliderData.map((slide, i) => (
                        <Carousel.Item key={i}>
                          <div className="">
                            <div
                              className={`d-flex ${
                                i === activeIndex ? "active" : ""
                              }`}
                            >
                              <img
                                src={slide.image}
                                alt="Slide"
                                style={{ width: "100%" }}
                                loading="lazy"
                                className="hero_slide_img"
                              />
                            </div>
                          </div>
                        </Carousel.Item>
                      ))
                    ) : (
                      <Carousel.Item>
                        <div>Loading...</div>
                      </Carousel.Item>
                    )}
                  </Carousel>
                </div>
                <div className="px-lg-0 slide-number-column">
                  {sliderData.length > 0 ? (
                    sliderData.map((_, i) => (
                      <div
                        key={i}
                        className={`slide-number ${
                          i === activeIndex ? "active" : ""
                        }`}
                        onClick={() => handleSlideNumberClick(i)}
                        style={{
                          cursor: "pointer",
                          fontFamily: '"Ribeye Marrow", serif',
                          marginLeft: "-5px",
                        }}
                      >
                        0{i + 1}
                      </div>
                    ))
                  ) : (
                    <div>Loading...</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Heroslider;
