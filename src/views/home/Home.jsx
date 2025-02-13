import React, { useState, useEffect } from "react";
import { BestSellerSareeSlider } from "../../components/homecomponents/BestSellerSaree";
import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/pagination";
import { MissionCard } from "../../components/homecomponents/MissionCard";
import { OurvisionCard } from "../../components/homecomponents/OurVisionCard";
import { Shopbycategory } from "../../components/homecomponents/ShopByCategorySection";
import { LatestBlog } from "../../components/homecomponents/LatestBlog";
import Helpus from "../../components/homecomponents/HelpUs";
import { OurShippingPartner } from "../../components/homecomponents/OurShippingPartner";
import ReachUs from "../../components/homecomponents/ReachUs";
import { Companyinfo } from "../../components/homecomponents/CompanyInfo";
import HeroSlider from "../../components/homecomponents/HeroSlider";
import { Homereview } from "../../components/homecomponents/HomeReviewCard";
import { Ownclothingmainsection } from "../../components/homecomponents/OwnClothingMainSection";
import {
  COUNTRYWITHCODE_API,
  ENQUIRYFORM_API,
  HOME_API,
  HOME_SEO_API,
} from "../../config/config";
import axios from "axios";
import Blogslider from "../../components/blogcomponents/BlogSlider";
import Loader from "../../components/loaderspinnercomponents/Loader";
import ExclusiveSareeManufacturer from "../../components/homecomponents/ExclusiveSareeManufacturer";
import { Modal, button, Row, Col, Carousel, Form } from "react-bootstrap";
// import enquiryheaderimgmodel from "../../assets/images/enquiryheaderimgmodel.webp";
import Aos from "aos";
import { useLocation, useNavigate } from "react-router-dom";
import { Whychoosekesariyasection } from "../../components/homecomponents/WhyChooseKesariyaSection";
import { Helmet } from "react-helmet";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export const Homepage = () => {
  const [sliderData, setSliderData] = useState([]);
  const [shopbycategory, setShopbycategory] = useState([]);
  const [sliderimage, setSliderimage] = useState([]);
  const [shippingPartnerData, setShippingPartnerData] = useState([]);
  const [manufacturevideo, setManufacturevideo] = useState([]);
  const [hexagoneImageData, setHexagoneImageData] = useState([]);
  const [ownClothingCard, setOwnClothingCard] = useState([]);
  const [bestSellerSareeSlider, setBestSellerSareeSlider] = useState([]);
  const [latestBlog, setLatestBlog] = useState([]);
  const [questionsAnswers, setQuestionsAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [countries, setCountries] = useState([]);
  const [seoData, setSeoData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full name is required"),
    country: Yup.string().required("Country is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    businessType: Yup.string().required("Business Type is required"),
    message: Yup.string(),
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(HOME_API);
      // console.log("homeapi:", response.data);
      if (response.data.DATA) {
        setSliderData(response.data.DATA[0].data);
        setShopbycategory(response.data.DATA[5].data);
        setSliderimage(response.data.DATA[6].data);
        setShippingPartnerData(response.data.DATA[11].data);
        setManufacturevideo(response.data.DATA[4].data);
        setHexagoneImageData(response.data.DATA[2].data);
        setOwnClothingCard(response.data.DATA[3].data);
        setLatestBlog(response.data.DATA[7].data);
        setQuestionsAnswers(response.data.DATA[8].data);
        setBestSellerSareeSlider(response.data.DATA[1].data);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const fetchSEOData = async () => {
    try {
      const response = await axios.get(HOME_SEO_API);
      // console.log("seo", response.data.DATA[0].data);
      if (response) {
        setSeoData(response.data.DATA[0].data);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error SEO:", error);
    }
  };

  const fetchCountry = async () => {
    try {
      const response = await axios.post(COUNTRYWITHCODE_API);
      setCountries(response.data.DATA);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCountry();
    fetchSEOData();
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // const hasVisited = localStorage.getItem("hasVisited");
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
      } else {
        setShowModal(true);
        // localStorage.setItem("hasVisited", "true");
        sessionStorage.setItem("hasVisited", "true");
      }
    }
    // else if (location.pathname === "/") {
    //   setShowModal(true);
    // }
  }, [location, navigate]);

  const handleClose = () => setShowModal(false);

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    handleClose();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    });

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Loader />
        </div>
      ) : (
        <Container fluid className="px-0">
          <Helmet>
            <title>
              {seoData[0]?.site_meta_title ||
                "Leading Saree Manufacturer In Surat | Kesaria Textile Company"}
            </title>
            <link
              rel="canonical"
              href={`${
                window.location.hostname == "localhost" ? "http" : "https"
              }://${window.location.host}`}
            />
            <meta property="og:locale" content="en_US" />
            <meta
              name="description"
              content={
                seoData[0]?.site_meta_description ||
                "Kesaria Textile Company is leading saree manufacturer & wholesaler in Surat textile market. ★ Our customer support and factory rate make us a well-known women's clothing manufacturer."
              }
            />
            <meta
              name="keywords"
              content={
                seoData[0]?.site_meta_keyword ||
                "Leading Saree Manufacturer In Surat."
              }
            />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="X-Robots-Tag" content="index, follow" />

            <meta
              property="og:title"
              content={
                seoData[0]?.site_meta_title ||
                "Leading Saree Manufacturer In Surat | Kesaria Textile Company"
              }
            />
            <meta
              property="og:description"
              content={
                seoData[0]?.site_meta_description ||
                "Kesaria Textile Company is leading saree manufacturer & wholesaler in Surat textile market. ★ Our customer support and factory rate make us a well-known women's clothing manufacturer."
              }
            />
            <meta
              property="og:image"
              content={
                seoData[0]?.site_logo ||
                "https:/kesariya.sridixtechnology.com//static/media/kesariyalogo1.395a49d23877712b5186.webp"
              }
            />
            <meta
              property="og:image:alt"
              content="Kesaria Textile Company Logo"
            />
            <meta
              property="og:image:title"
              content="Kesaria Textile Company Official Logo"
            />
            <meta
              property="og:url"
              content={`${
                window.location.hostname == "localhost" ? "http" : "https"
              }://${window.location.host}`}
            />
            <meta
              property="og:site_name"
              content={
                seoData[0]?.site_name || "https://kesariya.sridixtechnology.com"
              }
            />

            <meta property="og:type" content="website" />
            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content={
                seoData[0]?.site_meta_title ||
                "Leading Saree Manufacturer In Surat | Kesaria Textile Company"
              }
            />
            <meta
              name="twitter:description"
              content={
                seoData[0]?.site_meta_description ||
                "Kesaria Textile Company is leading saree manufacturer & wholesaler in Surat textile market. ★ Our customer support and factory rate make us a well-known women's clothing manufacturer."
              }
            />
            <meta
              name="twitter:image"
              content={
                seoData[0]?.site_logo ||
                "https:/kesariya.sridixtechnology.com//static/media/kesariyalogo1.395a49d23877712b5186.webp"
              }
            />
            <meta name="publisher" content="Kesaria Textile Company" />
            <script type="application/ld+json">
              {`
            {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "@id": "https://kesariya.sridixtechnology.com",
          "itemListElement": [
            {
              "@type": "ListItem",
              "@id": "https://kesariya.sridixtechnology.com",
              "position": 1,
              "name": "Home"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://kesariya.sridixtechnology.com",
          "name": "Kesaria Textile Company",
          "description": "Fashion is King",
          "url": "https:/kesariya.sridixtechnology.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https:/kesariya.sridixtechnology.com/wp-content/uploads/2022/01/cropped-ktc-logo-1.png",
            "@id": "https://kesariya.sridixtechnology.com",
            "width": 512,
            "height": 512,
            "caption": "cropped-ktc-logo-1.png"
          },
          "image": {
            "@id": "https://kesariya.sridixtechnology.com"
          }
        },
        {
          "@type": "WebPage",
          "@id": "https://kesariya.sridixtechnology.com",
          "url": "https://kesariya.sridixtechnology.com",
          "name": "Leading Saree Manufacturer In Surat | Kesaria Textile Company",
          "description": "Kesaria Textile Company is leading saree manufacturer & wholesaler in Surat textile market. ★ Our customer support and factory rate make us a well-known women's clothing manufacturer.",
          "inLanguage": "en-US",
          "isPartOf": { "@id": "https://kesariya.sridixtechnology.com" },
          "breadcrumb": {
            "@id": "https://kesariya.sridixtechnology.com"
          },
          "image": {
            "@type": "ImageObject",
            "url": "https:/kesariya.sridixtechnology.com/wp-content/uploads/2022/01/diwali.jpg",
            "@id": "https://kesariya.sridixtechnology.com",
            "width": 1920,
            "height": 900
          },
          "primaryImageOfPage": {
            "@id": "https://kesariya.sridixtechnology.com"
          },
          "datePublished": "2022-08-26T16:51:29+05:30",
          "dateModified": "2024-06-20T11:37:23+05:30"
        },
        {
          "@type": "WebSite",
          "@id": "https://kesariya.sridixtechnology.com",
          "url": "https://kesariya.sridixtechnology.com",
          "name": "Kesaria Textile Company",
          "description": "Fashion is King",
          "inLanguage": "en-US",
          "publisher": {
            "@id": "https://kesariya.sridixtechnology.com"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://kesariya.sridixtechnology.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }
      ]
    }
    `}
            </script>
          </Helmet>

          <HeroSlider sliderData={sliderData} />
          <div className="home-sellerbgimage ">
            <BestSellerSareeSlider data={bestSellerSareeSlider} />
          </div>
          <ExclusiveSareeManufacturer />
          <Whychoosekesariyasection HexagoneImageData={hexagoneImageData} />
          <Ownclothingmainsection
            ImageData={ownClothingCard}
            manufacturevideo={manufacturevideo}
          />
          <Shopbycategory shopbycategory={shopbycategory} />
          <Blogslider data={sliderimage} />
          <MissionCard />
          <OurvisionCard />
          <LatestBlog latestBlog={latestBlog} />
          <Helpus questionsAnswers={questionsAnswers} />
          <Homereview />
          <OurShippingPartner shippingPartnerData={shippingPartnerData} />
          <ReachUs />
          <Companyinfo />

          {/* Enquiry Modal ...........................................................................................*/}
          <Modal
            show={showModal}
            onHide={handleClose}
            className="p-1 enquiry-home-model"
            centered
          >
            <Modal.Header
              closeButton
              className="them-color py-1 send-header "
              closeVariant={"white"}
              style={{ borderRadius: "30px 30px 0 0" }}
            >
              <Modal.Title className="w-100 text-center">
                <span
                  className="text-light send-modal"
                  style={{ fontSize: "20px" }}
                >
                  Send Enquiry
                </span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row>
              <Col>
                <div className="px-1 py-2">
                  <p className="fs-6 fw-semibold send-modal">
                    Our team will reach out to you within the next 24 hours.
                  </p>
                  <Formik
                    initialValues={{
                      name: "",
                      country: "",
                      phoneNumber: "",
                      businessType: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setStatus, resetForm }) => {
                      try {
                        const response = await axios.post(ENQUIRYFORM_API, {
                          name: values.name,
                          country_id: values.country,
                          whatsapp_number: values.phoneNumber,
                          business_type: values.businessType,
                        });

                        resetForm();
                        handleClose();

                        if (response.data.status === 200) {
                          toast.success(
                            response.data.message ||
                              "Your enquiry has been successfully submitted!",
                            {
                              position: "top-right",
                              autoClose: 3000,
                            }
                          );
                        } else {
                          toast.error(response.data.message, {
                            position: "top-right",
                            autoClose: 3000,
                          });
                        }
                      } catch (error) {
                        toast.error("Error submitting the form", {
                          position: "top-right",
                          autoClose: 3000,
                        });
                      }
                    }}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      errors,
                      isSubmitting,
                      status,
                    }) => (
                      <Form
                        onSubmit={handleSubmit}
                        className="d-flex flex-column send-modal"
                      >
                        <Form.Group className="mb-3" controlId="formFullName">
                          <Form.Label className="fw-medium">
                            Full (आपका नाम)
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Full name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.name && errors.name}
                            className="theme-shadow rounded-3 main-modal-font"
                          />
                          <Form.Control.Feedback
                            type="invalid"
                            className="main-modal-font"
                          >
                            {errors.name}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formContactNumber"
                        >
                          <Form.Label className="fw-medium">
                            WhatsApp or Mobile Number (व्हाट्सएप या मोबाइल नंबर)
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Contact no"
                            name="phoneNumber"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onInput={(e) => {
                              e.target.value = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                            }}
                            isInvalid={
                              touched.phoneNumber && errors.phoneNumber
                            }
                            className="theme-shadow rounded-3 main-modal-font"
                          />
                          <Form.Control.Feedback
                            type="invalid"
                            className="main-modal-font"
                          >
                            {errors.phoneNumber}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCountry">
                          <Form.Label className="fw-medium">
                            Country<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Select
                            as="select"
                            name="country"
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.country && errors.country}
                            className="theme-shadow rounded-3 enquireform-padding border-dark"
                          >
                            <option value="">Select your country</option>
                            {countries.map((country) => (
                              <option key={country.id} value={country.id}>
                                {country.phonecode} {country.country_name}
                              </option>
                            ))}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {errors.country}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          className="mb-1"
                          controlId="formBusinessType"
                        >
                          <Form.Label className="fw-medium">
                            Business Type (आप किस तरह का बिज़नेस करते हो){" "}
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <div className="d-flex gap-2 enq-bis-radio">
                            <Form.Check
                              type="radio"
                              label="Small Shop (छोटी दुकान है)"
                              name="businessType"
                              value="option1"
                              checked={values.businessType === "option1"}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={
                                touched.businessType && errors.businessType
                              }
                            />
                            <Form.Check
                              type="radio"
                              label="Wholesaler (होलसेलर)"
                              name="businessType"
                              value="option2"
                              checked={values.businessType === "option2"}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={
                                touched.businessType && errors.businessType
                              }
                            />
                            <Form.Check
                              type="radio"
                              label="New Business (नया बिज़नेस)"
                              name="businessType"
                              value="option3"
                              checked={values.businessType === "option3"}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={
                                touched.businessType && errors.businessType
                              }
                            />
                          </div>
                          <Form.Control.Feedback
                            type="invalid"
                            className="main-modal-font"
                          >
                            {errors.businessType}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <div className="d-flex justify-content-end py-2">
                          <button
                            className="them-color border-0 rounded-5 px-4 py-2 text-light reachus-btn btn-red-to-black-color-move"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            <span>Submit</span>
                          </button>
                        </div>

                        {status && status.success && (
                          <div className="text-center text-success mt-3">
                            {status.success}
                          </div>
                        )}
                        {status && status.error && (
                          <div className="text-center text-danger mt-3">
                            {status.error}
                          </div>
                        )}
                      </Form>
                    )}
                  </Formik>
                </div>
              </Col>
            </Row>
            </Modal.Body>
          </Modal>

          <Modal show={showSuccessModal} onHide={handleSuccessClose} centered>
            <Modal.Header closebutton>
              <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Your enquiry has been successfully submitted!
            </Modal.Body>
            <Modal.Footer>
              <button variant="primary" onClick={handleSuccessClose}>
                Close
              </button>
            </Modal.Footer>
          </Modal>
        </Container>
      )}
    </>
  );
};
