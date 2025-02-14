import React, { useState, useEffect } from "react";
import { Container, Row, Col, button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  REVIEWFORM_API,
  COUNTRY_API,
  STATE_API,
  CITY_API,
} from "../../config/config";
import FirstImage from "../productcomponents/FirstImage";
import blogstory1 from "../../assets/images/blogstoryimg1.webp";
import blogstory2 from "../../assets/images/blogstoryimg2.webp";
import Modalimg from "../../assets/images/blogstorymodalimg.webp";
import { Link } from "react-router-dom";

export const BlogOwnStorySec = () => {
  const [show, setShow] = useState(false);
  const [countryinfo, setCountryinfo] = useState([]);
  const [stateinfo, setStateinfo] = useState([]);
  const [cityinfo, setCityinfo] = useState([]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      contact_number: "",
      country_id: "",
      state_id: "",
      city_id: "",
      image: "",
      review: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full name is required"),
      contact_number: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required("Contact number is required"),
      country_id: Yup.string().required("Country is required"),
      state_id: Yup.string().required("State is required"),
      city_id: Yup.string().required("City is required"),
      review: Yup.string().required("Message is required"),
      image: Yup.string().required("image is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("contact_number", values.contact_number);
      formData.append("country_id", values.country_id);
      formData.append("state_id", values.state_id);
      formData.append("city_id", values.city_id);
      formData.append("review", values.review);
      if (values.image) {
        formData.append("image", values.image);
      }
      try {
        const response = await axios.post(REVIEWFORM_API, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (response.data.status === 200) {
          alert("Review submitted form successfully!");
          resetForm();
          handleClose();
        } else {
          alert("Failed to submit review. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting review:", error);
        alert("An error occurred. Please try again.");
      }
    },
  });

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.post(COUNTRY_API);
        if (response.data.DATA) {
          setCountryinfo(response.data.DATA);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, []);

  useEffect(() => {
    const fetchStateData = async () => {
      if (formik.values.country_id) {
        try {
          const response = await axios.post(STATE_API, {
            country_id: formik.values.country_id,
          });
          if (response.data.DATA) {
            setStateinfo(response.data.DATA);
          }
        } catch (error) {
          console.error("Error fetching state data:", error);
        }
      }
    };

    fetchStateData();
  }, [formik.values.country_id]);

  useEffect(() => {
    const fetchCityData = async () => {
      if (formik.values.state_id) {
        try {
          const response = await axios.post(CITY_API, {
            state_id: formik.values.state_id,
          });
          if (response.data.DATA) {
            setCityinfo(response.data.DATA);
          }
        } catch (error) {
          console.error("Error fetching city data:", error);
        }
      }
    };

    fetchCityData();
  }, [formik.values.state_id]);

  return (
    <>
      <Container>
        <Row className="py-5">
          <Col xs={12} md={12} lg={6}>
            <div className="them-font">
              <h5 className="fs-2 text-start">Start Your Own Success Story</h5>
              <p className="text-start">
                Kesaria Textile Company is a manufacturer, wholesaler, and
                exporter of sarees and women’s clothing wear. We have a
                manufacturing capacity of more than one million pieces per
                month. Since the beginning, our company has been dedicated to
                customer satisfaction and we have put all our efforts into it.
                Clients are most valuable to us, and they are playing a major
                role in our success and accomplishment.
              </p>
              <p className="text-start">
                Our firm has adopted a total quality management policy, which
                enables us to maintain the highest quality standards in our
                apparel range. In addition, we purchase fabric and other input
                from industry-permitted traders who have a deep understanding
                and expertise of the industry. By implementing a quality-focused
                management strategy, we are able to satisfy our customers and
                other retailers.
              </p>
              <div className="d-flex gap-2">
                <Link to="/contact-us/">
                  <button className="manufactur-btn p-2 text-light btn-red-to-black-color-move px-3">
                    <span>Contact Now</span>
                  </button>
                </Link>

                <button
                  className="manufactur-btn border border-dark p-2 px-3 btn-white-to-black-color-move"
                  onClick={handleShow}
                >
                  <span>Share Your Story</span>
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div
              className="d-flex justify-content-center p-3"
              style={{ position: "relative" }}
            >
              <img
                src={blogstory2}
                alt="blogstory2"
                className="blogstoryimg2"
              />
              <img src={blogstory1} alt="Example" className="blogstoryimg1" />
            </div>
          </Col>
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        className="blogmodelyourstory"
      >
        <Modal.Header
          closeButton
          className="bg-danger"
          style={{ borderRadius: "30px 30px 0 0 " }}
          closeVariant={"white"}
        >
          <Modal.Title className="w-100 text-center">
            <span className="text-light">Share Your Story</span>
          </Modal.Title>
        </Modal.Header>
        <div className="d-none d-lg-block">
          <FirstImage image={Modalimg} />
        </div>

        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col sm={12} md={6} lg={6} xl={6}>
                <Form.Group controlId="formname">
                  <Form.Label className="fw-semibold">
                    Full name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Full name"
                    className="rounded-4 theme-shadow p-3"
                    {...formik.getFieldProps("name")}
                    isInvalid={formik.touched.name && formik.errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={12} md={6} lg={6} xl={6}>
                <Form.Group controlId="formPhone">
                  <Form.Label className="fw-semibold">
                    Contact no<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    name="contact_number"
                    placeholder="Contact no"
                    className="rounded-4 theme-shadow p-3"
                    {...formik.getFieldProps("contact_number")}
                    isInvalid={
                      formik.touched.contact_number &&
                      formik.errors.contact_number
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.contact_number}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={12} md={6}>
                <Form.Group controlId="formCountry">
                  <Form.Label className="fw-semibold">Country</Form.Label>
                  <Form.Select
                    className="rounded-4 theme-shadow p-3"
                    name="country_id"
                    {...formik.getFieldProps("country_id")}
                    isInvalid={
                      formik.touched.country_id && formik.errors.country_id
                    }
                  >
                    <option value="">Select your country</option>
                    {Array.isArray(countryinfo) &&
                      countryinfo.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.country_name}
                        </option>
                      ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.country_id}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group controlId="formState">
                  <Form.Label className="fw-semibold">State</Form.Label>
                  <Form.Select
                    className="rounded-4 theme-shadow p-3"
                    name="state_id"
                    {...formik.getFieldProps("state_id")}
                    isInvalid={
                      formik.touched.state_id && formik.errors.state_id
                    }
                  >
                    <option value="">Select your state</option>
                    {Array.isArray(stateinfo) &&
                      stateinfo.map((state) => (
                        <option key={state.id} value={state.id}>
                          {state.state_name}
                        </option>
                      ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.state_id}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={12} md={6} className="mt-3">
                <Form.Group controlId="formCity">
                  <Form.Label className="fw-semibold">City</Form.Label>
                  <Form.Select
                    className="rounded-4 theme-shadow p-3"
                    name="city_id"
                    {...formik.getFieldProps("city_id")}
                    isInvalid={formik.touched.city_id && formik.errors.city_id}
                  >
                    <option value="">Select your city</option>
                    {Array.isArray(cityinfo) &&
                      cityinfo.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.city_name}
                        </option>
                      ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.city_id}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={12} md={6} className="mt-3">
                <Form.Group controlId="formImage">
                  <Form.Label className="fw-semibold">Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    className="rounded-4 theme-shadow p-3"
                    onChange={(event) =>
                      formik.setFieldValue(
                        "image",
                        event.currentTarget.files[0]
                      )
                    }
                    isInvalid={formik.touched.image && formik.errors.image}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.image}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col sm={12} className="mt-3">
                <Form.Group controlId="formReview">
                  <Form.Label className="fw-semibold">Message*</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="review"
                    placeholder="Enter message..."
                    className="rounded-4 theme-shadow p-3"
                    {...formik.getFieldProps("review")}
                    isInvalid={formik.touched.review && formik.errors.review}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.review}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <div className="d-flex justify-content-center mt-4">
              <button
                type="submit"
                className="px-4 p-2 btn-red-to-black-color-move manufactur-btn"
              >
                <span>Submit</span>
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
