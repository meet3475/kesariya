import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import imageBorder from "../../assets/images/bestsellerborder.webp";
// import founder1 from "../../assets/images/founder1.webp";
import foundercard from "../../assets/images/foundercardbg.webp";
import foundercard2 from "../../assets/images/foundercardbg2.webp";
import founder1 from "../../assets/images/Founder_Image_-01-removebg-preview.png"
import founder2 from "../../assets/images/Founder_Image_-02-removebg-preview.png"

export const Founder = () => {
  return (
    <div className="founder-bg pb-5">
      <Container>
        <Row>
          <h1 className="text-center them-font mt-3 saree-heading">Founders</h1>
          <div className="d-flex justify-content-center">
            <img
              src={imageBorder}
              className="pb-2 pt-1 border-image"
              alt="border"
            />
          </div>
          <div className="d-flex justify-content-center pb-5 pt-3">
            <p className="text-center">
              Our firm has adopted a total quality management policy, which
              enables us to maintain the highest quality standards in our
              apparel range. In addition, we purchase fabric and other input
              from industry-permitted traders who have a deep understanding and
              expertise of the industry. By implementing a quality-focused
              management strategy, we are able to satisfy our customers and
              other retailers.
            </p>
          </div>
          <Col md={6} sm={12} xs={12} className="p-3">
            <Card
              style={{
                border: "2px solid $them-black-color",
                backgroundImage: `url(${foundercard})`,
                borderRadius : "2.35rem"
              }}
            >
              <div className="row no-gutters">
                <div className="col-md-4 position-reletive">
                  <Card.Img
                    src={founder1}
                    className="position-absolute"
                    style={{ width: "35%", bottom: "0px", left:"0px"}}
                  />
                </div>
                <div className="col-md-8">
                  <Card.Body>
                    <p className="text-start them-font my-8">
                      As a Founder and CEO of Kesaria Textile Company, I
                      consider quality and innovation as our success targets and
                      would like to express my gratitude to everyone who gave
                      their passion to us.
                    </p>
                    <div className="ceoimage">
                      <p className="fs-2 fw-bold them-font">Ritesh Modi</p>
                      <button className="fs-6 fs-bold them-font them-bg p-2 textwhite-color rounded-4 border-0">
                        <span>Founder & CEO</span>
                      </button>
                    </div>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={6} sm={12} xs={12} className="p-3">
            <Card
              style={{
                border: "2px solid $them-black-color",
                backgroundImage: `url(${foundercard2})`,
                borderRadius : "2.35rem"
              }}
            >
              <div className="row no-gutters">
                <div className="col-md-4 position-reletive">
                  <Card.Img
                    src={founder2}
                    className="position-absolute"
                    style={{ width: "35%", bottom: "0", left: "13px" }}
                  />
                </div>
                <div className="col-md-8">
                  <Card.Body className="">
                    <p className="text-start them-font ">
                      As a Founder and CEO of Kesaria Textile Company, I
                      consider quality and innovation as our success targets and
                      would like to express my gratitude to everyone who gave
                      their passion to us.
                    </p>
                    <div className="ceoimage">
                      <p className="fs-2 fw-bold them-font">Ritesh Modi</p>
                      <button className="fs-6 fs-bold them-font them-bg textwhite-color p-2 rounded-4 border-0 ">
                        <span>Founder & CEO</span>
                      </button>
                    </div>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
