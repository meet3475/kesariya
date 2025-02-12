import React from "react";
import shopbycategoryimage from "../../assets/images/shopbycategoryimage.webp";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Shopbycategory = ({ shopbycategory }) => {
  const navigate = useNavigate();

  // const handleCategoryClick = (id) => {
  //   navigate(`/product/${id}`);
  // };

  return (
    <div className="d-none d-lg-block home-shopbycategory">
      <Container>
        <div className="row">
          <div className="col-12 p-0">
            <div className="container">
              <div className="d-flex justify-content-center py-5">
                <img
                  src={shopbycategoryimage}
                  className="img-fluid"
                  alt="Shop by category"
                />
              </div>
              <div className="w-100 d-flex flex-wrap justify-content-center ">
                {shopbycategory.map((shopimage, i) => (
                  <div
                    key={i}
                    className="col-6 col-md-6 col-md-4 col-lg-3 col-xl-2 mb-3 d-grid justify-content-center custom-overflow text-center"
                    // onClick={() => handleCategoryClick(shopimage.id)}
                    data-aos="zoom-in"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="shopbycategoryimageborder d-flex flex-column align-items-center">
                      <img
                        className="shopbycategoryimage img-fluid"
                        src={shopimage?.image}
                        alt={`Shop category ${i}`}
                      />
                    </div>
                    <p className="text-center fw-bold fs-5 shop-by-category-title">
                      {shopimage?.name}
                    </p>
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
