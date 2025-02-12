import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import career1 from "../../assets/images/careerimg1.webp";
export const Careerfirstsec = () => {
  return (
    <div className="founder-bg">
      <Container className="mt-lg-5 mb-3 p-3">
        <Row className="mt-3">
          <Col xs={12} md={12} lg={6}>
            <div className="p-3">
              <h1 className="fs-1 fw-bold text-start">
                Opportunities in Kesaria Textile Company
              </h1>
              <p className="text-start them-font">
                Kesaria Textile Company is a manufacturer, wholesaler, and
                exporter of sarees and women’s clothing wear. We have a
                manufacturing capacity of more than one million pieces per
                month. Since the beginning, our company has been dedicated to
                customer satisfaction and we have put all our efforts into it.
                Clients are most valuable to us, and they are playing a major
                role in our success and accomplishment.
              </p>
              <p className="text-start them-font">
                Our firm has adopted a total quality management policy, which
                enables us to maintain the highest quality standards in our
                apparel range. In addition, we purchase fabric and other input
                from industry-permitted traders who have a deep understanding
                and expertise of the industry. By implementing a quality-focused
                management strategy, we are able to satisfy our customers and
                other retailers.
              </p>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div className="d-flex justify-content-center p-3">
              <img
                src={career1}
                alt="career image"
                className="img-fluid rounded-5 theme-shadow them-border"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
