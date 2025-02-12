import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutUsSlider from "./AboutUsSlider";

export const AboutusSec = ({ aboutuslist }) => {
  
  const cleanedDescription =
    aboutuslist?.description?.replace(/<br\s*\/?>/gi, "") || "";

  return (
    <div className="Aboutus-main mt-lg-4">
      <Container>
        <Row>
          <Col xl={6} lg={12} md={12} sm={12} xs={12} className="aboutussec1">
            <div className="parent-aboutus">
              <h1 className="mt-3">About us</h1>
              <p
                className="text-start them-font fs-5 fw-normal"
                dangerouslySetInnerHTML={{ __html: cleanedDescription }}
              />
            </div>
          </Col>
          <AboutUsSlider aboutuslist={aboutuslist} />
        </Row>
      </Container>
    </div>
  );
};
