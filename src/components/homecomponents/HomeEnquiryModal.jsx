import axios from "axios";
import { COUNTRYWITHCODE_API, ENQUIRYMODEL_API } from "../../config/config";
import { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

export const HomeEnquiryModal = () => {
  const [countries, setCountries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleClose = () => setShowModal(false);

  const fetchCountry = async () => {
    try {
      const response = await axios.post(COUNTRYWITHCODE_API);
      setCountries(response.data.DATA);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };
  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <Row className="modelcarousel">
      <Col>
        <div className="px-1 py-2">
          <p className="fs-6 fw-semibold send-modal">
            Our team will reach out to you within the next 24 hours.
          </p>
          <Formik
            initialValues={{
              name: "",
              contact_number: "",
              country: "",
              selection: "",
              message: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Full name is required"),
              contact_number: Yup.string()
                .matches(/^\d{10}$/, "Contact number must be exactly 10 digits")
                .required("Contact number is required"),
              country: Yup.string().required("Country is required"),
              selection: Yup.string().required("Please make a selection"),
              message: Yup.string().required("Message is required"),
            })}
            onSubmit={async (values, { setStatus, resetForm }) => {
              try {
                const response = await axios.post(ENQUIRYMODEL_API, {
                  name: values.name,
                  contact_number: values.contact_number,
                  country: values.country,
                  selection: values.selection,
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
                <Form.Group className="mb-3" controlId="formFullName">
                  <Form.Label className="fw-medium">
                    Full (आपका नाम)<span className="text-danger">*</span>
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

                {/* WhatsApp Phone Number */}
                <Form.Group className="mb-3" controlId="formContactNumber">
                  <Form.Label className="fw-medium">
                    WhatsApp Phone Number (आपका मोबाइल नंबर)
                    <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Contact no"
                    name="contact_number"
                    value={values.contact_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.contact_number && errors.contact_number}
                    className="theme-shadow rounded-3 main-modal-font"
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="main-modal-font"
                  >
                    {errors.contact_number}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Country */}
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
                    className="theme-shadow rounded-3 enquireform-padding border-dark "
                  >
                    <option value="">Select your country</option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        <span>{country.phonecode}</span> {country.country_name}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.country}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Business Type */}
                <Form.Group className="mb-1" controlId="formSelection">
                  <Form.Label className="fw-medium">
                    Business Type (आप किस तरह का बिज़नेस करते हो){" "}
                    <span className="text-danger">*</span>
                  </Form.Label>
                  <div className="d-flex gap-2 enq-bis-radio">
                    <Form.Check
                      type="radio"
                      label="Small Shop (छोटी दुकान है)"
                      name="selection"
                      value="option1"
                      checked={values.selection === "option1"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.selection && errors.selection}
                    />
                    <Form.Check
                      type="radio"
                      label="Wholesaler (होलसेलर)"
                      name="selection"
                      value="option2"
                      checked={values.selection === "option2"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.selection && errors.selection}
                    />
                    <Form.Check
                      type="radio"
                      label="New Business (नया बिज़नेस)"
                      name="selection"
                      value="option3"
                      checked={values.selection === "option3"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.selection && errors.selection}
                    />
                  </div>
                  <Form.Control.Feedback
                    type="invalid"
                    className="main-modal-font"
                  >
                    {errors.selection}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex justify-content-end py-2">
                  <button
                    className="them-color border-0 rounded-5 px-4 py-2 text-light reachus-btn"
                    type="submit"
                  >
                    Submit
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

          {/* <EnquiryForm /> */}
        </div>
      </Col>
    </Row>
  );
};
