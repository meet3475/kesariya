import React from "react";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { storageData } from "../../config/config";

export const Whychoosekesariyasection = ({ HexagoneImageData }) => {
  return (
    <div className="home-WhyChooseebg">
      <Container className="">
        <div className="row">
          <div className="col-12">
            <div className="text-center saree-heading">
              Why Choose Kesaria Textile Company?
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={imageBorder}
                className="border-image"
                alt="Border Decoration"
              />
            </div>

            {/* For mobile view, use Swiper */}
            <div className="d-block d-md-none">
              <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
                breakpoints={{
                  320: { slidesPerView: 2, spaceBetween: 10 },
                  480: { slidesPerView: 2, spaceBetween: 10 },
                  640: { slidesPerView: 2.5, spaceBetween: 15 },
                  768: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 3 },
                  1200: { slidesPerView: 5 },
                  1600: { slidesPerView: 5 },
                  2000: { slidesPerView: 6 },
                }}
              >
                {HexagoneImageData.map((reason, index) => (
                  <SwiperSlide key={index}>
                    <div className="text-center them-font hexagon-item px-0">
                      <div className="image-wrapper">
                        <img
                          src={reason.image}
                          className="img-fluid"
                          data-aos="zoom-in"
                          alt={reason.title}
                        />
                      </div>
                      <div className="text-wrapper">
                        <h4 className="fw-bolder hexa-title">{reason.title}</h4>
                        <p className="hexa-des fw-semibold">
                          {reason.description &&
                          storageData?.locationDynamic &&
                          storageData?.locationReplace
                            ? reason.description.replaceAll(
                                storageData.locationDynamic,
                                storageData.locationReplace
                              )
                            : ""}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* For desktop view, use regular layout */}
            <div className="d-none d-md-block">
              <div className="row justify-content-center px-0">
                {HexagoneImageData.map((reason, index) => (
                  <div
                    key={index}
                    className="col-6 col-lg-2 text-center them-font hexagon-item px-0"
                  >
                    {index % 2 === 0 ? (
                      <>
                        <div className="image-wrapper">
                          <img
                            src={reason.image}
                            className="img-fluid"
                            data-aos="zoom-in"
                            alt={reason.title}
                          />
                        </div>
                        <div className="text-wrapper">
                          <h4 className="fw-bolder hexa-title">
                            {reason.title}
                          </h4>
                          <p className="hexa-des fw-semibold">
                            {" "}
                            {reason.description &&
                            storageData?.locationDynamic &&
                            storageData?.locationReplace
                              ? reason.description.replaceAll(
                                  storageData.locationDynamic,
                                  storageData.locationReplace
                                )
                              : ""}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-wrapper">
                          <h4 className="fw-bolder hexa-title">
                            {reason.title}
                          </h4>
                          <p className="hexa-des fw-semibold mb-0">
                            {" "}
                            {reason.description &&
                            storageData?.locationDynamic &&
                            storageData?.locationReplace
                              ? reason.description.replaceAll(
                                  storageData.locationDynamic,
                                  storageData.locationReplace
                                )
                              : ""}
                          </p>
                        </div>
                        <div className="image-wrapper">
                          <img
                            src={reason.image}
                            className="img-fluid"
                            data-aos="zoom-in"
                            alt={reason.title}
                          />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
