import React, { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import slikbgimg from "../../assets/images/slikcottonbgimg.webp";
import EnquiryModel from "../enquirymodelcomponents/EnquiryModel";
import nodataimg from "../../assets/images/notdataavaiableimg.avif";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CONTACT_FORM_API, storageData } from "../../config/config";
import { GrDownload } from "react-icons/gr";
import Loader from "../loaderspinnercomponents/Loader";

const SilkCotton = ({ CategorydetailInfo }) => {
  const selectedLocation = localStorage.getItem("selectedSection");
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("required"),
      phoneNumber: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required("required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(CONTACT_FORM_API, {
          name: values.name,
          phone_number: values.phoneNumber,
        });
        alert("Submitted form successfully!");
        resetForm();
        const whatsappUrl =
          "https://api.whatsapp.com/send/?phone=919909048068&text=Hello%2C+I+want+to+see+your+collection%21&type=phone_number&app_absent=0";
        window.open(whatsappUrl, "_blank");
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    },
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!CategorydetailInfo || Object.keys(CategorydetailInfo).length === 0) {
    return (
      <div className="text-center py-5">
        <p className="text-danger fs-4">
          <img src={nodataimg} className="w-25 h-25" alt="No data" />
        </p>
        <p className="text-danger fs-4 fw-bolder">Product data not available</p>
      </div>
    );
  }

  return (
    <>
      <div
        className="silk-cotton-container "
        style={{ backgroundImage: `url(${slikbgimg})`, overflow: "hidden" }}
      >
        <Container className="content-container pt-lg-5">
          <Row>
            {/* <Col lg={8} md={12} sm={12}>
              <div key={CategorydetailInfo.id}>
                <h1 className="text-dark fw-bolder fs-11 them-font pt-2">
                  {CategorydetailInfo.category_name}
                  {selectedLocation && selectedLocation !== "Surat"
                    ? ` ${selectedLocation}`
                    : ""}
                </h1>
                <div className="parent-content">
                  {CategorydetailInfo.description ? (
                    <p
                      className="them-font"
                      dangerouslySetInnerHTML={{
                        __html: CategorydetailInfo.description?.replaceAll(
                          storageData?.locationDynamic,
                          storageData?.locationReplace
                        ),
                      }}
                    ></p>
                  ) : (
                    <div class="coming-soon">
                      <h3>Coming Soon Description</h3>
                      <p>We are working on something amazing! Stay tuned.</p>
                    </div>
                  )}
                </div>
              </div>
            </Col> */}
            <Col lg={8} md={12} sm={12}>
              {CategorydetailInfo ? (
                <div key={CategorydetailInfo?.id}>
                  <h1 className="text-dark fw-bolder fs-11 them-font pt-2">
                    {CategorydetailInfo?.category_name}
                    {selectedLocation && selectedLocation !== "Surat"
                      ? ` ${selectedLocation}`
                      : ""}
                  </h1>
                  <div className="parent-content">
                    {CategorydetailInfo?.description ? (
                      <p
                        className="them-font"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        dangerouslySetInnerHTML={{
                          __html: CategorydetailInfo.description?.replaceAll(
                            storageData?.locationDynamic,
                            storageData?.locationReplace

                          ),
                        }}
                      ></p>
                    ) : (
                      <div className="coming-soon">
                        <h3>Coming Soon Description</h3>
                        <p>We are working on something amazing! Stay tuned.</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <h1>Loader</h1>
                  <Loader />
                </div>
                // Loader display while data is loading
              )}
            </Col>

            <Col
              lg={4}
              md={12}
              sm={12}
              className="d-flex flex-column my-4 silkcottonpadding"
            >
              <div
                className="position-relative d-flex flex-column w-100 product-card-container"
                style={{ aspectRatio: "8/10" }}
              >
                <Form
                  className="p-3 them-font theme-shadow border border-dark"
                  style={{
                    zIndex: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "20px",
                    marginBottom: "20px",
                  }}
                  onSubmit={formik.handleSubmit}
                >
                  <h5 className="fw-bold silkcottonfont">
                    Get Free Catalogue for {CategorydetailInfo.category_name}
                  </h5>
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Name*"
                      className="rounded-5 p-2 ps-3"
                      {...formik.getFieldProps("name")}
                      isInvalid={formik.touched.name && formik.errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formPhoneNumber" className="mt-2">
                    <Form.Control
                      type="text"
                      placeholder="Phone Number*"
                      className="rounded-5 p-2 ps-3"
                      inputMode="numeric"
                      maxLength={10}
                      {...formik.getFieldProps("phoneNumber")}
                      isInvalid={
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.phoneNumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <button
                    variant="primary"
                    type="submit"
                    className="mt-3 p-2 px-3 rounded-5 text-light them-color border-0 btn-red-to-black-color-move"
                    disabled={formik.isSubmitting}
                  >
                    <span>Submit</span>
                  </button>
                </Form>
                <div className="rounded-5 border border-danger image-container theme-shadow silkcottonimg">
                  <img
                    src={CategorydetailInfo.image}
                    className="custom-img"
                    style={{
                      filter: "brightness(85%)",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                      marginTop: "auto",
                    }}
                    alt="Silk Cotton Inner"
                  />
                  <a target="_blank" href={CategorydetailInfo.catelog}>
                    <div className="download-icon">
                      <GrDownload />
                    </div>
                  </a>
                  <button
                    className="border-0 silkcottonbtn btn-red-to-black-color-move rounded-5"
                    onClick={(event) => {
                      event.stopPropagation();
                      const message = `Hello, I want to see your collection for ${CategorydetailInfo.category_name}!`;
                      const whatsappUrl = `https://api.whatsapp.com/send/?phone=919909048068&text=${encodeURIComponent(
                        message
                      )}&type=phone_number&app_absent=0`;
                      window.open(whatsappUrl, "_blank");
                    }}
                  >
                    <span>GET QUOTE</span>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <EnquiryModel show={show} handleClose={handleClose} />
    </>
  );
};

export default SilkCotton;
