import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/kesariyalogo.webp";
import { MdArrowRightAlt, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import googleplay from "../../assets/images/image 681 (1).webp";
import image1 from "../../assets/images/image 1.webp";
import image2 from "../../assets/images/image 2.webp";
import image3 from "../../assets/images/image 3.webp";
import image4 from "../../assets/images/image 4.webp";
import image5 from "../../assets/images/image 5.webp";
import image6 from "../../assets/images/image 6.webp";
import image7 from "../../assets/images/image 7.webp";
import image8 from "../../assets/images/image 8.webp";
import image9 from "../../assets/images/image 9.webp";
import image10 from "../../assets/images/image 10.webp";
import { RiInstagramLine } from "react-icons/ri";
import { FaYoutube, FaFacebook, FaPinterest } from "react-icons/fa";
import { saveAs } from "file-saver";
import { RiTwitterXFill } from "react-icons/ri";
import { ImMail3 } from "react-icons/im";
export const Footer = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];
  const downloadPDF = () => {
    const pdfUrl = "https://morth.nic.in/sites/default/files/dd12-13_0.pdf";
    saveAs(pdfUrl, "dd12-13_0.pdf");
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };
  return (
    <div className="footer">
      <div className="container">
        <footer>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-3 them-font">
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <a
                href="/"
                className="d-flex align-items-center mb-3 mt-0 link-body-emphasis text-decoration-none"
              >
                <img
                  src={Logo}
                  alt="Kesaria Textile Company"
                  className="img-fluid"
                />
              </a>
              <p style={{ textAlign: "justify", fontSize:"15px"}}>
                In the name of Kesaria Textile Company 'Kesar' represents the
                Tradition of India, The journey of Kesaria Textile Company began
                in the year 1977 with the opening of our wholesale saree market
                in Surat, India.
              </p>
              <button
                className="btn btn-dark rounded-5 btn-black-to-red-color-move"
                onClick={handleNavigate}
              >
                <span>Know More</span>
                <span>
                  <MdArrowRightAlt />
                </span>
              </button>
            </div>
            <div className="col-lg-2 col-md-4 col-6 my-3 company">
              <div className="fs-4 fw-bold">Company</div>
              <ul className="nav flex-column" style={{ fontSize: "16px" }}>
                <li className="nav-item mb-2">
                  <Link to="/" className="nav-link p-0 text-dark">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/blog/" className="nav-link p-0 text-dark">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/career/" className="nav-link p-0 text-dark">
                    Careers
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/market-area/" className="nav-link p-0 text-dark">
                    Market Area
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/customer-review/"
                    className="nav-link p-0 text-dark"
                  >
                    Customer Review
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 my-3">
              <div className="fs-4 fw-bold">Customer Service</div>
              <ul className="nav flex-column" style={{ fontSize: "16px" }}>
                <li className="nav-item mb-2">
                  <Link to="/enquiry-ktc/" className="nav-link p-0 text-dark">
                    Enquire Now
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/privacy-policy-2/"
                    className="nav-link p-0 text-dark"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="terms-condition/"
                    className="nav-link p-0 text-dark"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/return-policy/" className="nav-link p-0 text-dark">
                    Return & Exchange
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/contact-us/" className="nav-link p-0 text-dark">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/faq/" className="nav-link p-0 text-dark">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6  my-3">
              <h3 className="fs-4 fw-bold">Contact With Us</h3>
              <ul className="nav flex-column" style={{ fontSize: "16px" }}>
                <li className="nav-item d-flex mb-2">
                  <IoLocationOutline className="me-2 fs-2" />
                  <div>
                    B 3031-32, Millennium Textile Market-1, Ring Road, Surat,
                    Gujarat 395002
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <BsTelephone className="me-2" />
                  Phone: +91 9876543210
                </li>
                <li className="nav-item mb-2">
                  <MdOutlineEmail className="me-2" />
                  Email:{" "}
                  <a
                    href="mailto:info@kesaria.com"
                    className="text-dark text-decoration-none"
                  >
                    info@kesaria.com
                  </a>
                </li>
              </ul>
              <div className="ms-4">
                Follow us on:
                <div className="d-flex flex-row gap-2 mt-2">
                  <Link to="http://www.youtube.com/@KesariaTextileCompany">
                    <FaYoutube
                      className="text-danger icon-hover"
                      style={{ fontSize: "20px" }}
                    />
                  </Link>
                  <Link to="https://x.com/KesariaTextile">
                    <RiTwitterXFill
                      className="icon-hover text-dark"
                      style={{ fontSize: "20px" }}
                    />
                  </Link>
                  <Link to="https://www.facebook.com/kesariatextileco/">
                    <FaFacebook
                      style={{ color: "#1773ea", fontSize: "20px" }}
                      className="icon-hover"
                    />
                  </Link>
                  <Link to="https://in.pinterest.com/KesariaTextileCo/">
                    <FaPinterest
                      style={{ color: "#e60023", fontSize: "20px" }}
                      className="icon-hover"
                    />
                  </Link>
                  <Link to="">
                    <ImMail3
                      style={{ color: "#1c93f6", fontSize: "19px" }}
                      className="icon-hover"
                    />
                  </Link>
                  <Link to="https://www.instagram.com/kesariatextileco/">
                    <RiInstagramLine
                      className="gradient-icon icon-hover"
                      style={{ color: ":#405DE6", fontSize: "20px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 my-3 d-flex flex-column align-items-center googleplay">
              <img src={googleplay} alt="Google Play" className="img-fluid" />
              <button
                className="brochurebtn mt-md-2 btn-red-to-black-color-move"
                onClick={downloadPDF}
              >
                <span>View Brochure</span>
              </button>
            </div>
          </div>
          <div className="row d-flex justify-content-center flex-wrap footercompanyimg">
            <div className="col-12 d-flex justify-content-center flex-wrap footer-images1">
              {images.map((e, i) => (
                <img
                  key={i}
                  src={e}
                  alt={`image ${i + 1}`}
                  className="img-fluid m-1 bg-white p-2 rounded-2 footer-images icon-hover"
                  style={{ width: "60px" }}
                />
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
