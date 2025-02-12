import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ENQUIRYFORM_API, COUNTRYWITHCODE_API } from "../../config/config";
import { useParams } from "react-router-dom";
import { enquiryLangugeData } from "../../localdata/localdata";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  country: Yup.string().required("Country is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  businessType: Yup.string().required("Business Type is required"),
  message: Yup.string(),
});

const EnquiryForm = ({ EnqLangugeData }) => {
  const { name } = useParams();
  const [countries, setCountries] = useState([]);

  const selectedLanguageData =
    EnqLangugeData.find((data) => data.language === name) ||
    enquiryLangugeData[0];
  const fetchformData = async (values) => {
    try {
      const response = await axios.post(ENQUIRYFORM_API, {
        name: values.name,
        country_id: values.country,
        whatsapp_number: values.phoneNumber,
        business_type: values.businessType,
        message: values.message,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
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
    fetchCountry();
  }, []);

  return (
    <Formik
      initialValues={{
        name: "",
        country: "",
        phoneNumber: "",
        message: "",
        businessType: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetchformData(values);
        setSubmitting(false);
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
      }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}
          className="them-font fw-medium send-modal"
        >
          <Form.Group className="mb-3 w-100" controlId="formFullName">
            <Form.Label className="fw-medium">
              {selectedLanguageData.name}
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
              className="theme-shadow rounded-3 enquireform-padding border-dark"
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 w-100" controlId="formCountry">
            <Form.Label className="fw-medium">
              {selectedLanguageData.country}
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Select
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
                  <span>{country.phonecode}</span> {country.country_name}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.country}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 w-100" controlId="formPhoneNumber">
            <Form.Label className="fw-medium">
              {selectedLanguageData.whatsappNumber}
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              isInvalid={touched.phoneNumber && errors.phoneNumber}
              maxLength={10}
              className="theme-shadow rounded-3 enquireform-padding border-dark"
            />
            <Form.Control.Feedback type="invalid">
              {errors.phoneNumber}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 w-100" controlId="formBusinessType">
            <Form.Label className="fw-medium">
              {selectedLanguageData.businessType} <span className="text-danger">*</span>
            </Form.Label>
            <div className="d-flex flex-column flex-sm-row justify-content-between flex-wrap gap-3">
              <Form.Check
                type="radio"
                label={selectedLanguageData.smallshop}
                name="businessType"
                value={selectedLanguageData.smallshop}
                checked={values.businessType === selectedLanguageData.smallshop}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border border-dark bg-light p-2 px-5 theme-shadow rounded-4 all-border mb-3 mb-md-0 ${touched.businessType && errors.businessType ? "is-invalid" : ""
                  }`}
              />
              <Form.Check
                type="radio"
                label={selectedLanguageData.Wholesaler}
                name="businessType"
                value={selectedLanguageData.Wholesaler}
                checked={values.businessType === selectedLanguageData.Wholesaler}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border border-dark bg-light p-2 px-5 theme-shadow rounded-4 all-border mb-3 mb-md-0 ${touched.businessType && errors.businessType ? "is-invalid" : ""
                  }`}
              />
              <Form.Check
                type="radio"
                label={selectedLanguageData.NewBusiness}
                name="businessType"
                value={selectedLanguageData.NewBusiness}
                checked={values.businessType === selectedLanguageData.NewBusiness}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border border-dark bg-light p-2 px-5 theme-shadow rounded-4 all-border mb-3 mb-md-0 ${touched.businessType && errors.businessType ? "is-invalid" : ""
                  }`}
              />
            </div>
            {touched.businessType && errors.businessType && (
              <div className="invalid-feedback d-block">
                {errors.businessType}
              </div>
            )}
          </Form.Group>

          <Form.Group className="mb-3 w-100" controlId="formMessage">
            <Form.Label className="fw-medium">
              {selectedLanguageData.Message}
              <span className="text-danger"> (optional)</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter your message"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="theme-shadow rounded-3"
              rows={4}
            />
          </Form.Group>

          <button
            className="them-bg p-2 px-5 rounded-5 border border-dark fs-5 text-light btn-red-to-black-color-move"
            type="submit"
            disabled={isSubmitting}
          >
            <span>{selectedLanguageData.Submit}</span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EnquiryForm;
