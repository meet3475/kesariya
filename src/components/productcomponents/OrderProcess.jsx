import React from "react";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import orderprocesspcimg from "../../assets/images/orderprocesspcimg.webp";
import orderprocessresponsiveimg from "../../assets/images/orderprocessresponsiveimg.webp";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OrderProcess = ({ CategorydetailInfo }) => {
  const navigate = useNavigate();
  return (
    <div className="manufacture-wrapper">
      <div className="text-center saree-heading">
        How to Order Directly from Manufacturer
      </div>
      <div className="d-flex justify-content-center">
        <img src={imageBorder} className="py-2 border-image" alt="border" />
      </div>
      <Container>
        <div>
          <div>
            <img
              src={orderprocesspcimg}
              className="w-100"
              alt="orderprocesspcimg"
            />
          </div>
          <div className="d-flex text-center">
            <p
              className="w-100 fw-bolder fs-5 processfont"
              style={{ color: "orange" }}
            >
              Selection & Order
            </p>
            <p
              className="w-100 fw-bolder fs-5 processfont"
              style={{ color: "#f6696a" }}
            >
              Order Process
            </p>
            <p
              className="w-100 fw-bolder fs-5 processfont"
              style={{ color: "#b87aa6" }}
            >
              Confirm & Pay
            </p>
            <p
              className="w-100 fw-bolder fs-5 processfont"
              style={{ color: "#9b8cdc" }}
            >
              Quality Check
            </p>
            <p
              className="w-100 fw-bolder fs-5 processfont"
              style={{ color: "#56addc" }}
            >
              Packing
            </p>
            <p
              className="w-100 fw-bolder fs-5 processfont"
              style={{ color: "#67b9af" }}
            >
              Delivery
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn rounded-5 them-bg text-light px-3 mt-4 orderbtn btn-red-to-black-color-move"
              onClick={() => {
                navigate("/enquiry-ktc");
              }}
            >
              <span
                onClick={(event) => {
                  event.stopPropagation();
                  const message = `Hello, I want to see your collection for ${CategorydetailInfo.category_name}!`;
                  const whatsappUrl = `https://api.whatsapp.com/send/?phone=919909048068&text=${encodeURIComponent(
                    message
                  )}&type=phone_number&app_absent=0`;
                  window.open(whatsappUrl, "_blank");
                }}
              >
                For Orders
              </span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderProcess;
