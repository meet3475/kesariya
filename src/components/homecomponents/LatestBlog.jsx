import React from "react";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const LatestBlog = ({ latestBlog }) => {
  const navigate = useNavigate();
  const handleBlogClick = (slide) => {
    navigate(`/blog/${slide?.url.replace(/\s+/g, "-").toLowerCase()}`, {
      state: {
        id: slide?.id,
        name: slide?.url || slide?.description,
      },
    });
  };

  return (
    <div className="home-blogbgimage">
      <div className="container p-0">
        <div className="row px-0">
          <div className="col-12 ">
            <div className="px-2 pb-3">
              <div className="text-center saree-heading pt-3 ">
                Our Latest Blog
              </div>
              <div className="d-flex justify-content-center">
                <img
                  src={imageBorder}
                  alt="bestsellerborder"
                  className="py-2 border-image"
                />
              </div>
              <p className="text-center own-text">
                As a supplier of textile products, we have a wide range of
                products available in India. We are offering international
                companies the chance to boost their sales through our
                traditional party wear saree collection as well as our latest
                designer saree collection.
              </p>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                navigation={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[FreeMode, Navigation, Autoplay]}
                className="mySwiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                {latestBlog.map((slide, i) => (
                  <SwiperSlide key={i}>
                    <div className="p-2">
                      <Card
                        className="mt-3 theme-shadow border-dark"
                        style={{
                          background: "white",
                          overflow: "hidden",
                          aspectRatio: "11/9",
                          cursor: "pointer",
                          borderRadius: "25px",
                        }}
                        onClick={() => handleBlogClick(slide)}
                      >
                        <Card.Img
                          variant="top"
                          src={slide.image}
                          className="img-fluid"
                          style={{ aspectRatio: "10/6" }}
                        />
                        <p className="text-center text-wrap mt-3 fw-medium">
                          {slide.description}{" "}
                        </p>
                      </Card>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
