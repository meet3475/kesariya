import React from "react";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";
import { FreeMode, Navigation } from "swiper/modules";

export const Blogretailreview = ({ reviewdata }) => {
  return (
    <div className="home-bgimage py-5">
      <div className="container blog-review-swiper them-font p-0">
        <div className="">
          <div className="text-center saree-heading pt-3">
            Our Retails Reviews{" "}
          </div>
          <div className="d-flex justify-content-center">
            <img src={imageBorder} className="py-2 border-image" alt="Border" />
          </div>
          <p className="text-center own-text">
            As a supplier of textile products, we have a wide range of products
            available in India. We are offering international companies the
            chance to boost their sales through our traditional party wear saree
            collection as well as our latest designer saree collection.
          </p>
        </div>
        <div className="">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            navigation={true}
            className="custom-slider-style"
            modules={[Navigation, FreeMode]}
          >
            {reviewdata.map((review, index) => (
              <SwiperSlide key={index}>
                <Card
                  className="mb-3 p-3 theme-shadow rounded-5 border border-dark them-font"
                  style={{ width: "100%" }}
                >
                  <div className="d-flex">
                    <img
                      src={review.image}
                      className="img-fluid rounded-circle"
                      style={{ width: "90px", height: "90px" }}
                      alt="Avatar"
                    />
                    <div className="p-2">
                      <Card.Title>{review.name}</Card.Title>
                      <Card.Text className="fs-11">
                        {review.state_name}
                      </Card.Text>
                    </div>
                  </div>
                  <hr />
                  <Card.Text
                    style={{
                      height: "100px",
                      overflow: "scroll",
                      scrollbarWidth: "none",
                    }}
                  >
                    {review.message}
                  </Card.Text>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
