import React from "react";
import { ImPhone } from "react-icons/im";
import whatsapplogo from "../../assets/images/image 653.svg";

export const CallAndWhatsapp = () => {
  return (
    <div className="sticky-icons">
      <div className="sticky-whatsapp-icon">
        <a
          href="https://api.whatsapp.com/send/?phone=919909048068&text=Hello%2C+I+want+to+see+your+collection%21&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <img src={whatsapplogo} alt="WhatsApp" className="whatsapp-logo" />
        </a>
      </div>
      <div className="sticky-phone-icon">
        <a href="tel:+91-6357239006" className="text-light">
          <ImPhone
            className="fs-1 p-2 bg-dark rounded-circle ring"
            alt="Call us"
            style={{ cursor: "pointer" }}
          />
        </a>
      </div>
    </div>
  );
};
