import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail, CiYoutube, CiFacebook } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { ImPinterest2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { GoogleTranslate } from "./Translate";
import { Tooltip } from "react-tooltip";

export const TopHeader = () => {
  return (
    <div className="d-grid">
      <div className="top-header-container">
        <Container className="custom-header-container py-2 px-sm-0 px-lg-3">
          <div className="flex-between-align">
            <div className="d-flex gap-3">
              <div className="flex-center-align gap-2 fs-12">
                <BsTelephone className="fs-16" />
                <span className="fw-semibold font-topheader">
                  +91 6357239006
                </span>
              </div>
              <div className="d-none d-lg-flex">|</div>
              <div className="d-none d-lg-flex flex-center-align gap-2 fs-14">
                <IoLocationOutline className="fs-16" />
                <span className="font-topheader">
                  B 3031-32, Millennium Textile Market-1, Ring Road, Surat,
                  Gujarat 395002
                </span>
              </div>
              <div className="d-none d-xl-flex">|</div>
              <div className="d-none d-xl-flex flex-center-align gap-2 fs-14">
                <CiMail className="fs-16" />
                <span className="font-topheader">
                  info.kesaria@kesariatextile.com
                </span>
              </div>
            </div>
            <div className="d-block d-xl-none">|</div>
            <div className="flex-between-align gap-2">
              <span className="d-none d-lg-block fs-12 fw-semibold">
                Follow Us :
              </span>
              <div className="d-flex fs-20 gap-1 custom-social-icon">
                <Link
                  to={"http://www.youtube.com/@KesariaTextileCompany"}
                  target={"_blanck"}
                >
                  <CiYoutube
                    data-tooltip-id="social-tooltiph"
                    data-tooltip-content="YouTube"
                  />
                </Link>
                <Link to={"https://x.com/KesariaTextile"} target={"_blanck"}>
                  <FaXTwitter
                    data-tooltip-id="social-tooltiph"
                    data-tooltip-content="Twitter"
                  />
                </Link>
                <Link
                  to={"https://www.facebook.com/kesariatextileco/"}
                  target={"_blanck"}
                >
                  <CiFacebook
                    className="fs-4"
                    data-tooltip-id="social-tooltiph"
                    data-tooltip-content="Facebook"
                  />
                </Link>
                <Link
                  to={"https://in.pinterest.com/KesariaTextileCo/"}
                  target={"_blanck"}
                >
                  <ImPinterest2
                    data-tooltip-id="social-tooltiph"
                    data-tooltip-content="Pinterest"
                  />
                </Link>
                <Link
                  to={"https://www.instagram.com/kesariatextileco/"}
                  target={"_blanck"}
                >
                  <FaInstagram
                    data-tooltip-id="social-tooltiph"
                    data-tooltip-content="Instagram"
                  />
                </Link>
                <Link to={"/#"}>
                  <MdOutlineMail
                    className="fs-4"
                    data-tooltip-id="social-tooltiph"
                    data-tooltip-content="Email"
                    
                  />
                </Link>
              </div>
              <Dropdown className="d-none d-lg-block ">
                <GoogleTranslate />
              </Dropdown>
            </div>
            <Tooltip id="social-tooltiph" place="bottom" effect="solid" />
          </div>
        </Container>
      </div>
    </div>
  );
};
