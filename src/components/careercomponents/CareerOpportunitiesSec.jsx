import React from "react";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import { Card, Col, Container, Row, button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Opportunitiessec = ({ data }) => {
  const navigate = useNavigate();

  const viewdetails = (id) => {
    navigate(`/career/${id}`);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center them-font saree-heading pt-3">
            Current Opportunities
          </h2>
          <div className="d-flex justify-content-center">
            <img src={imageBorder} className="py-2 border-image" alt="Border" />
          </div>
          <div className="d-flex justify-content-center">
            <p className="text-center fw-bold them-font">
              We're building a culture at Kesariya Saee Fashion where amazing
              people (like you) can do their best work. If you're ready to grow
              your career and help millions of organizations grow better, you've
              come to the right place.
            </p>
          </div>
          {data.map((row, i) => {
            const pointsArray = row.points
              .split("\r\n")
              .map((point) => point.replace(/^-/, "").trim())
              .filter((point) => point);
            return (
              <Card
                className="rounded-5 my-4 theme-shadow"
                key={i}
                style={{ background: "#FFF8F8" }}
              >
                <div className="d-flex flex-column flex-md-row justify-content-between px-4 py-3">
                  <div>
                    <Card.Title className="text-start fw-bolder them-font">
                      <h4 className="fw-bolder">{row.title}</h4>
                    </Card.Title>
                    <ul>
                      {pointsArray.map((detail, idx) => (
                        <li className="them-font" key={idx}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-3 mt-md-0">
                    <button
                      variant="danger"
                      className="p-2 rounded-5 w-100 btn-red-to-black-color-move"
                      onClick={() => viewdetails(row.id)}
                    >
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
