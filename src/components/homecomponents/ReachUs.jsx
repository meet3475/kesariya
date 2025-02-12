import React from "react";
import { Container, Row, Col, Form, button, Alert } from "react-bootstrap";
import { ReachusForm } from "./ReachusForm";

const ReachUs = () => {
  return (
    <div className="home-reachusbg" style={{ overflow: "hidden" }}>
      <Container className="p-0">
        <Row className="my-5" style={{padding : "30px"}}>
          <Col sm={12} md={12} lg={6} xl={6}>
            <div className="reachus-text px-2">
              <h1 className="text-start them-font">Reach to Us</h1>
              <p style={{ textAlign: "justify", fontSize:"14px" }}>
                The Kesaria Textile Company produces clothing for women and is
                well-known among the best sarees manufacturers in Surat textile
                market. We have a large selection of fashionable blouses, dress
                material, twirling dupattas, sophisticated Kurtis, Leggings,
                designer Lehenga, Palazzo, attractive Trousers, wholesale
                designer Sarees, Stoles, Suits, and many more. According to
                customer requirements, we have a wide choice of products. We
                inspect every item before it is shipped to guarantee its high
                quality.
              </p>
              <p style={{ textAlign: "justify", fontSize:"14px" }}>
                The Kesaria Textile Company produces clothing for women and is
                well-known among the best sarees manufacturers in Surat textile
                market. We have a large selection of fashionable blouses, dress
                material, twirling dupattas, sophisticated Kurtis, Leggings,
                designer Lehenga, Palazzo, attractive Trousers, wholesale
                designer Sarees, Stoles, Suits, and many more. According to
                customer requirements, we have a wide choice of products. We
                inspect every item before it is shipped to guarantee its high
                quality.
              </p>
            </div>
          </Col>
          <ReachusForm />
        </Row>
      </Container>
    </div>
  );
};

export default ReachUs;
