import React from "react";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import { Container, Card } from "react-bootstrap";
import Slider from "react-slick";
export const OwnClothingCard = ({ ImageData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <Container className="pb-5 own-card-rainbow">
      <div className="row ">
        <div className="col-12">
          <div className="text-center saree-heading ">
            How To Start Your OWN
            <br /> Clothing Business?
          </div>
          <div className="d-flex justify-content-center">
            <img src={imageBorder} className="py-4 border-image" alt="border" />
          </div>
          <div className="container px-3">
            <p
              className="text-center own-text"
              style={{ textAlign: "justify" }}
            >
              As a supplier of textile products, we have a wide range of
              products available in India. We are offering international
              companies the chance to boost their sales through our traditional
              party wear saree collection as well as our latest designer saree
              collection.
            </p>
          </div>
          <Slider {...settings} className="mb-2">
            {ImageData.map((card, index) => (
              <div key={index} className="d-flex justify-content-center mb-2">
                <div
                  className="border  px-2"
                  style={{
                    borderRadius: "50%",
                    background: `linear-gradient(to right , ${
                      card.gradientColor1 || "transparent"
                    }, ${
                      card.gradientColor2 || "transparent"
                    } 80%, #E4E4E4 20%)`,
                  }}
                >
                  <Card className="my-2 text-center d-flex justify-content-center align-items-center own-card">
                    <Card.Img
                      variant="top"
                      src={card.image}
                      className="pt-1 own-card-img"
                    />
                    <div className="pt-0">
                      <Card.Text className="own-card-title my-0 fw-bolder">
                        {card.title}
                      </Card.Text>
                      <Card.Text className="own-card-desc px-3 pt-1">
                        {card.description}
                      </Card.Text>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};
