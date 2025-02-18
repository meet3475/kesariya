import React, { useEffect, useRef, useState } from "react";
import { Card, button } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import { GrDownload } from "react-icons/gr";
import EnquiryModel from "../enquirymodelcomponents/EnquiryModel";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const IntrestedProductSlider = ({ CategorydetailintrestedPro }) => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const [show, setShow] = useState(false);
  const locationData = useSelector((state) => state.location.value);


  const handleClose = () => setShow(false);

  const handleShow = (event) => {
    event.stopPropagation();
    setShow(true);
  };

  const [storageData, setStorageData] = useState({
      locationDynamic: "LOCATION_DY",
      locationReplace:
        localStorage?.getItem("country_name") === "India"
          ? localStorage?.getItem("city_name")
          : localStorage?.getItem("country_name"),
    });
  
    useEffect(() => {
      setStorageData({
        locationDynamic: "LOCATION_DY",
        locationReplace:
          locationData?.country_name == "India"
            ? locationData?.city_name
            : locationData?.country_name,
      });
    }, [locationData]);
  

  return (
    <>
      <div className="home-sellerbgimage pt-3">
        <div className="text-center saree-heading pt-1">
          You May Also be Interested in
        </div>
        <div className="d-flex justify-content-center">
          <img src={imageBorder} className="py-2 border-image" alt="Border" />
        </div>
        <div className="row">
          <div className="col-12 p-0">
            <div className="container d-flex p-0">
              <Swiper
                className="custom-slider-style"
                ref={swiperRef}
                spaceBetween={20}
                slidesPerView={5}
                navigation={true}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  480: { slidesPerView: 2 },
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 5 },
                  1200: { slidesPerView: 5 },
                }}
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              >
                {CategorydetailintrestedPro.length > 0 &&
                  CategorydetailintrestedPro.map((product) => (
                    <SwiperSlide key={product.id} className="py-4">
                      <Card
                        style={{
                          width: "100%",
                          fontFamily: "Lobster, sans-serif",
                          position: "relative",
                          background: product.color_code,
                          cursor: "pointer",
                        }}
                        className="product-card"
                        onClick={() =>
                          navigate(
                            `${
                              storageData?.locationReplace?.length > 0
                                ? "/" + storageData.locationReplace
                                : ""
                            }/categories-detail/${product?.category_name
                              ?.toString()
                              .trim()
                              .replace(/-/g, "~")
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`,
                            {
                              state: {
                                id: product?.id,
                                name: product?.category_name,
                              },
                            }
                          )
                        }
                      >
                        <div className="main">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={product?.catelog}
                            className="main"
                          >
                            {/* <div className="download-icon">
                              <GrDownload style={{ marginTop: "9px" }} />
                            </div> */}
                          </a>
                        </div>
                        <div className="custom-img-aspect">
                          <Card.Img
                            variant="top"
                            src={product.image}
                            className="custom-img-aspect setimage"
                          />
                        </div>
                        <button
                          className="btn btn-danger button-icon1"
                          onClick={(event) => {
                            event.stopPropagation();
                            const message = `Hello, I want to see your collection for ${product.category_name}!`;
                            const whatsappUrl = `https://api.whatsapp.com/send/?phone=919909048068&text=${encodeURIComponent(
                              message
                            )}&type=phone_number&app_absent=0`;
                            window.open(whatsappUrl, "_blank");
                          }}
                        >
                          GET QUOTE
                        </button>
                        <Card.Text
                          className="text-center mt-1 txtfamily fw-medium"
                          style={{ letterSpacing: "1px" }}
                        >
                          <span className="fs-14 text-light">
                            {product.category_name}
                          </span>
                        </Card.Text>
                      </Card>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <EnquiryModel show={show} handleClose={handleClose} />
    </>
  );
};
