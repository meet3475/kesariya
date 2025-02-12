import React, { useRef, useState } from "react";
import { Card, Container, button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import EnquiryModel from "../enquirymodelcomponents/EnquiryModel";
import { GrDownload } from "react-icons/gr";
import { storageData } from "../../config/config";

export const BestSellerSareeSlider = ({ data }) => {
  const navigate = useNavigate();
  const swiperRefs = useRef([]);

  const handleNext = (index) => {
    if (swiperRefs.current[index] && swiperRefs.current[index].swiper) {
      swiperRefs.current[index].swiper.slideNext();
    }
  };

  const handlePrev = (index) => {
    if (swiperRefs.current[index] && swiperRefs.current[index].swiper) {
      swiperRefs.current[index].swiper.slidePrev();
    }
  };

  const duplicateSlides = (slides) => {
    const minSlides = 10;
    const newSlides = [...slides];
    while (newSlides.length < minSlides) {
      newSlides.push(...slides);
    }
    return newSlides;
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    event.stopPropagation();
    setShow(true);
    const favicon = document.querySelector("link[rel~='icon']");
    if (favicon) {
      favicon.href = "%PUBLIC_URL%/favicon1.ico";
    }
  };

  return (
    <div className="home-sellerbgimage">
      {data.map((item, index) => (
        <div
          className="slider-bg"
          key={index}
          style={{
            backgroundImage: item.background_image
              ? `url(${item.background_image})`
              : "none",
          }}
        >
          <Container fluid className="slide-swiper">
            <div className="row">
              <div className="col-12 p-0">
                <div className="text-center fs-1 saree-heading mt-3">
                  {item.label}
                </div>
                <div className="d-flex justify-content-center mt-2">
                  <img
                    src={imageBorder}
                    className="border-image"
                    alt="border"
                  />
                </div>
                <Swiper
                  ref={(el) => (swiperRefs.current[index] = el)}
                  slidesPerView={5}
                  spaceBetween={0}
                  loop
                  pagination={false}
                  navigation
                  autoplay={{
                    delay: item.AutoPlay,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
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
                  {duplicateSlides(item.data).map((row) => (
                    <SwiperSlide
                      key={row.id}
                      className="d-flex justify-content-center swiper-class"
                    >
                      <Card
                        className="best-saree-maincard product-card"
                        style={{
                          background: row.color_code,
                          cursor: "pointer",
                        }}
                      >
                        <div className="main">
                          <a
                            target="_blank"
                            href={row?.catelog}
                            className="main"
                          >
                            <div className="download-icon">
                              <GrDownload style={{marginTop :"10px", marginLeft:"2px"}} />
                            </div>
                          </a>
                        </div>
                        <Card.Img
                          variant="top"
                          loading="lazy"
                          src={row.image}
                          className="setimage"
                          onClick={() =>
                            navigate(
                              `${
                                storageData?.locationReplace?.length > 0
                                  ? "/" + storageData.locationReplace
                                  : ""
                              }/categories-detail/${row?.name
                                ?.toString()
                                .trim()
                                .replace(/-/g, "~")
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`,
                              {
                                state: {
                                  from: row.label,
                                  id: row.id,
                                  name: row.name
                                },
                              }
                            )
                          }
                        />
                        <button
                          className="btn btn-danger button-icon rounded-5"
                          onClick={(event) => {
                            event.stopPropagation();
                            const message = `Hello, I want to see your collection for ${row.name}!`;
                            const whatsappUrl = `https://api.whatsapp.com/send/?phone=919909048068&text=${encodeURIComponent(
                              message
                            )}&type=phone_number&app_absent=0`;
                            window.open(whatsappUrl, "_blank");
                          }}
                        >
                          GET QUOTE
                        </button>
                        <Card.Text
                          className="text-center text-light d-flex justify-content-center mt-2 slidercard-text"
                          onClick={() =>
                            navigate(
                              `${
                                storageData?.locationReplace?.length > 0
                                  ? "/" + storageData.locationReplace
                                  : ""
                              }/categories-detail/${row.name.replace(
                                /[^a-zA-Z]/g,
                                ""
                              )}`,

                              {
                                state: {
                                  from: row.label,
                                  id: row.id,
                                  name: row.name,
                                },
                              }
                            )
                          }
                        >
                          {row.name}
                        </Card.Text>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Container>
        </div>
      ))}
      <EnquiryModel show={show} handleClose={handleClose} />
    </div>
  );
};
