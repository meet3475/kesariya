import React from "react";
import { Col, Row, Form, button, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { REACHUS_FORM_API } from "../../config/config";
export const ReachusForm = ({ h1text }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone_number: "",
      email: "",
      city: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("required"),
      phone_number: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required("required"),
      email: Yup.string().required("required"),
      city: Yup.string().required("required"),
      message: Yup.string().required("required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(REACHUS_FORM_API, values);
        formik.setStatus({ success: response.data.message });
        resetForm();
      } catch (error) {
        formik.setStatus({ error: "Error submitting the form" });
        console.error("Error submitting the form:", error);
      }
    },
  });
  return (
    <Col>
      <Form onSubmit={formik.handleSubmit} className="reachus-text">
        <h1 className="text-start them-font mb-2">{h1text}</h1>
        <Row>
          <Col className="mt-1">
            <Form.Group controlId="formFullName" className="them-font">
              <Form.Label>
                Full Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                className="rounded-4 theme-shadow p-3"
                name="name"
                {...formik.getFieldProps("name")}
                isInvalid={formik.touched.name && formik.errors.name}
              />
              <Form.Control.Feedback type="invalid" className="ms-3">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col className="mt-1">
            <Form.Group controlId="formPhone">
              <Form.Label>
                Phone Number<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                className="rounded-4 theme-shadow p-3"
                name="phone_number"
                {...formik.getFieldProps("phone_number")}
                isInvalid={
                  formik.touched.phone_number && formik.errors.phone_number
                }
                inputMode="numeric"
                maxLength={10}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  formik.setFieldValue("phone_number", value);
                }}
              />
              <Form.Control.Feedback type="invalid" className="ms-3">
                {formik.errors.phone_number}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3 px-0">
          <Col className="mt-1">
            <Form.Group controlId="formEmail">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email ID"
                className="rounded-4 theme-shadow p-3"
                name="email"
                {...formik.getFieldProps("email")}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              <Form.Control.Feedback type="invalid" className="ms-3">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col className="mt-1">
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city"
                className="rounded-4 theme-shadow p-3"
                name="city"
                {...formik.getFieldProps("city")}
                isInvalid={formik.touched.city && formik.errors.city}
              />
              <Form.Control.Feedback type="invalid" className="ms-3">
                {formik.errors.city}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formMessage" className="mt-3 p-2">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            className="rounded-4 theme-shadow"
            name="message"
            {...formik.getFieldProps("message")}
            isInvalid={formik.touched.message && formik.errors.message}
          />
          <Form.Control.Feedback type="invalid" className="ms-3">
            {formik.errors.message}
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex justify-content-end">
          <button
            className="mt-3 rounded-4 px-4 py-2 reachus-btn btn-red-to-black-color-move"
            type="submit"
          >
            <span>Submit</span>
          </button>
        </div>
        {formik.status && formik.status.success && (
          <Alert variant="success" className="mt-3">
            {formik.status.success}
          </Alert>
        )}
        {formik.status && formik.status.error && (
          <Alert variant="danger" className="mt-3">
            {formik.status.error}
          </Alert>
        )}
      </Form>
    </Col>
  );
};
