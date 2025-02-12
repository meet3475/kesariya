import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Blogimg1 from "../../assets/images/blogZHimg1.webp";
import Blogimg2 from "../../assets/images/blogZHimg2.webp";
import Blogimg3 from "../../assets/images/blogZHimg3.webp";

export const BlogZeroHero = ({ counter }) => {
  return (
    <div className="blog-bg1">
      <Container style={{ overflow: "hidden" }}>
        <div className="row">
          <div className="d-flex flex-column flex-lg-row p-lg-3 mt-3">
            <div
              className="col-12 col-md-12 col-lg-6 pb-4"
              data-aos="fade-right"
            >
              <div className="px-lg-3">
                <h5 className="text-start">"From Zero To Hero"</h5>
              </div>
              <div className="px-lg-3">
                <p className="text-start fs-20 fs-sm-15">
                  Their Journey with Kesaria
                </p>
              </div>

              <div className="d-flex flex-column flex-md-row justify-content-start align-items-center gap-2 px-lg-3">
                <div className="d-flex flex-column gap-2">
                  <p className="mb-0 fs-20 fs-sm-14">
                    Kesaria Textile Company is a renowned Surat-based saree
                    manufacturer. Since its establishment in 1977, the
                    organization has achieved significant and continuous growth
                    within the business by delivering products that meet
                    customers' needs. We tend to export to 80+ countries across
                    the globe.
                  </p>
                  <p className="mb-0 fs-20 fs-sm-14">
                    Kesaria Textile Company is a manufacturer, wholesaler, and
                    exporter of sarees and women’s clothing wear. We have a
                    manufacturing capacity of more than one million pieces per
                    month. Since the beginning, our company has been dedicated
                    to customer satisfaction and we have put all our efforts
                    into it. Clients are most valuable to us, and they are
                    playing a major role in our success and accomplishment.
                  </p>
                  <img src={Blogimg3} alt="blog3" style={{ width: "15%" }} />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 mt-3 mt-md-0  mb-5 mb-md-0 animationmove d-flex justify-content-end">
              <div style={{ position: "relative" }}>
                <img
                  src={Blogimg1}
                  alt="blog-main-image"
                  className="blog-main-image them-borderradius"
                />
                <div className="blog-redimage"></div>
                <div className="bg-danger d-flex flex-column justify-content-center align-items-center blog-secon-div animationmove">
                  <img alt="blog image" src={Blogimg2} />
                  <p className="blog-zh-p1">{counter}+</p>
                  <p className="blog-zh-p2">Started With Kesaria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
