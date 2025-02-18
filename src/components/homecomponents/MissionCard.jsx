import React, { useState } from "react";
import missionimage1 from "../../assets/images/wcu-icon-2-1.svg.webp";
import missionimage2 from "../../assets/images/wcu-icon-2-2.svg.webp";
import missionimage3 from "../../assets/images/wcu-icon-2-3.svg.webp";
import missionimage4 from "../../assets/images/Rectangle 39909.webp";
import missionimage5 from "../../assets/images/missonimage-2.webp";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Card, Container, Collapse } from "react-bootstrap";

export const MissionCard = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questionsAnswers = [
    {
      question: "Weaving a Legacy of Quality and Integrity",
      answer:
        "At Kesaria Textile Company, we believe in weaving a legacy of quality, integrity, and innovation into every thread. With over 40+ years of experience as a leading women clothing manufacturer and saree manufacturer, we are committed to crafting textiles that stand the test of time, enriching lives, and protecting our planet. We are more than just a textile company; we are the embodiment of ethical craftsmanship and timeless style.",
      image: missionimage1,
    },
    {
      question: "Threads of Innovation, Woven with Care",
      answer:
        "At Kesaria Textile Company, we believe in weaving a legacy of quality, integrity, and innovation into every thread. With over 40+ years of experience as a leading women clothing manufacturer and saree manufacturer, we are committed to crafting textiles that stand the test of time, enriching lives, and protecting our planet. We are more than just a textile company; we are the embodiment of ethical craftsmanship and timeless style.",
      image: missionimage2,
    },
    {
      question: "Empowering Lives Through Textiles",
      answer:
        "At Kesaria Textile Company, we believe in weaving a legacy of quality, integrity, and innovation into every thread. With over 40+ years of experience as a leading women clothing manufacturer and saree manufacturer, we are committed to crafting textiles that stand the test of time, enriching lives, and protecting our planet. We are more than just a textile company; we are the embodiment of ethical craftsmanship and timeless style.",
      image: missionimage3,
    },
  ];

  return (
    <Container className="mission-sec py-5" style={{ overflow: "hidden" }}>
      <div className="row justify-content-center">
        <div className="d-flex flex-column flex-lg-row py-5 mt-5 mt-lg-0 them-font">
          <div className="col-12 col-md-12 col-lg-6 order-2 order-lg-1 container-info-mission">
            <div>
              <h2 className="text-start">Our Mission</h2>
            </div>
            <div>
              <h4 className="text-start fs-6 fw-medium mission-text">
                Kesaria Textile Company aims to be the industry leader in
                integrity, honesty, and efficiency. Through innovation and the
                development of our intellectual capacity, we will enhance our
                international presence.
              </h4>
            </div>
            <div className="d-flex flex-column justify-content-start align-items-center">
              <div className="col-lg-12 col-md-12 col-sm-12">
                {questionsAnswers.map((item, index) => (
                  <Card
                    key={index}
                    className="mb-3 rounded-4 accordionhover"
                    style={{ boxShadow: "3px 3px 1px 1px" }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <div
                      className="d-flex justify-content-between align-items-center p-2"
                      onClick={() => handleToggle(index)}
                      aria-controls={`example-collapse-text-${index}`}
                      aria-expanded={openIndex === index}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="d-flex align-items-center">
                        <img
                          className="p-2 responsive-img"
                          src={item.image}
                          style={{ height: "60px", width: "60px" }}
                          alt="Mission"
                        />
                        <div className="fw-bolder responsive-text">{item.question}</div>
                      </div>
                      <div>
                        {openIndex === index ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </div>
                    </div>
                    <Collapse in={openIndex === index}>
                      <div
                        className="p-3"
                        id={`example-collapse-text-${index}`}
                        style={{
                          maxHeight: openIndex === index ? "500px" : "0px",
                          overflow: "hidden",
                          transition:
                            "max-height 0s ease-in-out, padding 0.4s ease-in-out",
                          padding: openIndex === index ? "12px" : "0px",
                        }}
                      >
                        {item.answer}
                      </div>
                    </Collapse>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center align-items-center mt-3 mt-md-0  container-image-mission">
            <div className="d-flex justify-content-center position-relative container-mission">
              <img
                src={missionimage4}
                className="mission-main-image img-fluid"
                alt="Main Mission"
              />
              <div className="mission-redimage" data-aos="fade-right"></div>
              <div className="d-flex flex-column justify-content-center align-items-center our-mission-div">
                <p className="text-center fw-bold ">
                  40+ Years
                  <br />
                  of Working
                  <br />
                  Experience
                </p>
                <img
                  src={missionimage5}
                  style={{ width: "55%" }}
                  alt="Experience"
                />
                <div className="quarter-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
