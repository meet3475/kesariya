import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import reviewshape1 from "../../assets/images/reviewshape1.webp";
import reviewshape2 from "../../assets/images/reviewshapenew2.webp";
import reviewshape3 from "../../assets/images/reviewshape3.webp";
import Slider from "react-slick";
import { Autoplay } from "swiper/modules";
export const Homereview = () => {
  const reviewsData = [
    {
      name: "Kaushal Kumar Thakur",
      initial: "K",
      backgroundColor: "#FFDED9",
      color: "#D22019",
      review:
        "Very Nice Quality and Designs... I'm Searching for Better Products but in Kesaria Textile Company I found Best Products…",
      rating: 5,
      reviewShape: { src: reviewshape1, alt: "Review Shape 1" },
    },
    {
      name: "Paras Upadhaye",
      initial: "P",
      backgroundColor: "#F9E5F3",
      color: "#CA53BC",
      review:
        "Product is exactly as advertised! Very pleased!! Will continue to recommend it. The sales Department is Very Humble and helpful",
      rating: 5,
      reviewShape: null,
    },
    {
      name: "Swetha Sriram",
      initial: "S",
      backgroundColor: "#DDEDFA",
      color: "#185ABD",
      review:
        "Very nice and responsive! It was a great experience! Customer care executives are polite and try their best to help",
      rating: 5,
      reviewShape: null,
    },
    {
      name: "Yukta Patel",
      initial: "Y",
      backgroundColor: "#FFE5C2",
      color: "#BD6100",
      review:
        "Thank you for offering these beautifully unique sarees and kurtis they are flattering and gorgeous",
      rating: 5,
      reviewShape: { src: reviewshape3, alt: "Review Shape 3" },
    },
    {
      name: "Phool Chand",
      initial: "P",
      backgroundColor: "#E5FBD3",
      color: "#00853E",
      review:
        "  Nice company and beautiful designs in complete women's wear.They have great collection and business ideas for shopowners and startups from home!",
      rating: 5,
      reviewShape: { src: reviewshape1, alt: "Review Shape 1" },
    },
    {
      name: "Deepal Juyal",
      initial: "D",
      backgroundColor: "#FFDED9",
      color: "#D22019",
      review:
        " I just received my order, and I thank you so much. You arethe best online shopping place and you made my weddingamazing. Great customer service.",
      rating: 5,
      reviewShape: null,
    },
    {
      name: "Ravindra Sinnarkar",
      initial: "R",
      backgroundColor: "#F9E5F3",
      color: "#CA53BC",
      review:
        "  Best shop for all-purpose designer dresses,lahenga & sarees. Being a customer I am fully satisfied with the gesture. Neetu guided us in many ways in selecting sarees and helped us in choosing colours",
      rating: 5,
      reviewShape: null,
    },
    {
      name: "Kumar Ch",
      initial: "K",
      backgroundColor: "#FFDED9",
      color: "#D22019",
      review:
        "I just received my order, and I thank you so much. You arethe best online shopping place and you made my weddingamazing. Great customer service.",
      rating: 5,
      reviewShape: { src: reviewshape3, alt: "Review Shape 3" },
    },
    {
      name: "Devanshi Shah",
      initial: "D",
      backgroundColor: "#F9E5F3",
      color: "#CA53BC",
      review:
        "    Nice place with a huge variety of collections, would recommend people who are starting their own business to visit this place and start with the products they offer",
      rating: 5,
      reviewShape: { src: reviewshape1, alt: "Review Shape 1" },
    },
    {
      name: "Ruchi Jakhmola",
      initial: "R",
      backgroundColor: "#DDEDFA",
      color: "#185ABD",
      review:
        "  I enjoyed shopping in Kesaria Textile, Ishwari ma'amassisted us and did her best to show us the best qualitySaree under our budget, we are very happy and lookingforward to shopping often here.",
      rating: 5,
      reviewShape: null,
    },
    {
      name: "Mahesh vadhiyar",
      initial: "M",
      backgroundColor: "#E5FBD3",
      color: "#00853E",
      review: "Mahesh prajapati , Best price ,Good service",
      rating: 5,
      reviewShape: null,
    },
    {
      name: "Duraivelu Janarthanan",
      initial: "D",
      backgroundColor: "#FFDED9",
      color: "#BD6100",
      review: "Our experience with their service was excellent. They were responsive, helpful,",
      rating: 5,
      reviewShape: { src: reviewshape3, alt: "Review Shape 3" },
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="review-bg pt-4 pb-4">
      <Container>
        <div
          className="text-center fs-3 saree-heading pt-3"
          data-aos="fade-up"
        >
          Over 2500+ Satisfied Retails With a<br /> 5-Star Reviews
        </div>
        <div className="d-flex justify-content-center">
          <img
            src={imageBorder}
            alt="bestsellerborder"
            className="pt-2 pb-3 border-image"
          />
        </div>
        <Carousel
          className=" d-none d-lg-block custom-bgcolor-change-carousel"
          interval={null}
        >
          <Carousel.Item>
            <div className="d-flex flex-column flex-lg-row justify-content-center gap-3 py-4">
              <div className="d-flex flex-column flex-lg-column justify-content-center sm-review">
                <div
                  className="d-none d-lg-flex justify-content-end review-shape-1"
                  data-aos="fade-up-left"
                >
                  <img src={reviewshape1} alt="Review Shape 1" width={"50px"} />
                </div>
                <Card
                  className="mb-3 p-3 theme-shadow rounded-5 border border-dark mt-3"
                  style={{ width: "20rem", height:"17rem", overflow: "hidden" }}
                >
                  <div className="d-flex">
                    <div
                      className="border rounded-circle text-center"
                      style={{
                        width: "75px",
                        height: "75px",
                        fontSize: "45px",
                        backgroundColor: "#FFDED9",
                        color: "#D22019",
                        fontWeight: "600",
                      }}
                    >
                      K
                    </div>

                    <div className="p-3">
                      <Card.Title>Kaushal Kumar Thakur</Card.Title>
                      <Card.Text>
                        {[1, 2, 3, 4, 5].map((_, index) => (
                          <i
                            key={index}
                            className="bi bi-star-fill text-warning"
                          ></i>
                        ))}
                      </Card.Text>
                    </div>
                  </div>
                  <div className="border-top my-2"></div>
                  <Card.Text>
                    Very Nice Quality and Designs... I'm Searching for Better
                    Products but in Kesaria Textile Company I found Best
                    Products.
                  </Card.Text>
                </Card>
              </div>

              <div className="d-flex flex-column sm-review">
                <Card
                  className="mb-3 p-3 theme-shadow rounded-5 border border-dark "
                  style={{ width: "20rem", height:"17rem", overflow: "hidden" }}
                >
                  <div className="d-flex">
                    <div
                      className="border rounded-circle text-center"
                      style={{
                        width: "75px",
                        height: "75px",
                        fontSize: "45px",
                        backgroundColor: "#F9E5F3",
                        color: "#CA53BC",
                        fontWeight: "600",
                      }}
                    >
                      P
                    </div>
                    <div className="p-3">
                      <Card.Title>Paras Upadhaye</Card.Title>
                      <Card.Text>
                        {[1, 2, 3, 4, 5].map((_, index) => (
                          <i
                            key={index}
                            className="bi bi-star-fill text-warning"
                          ></i>
                        ))}
                      </Card.Text>
                    </div>
                  </div>
                  <div className="border-top my-2"></div>
                  <Card.Text>
                    Product is exactly as advertised! Very pleased!! Will
                    continue to recommend it. The sales Department is Very
                    Humble and helpful.
                  </Card.Text>
                </Card>

                <Card
                  className="mb-3 p-3 theme-shadow rounded-5 border border-dark"
                  style={{ width: "20rem", height:"17rem", overflow: "hidden" }}
                >
                  <div className="d-flex">
                    <div
                      className="border rounded-circle text-center"
                      style={{
                        width: "75px",
                        height: "75px",
                        fontSize: "45px",
                        backgroundColor: "#DDEDFA",
                        color: "#185ABD",
                        fontWeight: "600",
                      }}
                    >
                      S
                    </div>
                    <div className="p-3">
                      <Card.Title>Swetha Sriram</Card.Title>
                      <Card.Text>
                        {[1, 2, 3, 4, 5].map((_, index) => (
                          <i
                            key={index}
                            className="bi bi-star-fill text-warning"
                          ></i>
                        ))}
                      </Card.Text>
                    </div>
                  </div>
                  <div className="border-top my-2"></div>
                  <Card.Text>
                    Very nice and responsive! It was a great experience!
                    Customer care executives are polite and try their best to
                    help.
                  </Card.Text>
                </Card>
              </div>

              <div className="d-flex flex-column sm-review">
                <div
                  className="d-none d-lg-flex justify-content-lg-start align-items-start mb-3 mt-lg-3"
                  data-aos="fade-up-left"
                >
                  <img src={reviewshape3} alt="Review Shape 3" width={"50px"} />
                </div>
                <Card
                  className="mb-3 p-3 theme-shadow rounded-5 border border-dark"
                  style={{ width: "20rem", height:"17rem", overflow: "hidden" }}
                >
                  <div className="d-flex">
                    <div
                      className="border rounded-circle text-center"
                      style={{
                        width: "75px",
                        height: "75px",
                        fontSize: "45px",
                        backgroundColor: "#FFE5C2",
                        color: "#BD6100",
                        fontWeight: "600",
                      }}
                    >
                      Y
                    </div>
                    <div className="p-3">
                      <Card.Title>Yukta Patel</Card.Title>
                      <Card.Text>
                        {[1, 2, 3, 4, 5].map((_, index) => (
                          <i
                            key={index}
                            className="bi bi-star-fill text-warning"
                          ></i>
                        ))}
                      </Card.Text>
                    </div>
                  </div>
                  <div className="border-top my-2"></div>
                  <Card.Text>
                    thank you for offering these beautifully unique sarees and
                    kurtis they are flattering and gorgeous.
                  </Card.Text>
                </Card>
                <div
                  className="d-none d-lg-flex justify-content-lg-start"
                  data-aos="fade-left"
                >
                  <img src={reviewshape2} alt="ReviewShape2" width={"50px"} />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex flex-column flex-lg-row justify-content-center gap-3 py-4">
              <div className="d-flex flex-column flex-lg-column justify-content-center sm-review">
                <div
                  className="d-none d-lg-flex justify-content-end review-shape-1"
                  data-aos="fade-up-left"
                >
                  <img src={reviewshape1} alt="Review Shape 1" width={"50px"} />
                </div>
                <Card
                  className="mb-3 p-3 theme-shadow rounded-5 border border-dark mt-3"
                  style={{ width: "20rem", height:"17rem", overflow: "hidden" }}
                >
                  <div className="d-flex">
                    <div
                      className="border rounded-circle text-center"
                      style={{
                        width: "75px",
                        height: "75px",
                        fontSize: "45px",
                        backgroundColor: "#E5FBD3",
                        color: "#00853E",
                        fontWeight: "600",
                      }}
                    >
                      P
                    </div>

                    <div className="p-3">
                      <Card.Title>Phool Chand</Card.Title>
                      <Card.Text>
                        {[1, 2, 3, 4, 5].map((_, index) => (
                          <i
                            key={index}
                            className="bi bi-star-fill text-warning"
                          ></i>
                        ))}
                      </Card.Text>
                    </div>
                  </div>
                  <div className="border-top my-2"></div>
                  <Card.Text>
                    Nice company and beautiful designs in complete women's wear.
                    They have great collection and business ideas for shop
                    owners and startups from home!.
                  </Card.Text>
                </Card>
              </div>

              <div className="d-flex flex-column sm-review">
                <Card
                  className="mb-3 p-3 theme-shadow rounded-5 border border-dark"
                  style={{ width: "20rem", height:"17rem", overflow: "hidden" }}
                >
                  <div className="d-flex">
                    <div
                      className="border rounded-circle text-center"
                      style={{
                        width: "75px",
                        height: "75px",
                        fontSize: "45px",
                        backgroundColor: "#DDEDFA",
                        color: "#185ABD",
                        fontWeight: "600",
                      }}
                    >
                      D
                    </div>
                    <div className="p-3">
                      <Card.Title>Deepal Juyal</Card.Title>
                      <Card.Text>
                        {[1, 2, 3, 4, 5].map((_, index) => (
                          <i
                            key={index}
                            className="bi bi-star-fill text-warning"
                          ></i>
                        ))}
                      </Card.Text>
                    </div>
                  </div>
                  <div className="border-top my-2"></div>
                  <Card.Text>
                    Really recommend products. Must visit once and Customer care
                    executives are polite and try their best to help.
                  </Card.Text>
                </Card>

                <Card
                  className="mb-3 p-3 theme-shadow rounded-5 border border-dark"
                  style={{ width: "20rem", height:"17rem", overflow: "hidden" }}
                >
                  <div className="d-flex">
                    <div
                      className="border rounded-circle text-center"
                      style={{
                        width: "75px",
                        height: "75px",
                        fontSize: "45px",
                        backgroundColor: "#FFDED9",
                        color: "#D22019",
                        fontWeight: "600",
                      }}
                    >
                      K
                    </div>
                    <div className="p-3">
                      <Card.Title>Kumar Ch</Card.Title>
                      <Card.Text>
                        {[1, 2, 3, 4, 5].map((_, index) => (
                          <i
                            key={index}
                            className="bi bi-star-fill text-warning"
                          ></i>
                        ))}
                      </Card.Text>
                    </div>
                  </div>
                  <div className="border-top my-2"></div>
                  <Card.Text>
                    I just received my order, and I thank you so much. You are
                    the best online shopping place and you made my wedding
                    amazing. Great customer service.
                  </Card.Text>
                </Card>
              </div>

              <div className="d-flex flex-column sm-review">
                <div
                  className="d-none d-lg-flex justify-content-lg-start align-items-start mb-3 mt-lg-3"
                  data-aos="fade-up-left"
                >
                  <img src={reviewshape3} alt="Review Shape 3" width={"50px"} />
                </div>
                <Card
                  className="mb-3 p-3 theme-shadow rounded-5 border border-dark"
                  style={{ width: "20rem", height:"17rem", overflow: "hidden" }}
                >
                  <div className="d-flex">
                    <div
                      className="border rounded-circle text-center"
                      style={{
                        width: "75px",
                        height: "75px",
                        fontSize: "45px",
                        backgroundColor: "#F9E5F3",
                        color: "#CA53BC",
                        fontWeight: "600",
                      }}
                    >
                      R
                    </div>
                    <div className="p-3">
                      <Card.Title>Ravindra Sinnarkar</Card.Title>
                      <Card.Text>
                        {[1, 2, 3, 4, 5].map((_, index) => (
                          <i
                            key={index}
                            className="bi bi-star-fill text-warning"
                          ></i>
                        ))}
                      </Card.Text>
                    </div>
                  </div>
                  <div className="border-top my-2"></div>
                  <Card.Text>
                    Best shop for all-purpose designer dresses,lahenga & sarees.
                    Being a customer I am fully satisfied with the gesture.
                    Neetu guided us in many ways in selecting sarees and helped
                    us in choosing colours.
                  </Card.Text>
                </Card>
                <div
                  className="d-none d-lg-flex justify-content-lg-start"
                  data-aos="fade-left"
                >
                  <img src={reviewshape2} alt="Review Shape 2" width={"50px"} />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex flex-column flex-lg-row justify-content-center gap-3 py-4">
              <div className="d-flex flex-column flex-lg-column justify-content-center sm-review">
                <div
                  className="d-none d-lg-flex justify-content-end review-shape-1"
                  data-aos="fade-up-left"
                >
                  <img src={reviewshape1} alt="Review Shape 1" width={"50px"} />
                </div>
                <Card
                  className="mb-3 p-3 theme-shadow rounded-5 border border-dark mt-3"
                  style={{ width: "20rem", height:"17rem", overflow: "hidden" }}
                >
                  <div className="d-flex">
                    <div
                      className="border rounded-circle text-center"
                      style={{
                        width: "75px",
                        height: "75px",
                        fontSize: "45px",
                        backgroundColor: "#F9E5F3",
                        color: "#CA53BC",
                        fontWeight: "600",
                      }}
                    >
                      D
                    </div>
                    <div className="p-3">
                      <Card.Title>Devanshi Shah</Card.Title>
                      <Card.Text>
                        {[1, 2, 3, 4, 5].map((_, index) => (
                          <i
                            key={index}
                            className="bi bi-star-fill text-warning"
                          ></i>
                        ))}
                      </Card.Text>
                    </div>
                  </div>
                  <div className="border-top my-2"></div>
                  <Card.Text>
                    Nice place with a huge variety of collections, would
                    recommend people who are starting their own business to
                    visit this place and start with the products they offer.
                  </Card.Text>
                </Card>
              </div>

              <div className="d-flex flex-column sm-review">
                <Card
                  className="mb-3 p-3 theme-shadow rounded-5 border border-dark"
                  style={{ width: "20rem", height:"17rem", overflow: "hidden" }}
                >
                  <div className="d-flex">
                    <div
                      className="border rounded-circle text-center"
                      style={{
                        width: "75px",
                        height: "75px",
                        fontSize: "45px",
                        backgroundColor: "#DDEDFA",
                        color: "#185ABD",
                        fontWeight: "600",
                      }}
                    >
                      R
                    </div>
                    <div className="p-3">
                      <Card.Title>Ruchi Jakhmola</Card.Title>
                      <Card.Text>
                        {[1, 2, 3, 4].map((_, index) => (
                          <i
                            key={index}
                            className="bi bi-star-fill text-warning"
                          ></i>
                        ))}
                      </Card.Text>
                    </div>
                  </div>
                  <div className="border-top my-2"></div>
                  <Card.Text>
                    I enjoyed shopping in Kesaria Textile, Ishwari ma'am
                    assisted us and did her best to show us the best quality
                    Saree under our budget, we are very happy and looking
                    forward to shopping often here.
                  </Card.Text>
                </Card>
                <Card
                  className="mb-3 p-3 theme-shadow rounded-5 border border-dark"
                  style={{ width: "20rem", height:"17rem", overflow: "hidden" }}
                >
                  <div className="d-flex">
                    <div
                      className="border rounded-circle text-center"
                      style={{
                        width: "75px",
                        height: "75px",
                        fontSize: "45px",
                        backgroundColor: "#E5FBD3",
                        color: "#00853E",
                        fontWeight: "600",
                      }}
                    >
                      M
                    </div>
                    <div className="p-3">
                      <Card.Title>Mahesh vadhiyar</Card.Title>
                      <Card.Text>
                        {[1, 2, 3, 4].map((_, index) => (
                          <i
                            key={index}
                            className="bi bi-star-fill text-warning"
                          ></i>
                        ))}
                      </Card.Text>
                    </div>
                  </div>
                  <div className="border-top my-2"></div>
                  <Card.Text>
                    Mahesh prajapati , Best price ,Good service.
                  </Card.Text>
                </Card>
              </div>

              <div className="d-flex flex-column sm-review">
                <div
                  className="d-none d-lg-flex justify-content-lg-start align-items-start mb-3 mt-lg-3"
                  data-aos="fade-up-left"
                >
                  <img src={reviewshape3} alt="Review Shape 3" width={"50px"} />
                </div>
                <Card
                  className="mb-3 p-3 theme-shadow rounded-5 border border-dark"
                  style={{ width: "20rem", height:"17rem", overflow: "hidden" }}
                >
                  <div className="d-flex">
                    <div
                      className="border rounded-circle text-center"
                      style={{
                        width: "75px",
                        height: "75px",
                        fontSize: "45px",
                        backgroundColor: "#FFE5C2",
                        color: "#BD6100",
                        fontWeight: "600",
                      }}
                    >
                      D
                    </div>
                    <div className="p-3">
                      <Card.Title>Duraivelu Janarthanan</Card.Title>
                      <Card.Text>
                        {[1, 2, 3, 4, 5].map((_, index) => (
                          <i
                            key={index}
                            className="bi bi-star-fill text-warning"
                          ></i>
                        ))}
                      </Card.Text>
                    </div>
                  </div>
                  <div className="border-top my-2"></div>
                  <Card.Text>
                    Our experience with their service was excellent. They were
                    responsive, helpful.
                  </Card.Text>
                </Card>
                <div
                  className="d-none d-lg-flex justify-content-lg-start"
                  data-aos="fade-left"
                >
                  <img src={reviewshape2} alt="Review Shape 2" width={"50px"} />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <Slider {...settings} className="d-block d-lg-none ">
          {reviewsData.map((review, index) => (
            <div key={index} className="d-flex justify-content-center">
              <Card
                className="mb-3 p-3 theme-shadow rounded-5 border border-dark mt-3"
                style={{ width: "20rem", overflow: "hidden" }}
              >
                <div className="d-flex">
                  <div
                    className="border rounded-circle text-center"
                    style={{
                      width: "75px",
                      height: "75px",
                      fontSize: "45px",
                      backgroundColor: review.backgroundColor,
                      color: review.color,
                      fontWeight: "600",
                    }}
                  >
                    {review.initial}
                  </div>
                  <div className="p-3">
                    <Card.Title>{review.name}</Card.Title>
                    <Card.Text>
                      {[...Array(review.rating)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill text-warning"></i>
                      ))}
                    </Card.Text>
                  </div>
                </div>
                <div className="border-top my-2"></div>
                <div
                  style={{
                    maxHeight: "100px",
                    overflow: "scroll",
                    scrollbarWidth: "none",
                  }}
                >
                  <Card.Text>{review.review}</Card.Text>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};
