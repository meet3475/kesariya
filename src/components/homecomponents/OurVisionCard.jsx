import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import visionmainimg1 from "../../assets/images/visionmainimage (1).webp";
import visionmainimg2 from "../../assets/images/visionmainimage (2).webp";
import visionmainimg3 from "../../assets/images/visionmainimage (3).webp";
import visionmainimg4 from "../../assets/images/visionmainimage (4).webp";
import visionimg1 from "../../assets/images/ourvissonimage1.webp";
import visionimg2 from "../../assets/images/ourvissonimage2.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRoad } from "react-icons/fa6";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

export const OurvisionCard = () => {
  const images = [
    {
      id: 1,
      img: visionmainimg1,
    },
    {
      id: 2,
      img: visionmainimg2,
    },
    {
      id: 3,
      img: visionmainimg3,
    },
    {
      id: 4,
      img: visionmainimg4,
    },
  ];

  return (
    <div className="home-vissonbg pt-5" style={{ overflow: "hidden" }}>
      <Container>
        <div className="row pt-3 gap-4">
          <div className="d-flex flex-column flex-lg-row gap-3">
            <div
              className="col-md-12 col-lg-6 mt-md-0"
              style={{ position: "relative" }}
            >
              <div className=" d-none  d-lg-block blog-redsquareimage"></div>
              <div className="h-100">
                <Swiper
                  pagination={true}
                  slidesPerView={1}
                  autoplay={{ delay: 2000 }}
                  effect={"fade"}
                  loop
                  modules={[Pagination, EffectFade, Autoplay]}
                  className="vission-main-image"
                >
                  {images?.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img.img}
                        className="img-fluid slide-image"
                        alt={`slide-${i}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div
              className="col-md-12 col-lg-6 pb-5 ps-md-5 them-font"
              data-aos="fade-left"
            >
              <div className="pb-2">
                <div>
                  <h2 className="text-md-end fw-semibold text-sm-start">
                    Our Vision
                  </h2>
                </div>
                <div>
                  <h4 className="text-md-end text-sm-start fs-6">
                    Kesaria Textile Company aims to be the industry leader in
                    integrity, honesty, and efficiency. Through innovation and
                    the development of our intellectual capacity, we will
                    enhance our international presence.
                  </h4>
                </div>
                <div>
                  <div className="d-flex text-end gap-2">
                    <div>
                      <div className="vission-f6">Legacy and Innovation</div>
                      <p className="vission-f7">
                        Kesaria Textile Company envisions a future where the
                        centuries-old textile artistry of Surat is revitalized
                        through innovation, creating sarees that embody
                        tradition and modern elegance.
                      </p>
                    </div>
                    <div>
                      <img
                        src={visionimg1}
                        className="vission-main-redimage my-3"
                        data-aos="zoom-in"
                      />
                    </div>
                  </div>
                  <div className="d-flex text-end gap-2">
                    <div>
                      <div className="vission-f6">
                        Community and Empowerment
                      </div>
                      <p className="vission-f7">
                        Our vision is to empower the skilled artisans of Surat,
                        weaving their craftsmanship into each Kesaria saree, and
                        creating a thriving community that celebrates textile
                        heritage.
                      </p>
                    </div>
                    <div>
                      <img
                        src={visionimg2}
                        className="vission-main-redimage my-3"
                        data-aos="zoom-in"
                      />
                    </div>
                  </div>
                  <div className="d-flex text-end gap-2">
                    <div>
                      <div className="vission-f6">
                        Global Reach with Local Roots
                      </div>
                      <p className="vission-f7">
                        : Kesaria Textile Company aspires to become a global
                        symbol of Surat's textile excellence, sharing the city's
                        rich legacy with the world through exquisite sarees that
                        transcend borders.
                      </p>
                    </div>
                    <div>
                      <img
                        src={visionimg2}
                        className="vission-main-redimage  my-3"
                        data-aos="zoom-in"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
