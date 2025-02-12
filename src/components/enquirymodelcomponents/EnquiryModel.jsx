import { Col, Row, button, Form, Carousel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ENQUIRYMODEL_API } from "../../config/config";
import * as Yup from "yup";
import { Formik } from "formik";
import sendenquiryproductpage from "../../assets/images/sendenquiryproductpage.webp";
import { useState } from "react";

const EnquiryModel = ({ show, handleClose }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    handleClose();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className="p-3 enquirymodel"
        centered
      >
        <Modal.Header
          closeButton
          className="them-color justify-content-center position-relative send-header"
          closeVariant={"white"}
          style={{ borderRadius: "30px 30px 0 0" }}
        >
          <Modal.Title className="w-100 text-center">
            <span className="text-light send-modal">Send Enquiry</span>
          </Modal.Title>
        </Modal.Header>
        <Row className="modelcarousel">
          <Col lg={6} md={6} sm={6} xs={12} className="p-0">
            <Carousel
              className="d-none d-lg-block h-100 custom-bgcolor-change-carousel"
              interval={2000}
              controls={true}
              pause="hover"
            >
              <Carousel.Item className="h-100 ">
                <img
                  className="d-block w-100 h-100"
                  src={sendenquiryproductpage}
                  alt="First slide"
                  style={{ borderRadius: "0 0 0 30px", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item
                className="h-100"
                style={{ borderRadius: "0 0 0 30px" }}
              >
                <img
                  className="d-block w-100 h-100"
                  src={sendenquiryproductpage}
                  alt="Second slide"
                  style={{ borderRadius: "0 0 0 30px", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item className="h-100">
                <img
                  className="d-block w-100 h-100"
                  src={sendenquiryproductpage}
                  alt="Third slide"
                  style={{ borderRadius: "0 0 0 30px", objectFit: "cover" }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <div className="mt-3 pb-2 pt-1">
              <p className="fs-6 fw-semibold send-modal">
                Our team will reach out to you within the next 24 hours.
              </p>
              <Formik
                initialValues={{
                  name: "",
                  contact_number: "",
                  message: "",
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required("Full name is required"),
                  contact_number: Yup.string()
                    .matches(
                      /^\d{10}$/,
                      "Contact number must be exactly 10 digits"
                    )
                    .required("Contact number is required"),
                  message: Yup.string().required("Message is required"),
                })}
                onSubmit={async (values, { setStatus, resetForm }) => {
                  try {
                    const response = await axios.post(ENQUIRYMODEL_API, {
                      name: values.name,
                      contact_number: values.contact_number,
                      message: values.message,
                    });
                    setStatus({ success: response.data.message });
                    resetForm();
                    handleClose();
                    setShowSuccessModal(true);
                  } catch (error) {
                    setStatus({ error: "Error submitting the form" });
                    console.error("Error submitting form:", error);
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
                  status,
                }) => (
                  <Form
                    onSubmit={handleSubmit}
                    className="d-flex flex-column send-modal"
                  >
                    <Form.Group className="mb-3 w-100" controlId="formFullName">
                      <Form.Label className="fw-semibold">
                        Full Name<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Full name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && errors.name}
                        className="theme-shadow rounded-3"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mb-3 w-100"
                      controlId="formContactNumber"
                    >
                      <Form.Label className="fw-semibold">
                        Contact Number<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Contact no"
                        name="contact_number"
                        value={values.contact_number}
                        onChange={(e) => {
                          const value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                          handleChange({
                            target: { name: "contact_number", value },
                          });
                        }}
                        onBlur={handleBlur}
                        isInvalid={
                          touched.contact_number && errors.contact_number
                        }
                        inputMode="numeric"
                        maxLength={10}
                        className="theme-shadow rounded-3"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.contact_number}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="formInquiry">
                      <Form.Label className="fw-semibold">
                        Inquiry<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter Query..."
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.message && errors.message}
                        className="theme-shadow rounded-3"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                      <button
                        className="rounded-5 px-4 py-2 reachus-btn btn-red-to-black-color-move"
                        type="submit"
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
      </Modal>
      <Modal
        show={showSuccessModal}
        onHide={handleSuccessClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header className="text-center them-color" closebutton>
          <Modal.Title className="text-light">Success</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p className="fs-4 fw-medium them-font-color">
            Submitted form successfully!
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <button
            variant="primary"
            onClick={handleSuccessClose}
            className="them-color border-0 rounded-5 px-4 py-2 text-light reachus-btn"
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EnquiryModel;
