import React, { useState } from "react";
import { Card, Collapse, Container, Row, Col } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import missionimage4 from "../../assets/images/helusimage1.webp";
import missionimage5 from "../../assets/images/helusimage2.webp";
import missionimage6 from "../../assets/images/helusimage3.webp";
import missionimage7 from "../../assets/images/helpusdotimage.webp";

const Helpus = ({ questionsAnswers }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="home-helpusbg pt-2 pb-4">
      <Container className="">
        <Row className="">
          <Col xl={6} lg={12} xs={12}>
            <p className="fs-3 my-3 fw-bolder">What can we help with today?</p>
            {questionsAnswers.map((item, index) => (
              <Card
                key={index}
                className="mb-3 p-2 rounded-3 accordionhover"
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
                  <h4 className="fs-6 fw-bolder">{item.question}</h4>
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
          </Col>
          <Col className="d-none d-lg-block col-12 col-xl-6 col-sm-12 p-4">
            <div className="w-100 custom-img-main-container d-grid">
              <div className="custom-img-sub-container">
                <img src={missionimage4} alt="" />
              </div>
              <div className="custom-img-peta-container">
                <img src={missionimage5} alt="" />
              </div>
              <div className="custom-img-mini-container">
                <img src={missionimage6} alt="" />
              </div>
              <div className="custom-img-dot-container">
                <img src={missionimage7} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Helpus;
