import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "axios";
import { CONTACT_FORM_API } from "../../config/config";
import { useFormik } from "formik";
import * as Yup from "yup";

export const ManufacturerCard = () => {
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
        formik.setStatus({ success: response.data.message });
        alert("Submitted form successfully!");
        resetForm();
        const whatsappUrl =
          "https://api.whatsapp.com/send/?phone=919909048068&text=Hello%2C+I+want+to+see+your+collection%21&type=phone_number&app_absent=0";
        window.open(whatsappUrl, "_blank");
      } catch (error) {
        formik.setStatus({ error: "Error submitting the form" });
        console.error("Error submitting the form:", error);
      }
    },
  });

  return (
    <>
      <Container className="manufacturebgimg new-banner-style h-100 w-100 px-3 pb-3">
        <div className="new-banner-style-container row d-grid align-content-center">
          <Col xs={12} sm={10} md={8} lg={12} className="pt-lg-5 ps-3 ps-lg-5">
            <div>
              <p className="fw-bolder fs-3 text-light pt-1">
                Looking for a reliable manufacturer?
              </p>
              <div className="border-0 rounded-4">
                <Row>
                  <Col lg={6} md={12} sm={12} className="p-0">
                    <Form onSubmit={formik.handleSubmit}>
                      <div
                        className="d-flex flex-row gap-3 setmanufactureheight"
                        style={{ height: "70px" }}
                      >
                        <Row>
                          <Col lg={6} md={12} sm={12} className="p-0 pe-lg-3">
                            <Form.Group className="flex-grow-1 mb-2 mb-sm-0">
                              <Form.Control
                                type="text"
                                placeholder="Name"
                                className="rounded-5 p-2 ps-3"
                                {...formik.getFieldProps("name")}
                                isInvalid={
                                  formik.touched.name && formik.errors.name
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {formik.errors.name}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                          <Col lg={6} md={12} sm={12} className="p-0 ps-lg-2">
                            <Form.Group className="flex-grow-1 mb-2 mb-sm-0">
                              <Form.Control
                                type="text"
                                placeholder="Phone Number"
                                maxLength={10}
                                className="rounded-5 p-2 ps-3"
                                {...formik.getFieldProps("phoneNumber")}
                                isInvalid={
                                  formik.touched.phoneNumber &&
                                  formik.errors.phoneNumber
                                }
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                              <Form.Control.Feedback type="invalid">
                                {formik.errors.phoneNumber}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Col>
                        </Row>
                      </div>
                      <div className=" d-flex justify-content-start manu-btn py-2">
                        <button
                          type="submit"
                          className="px-5 py-2 mb-2 manufactur-btn btn-red-to-black-color-move "
                          disabled={formik.isSubmitting}
                        >
                          <span>Submit</span>
                        </button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </div>
              {formik.status && formik.status.success && (
                <Card.Text className="text-center text-success">
                  {formik.status.success}
                </Card.Text>
              )}
              {formik.status && formik.status.error && (
                <Card.Text className="text-center text-danger">
                  {formik.status.error}
                </Card.Text>
              )}
            </div>
          </Col>
        </div>
      </Container>
    </>
  );
};
