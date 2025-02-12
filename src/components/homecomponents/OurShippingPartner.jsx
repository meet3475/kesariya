import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import imageBorder from "../../assets/images/bestsellerborder.webp";
export const OurShippingPartner = ({ shippingPartnerData }) => {
  return (
    <Container fluid className="our-shhiping-partner">
      <Row>
        <Col className="mb-4">
          <div className="text-center saree-heading pt-3 ">
            Our Shipping Partner
          </div>
          <div className="d-flex justify-content-center">
            <img src={imageBorder} loading="lazy" className="py-2 border-image" />
          </div>
          <div className="pt-3">
            <Swiper
              spaceBetween={10}
              slidesPerView={7}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              loop={true}
              freeMode={true}
              speed={10000}
              modules={[Navigation, Pagination, Autoplay]}
              breakpoints={{
                320: { slidesPerView: 1.5 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
                1200: { slidesPerView: 7 },
              }}
            >
              {shippingPartnerData.map((e, i) => (
                <SwiperSlide key={i} className="py-2">
                  <Card className="rounded-5  d-flex justify-content-center align-items-center theme-shadow our-shipping-card border-dark">
                    <img
                      src={e.image}
                      alt={e.name}
                      className="shipping-partner-img rounded-5"
                    />
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              spaceBetween={10}
              slidesPerView={7}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              loop={true}
              freeMode={true}
              speed={10000}
              className="mt-4"
              modules={[Navigation, Pagination, Autoplay]}
              breakpoints={{
                320: { slidesPerView: 1.5, centeredSlides: true },
                480: { slidesPerView: 3 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
                1200: { slidesPerView: 7 },
              }}
            >
              {shippingPartnerData.map((e, i) => (
                <SwiperSlide key={i} className="py-2">
                  <Card
                    className="rounded-5 d-flex justify-content-center align-items-center theme-shadow  border-dark our-shipping-card"
                    style={{}}
                  >
                    <img
                      src={e.image}
                      alt={e.name}
                      className="shipping-partner-img rounded-5"
                    />
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
