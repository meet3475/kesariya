import React, { useState, useEffect } from "react";
import { Container, Row, Col, button, Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import { APPLYCARRERFORM_API, CAREERDETAIL_API } from "../../config/config";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../components/loaderspinnercomponents/Loader";
import { Helmet } from "react-helmet";

export const CareerDetail = () => {
  const { id } = useParams();
  const [careerData, setCareerData] = useState([]);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCareerData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(CAREERDETAIL_API, { career_id: id });
      if (response.data && response.data.DATA) {
        setCareerData(response.data.DATA);
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

  useEffect(() => {
    fetchCareerData();
  }, [id]);

  const formik = useFormik({
    initialValues: {
      name: "",
      contact_number: "",
      email_id: "",
      location: "",
      message: "",
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      contact_number: Yup.string()
        .matches(/^\d{10}$/, "Contact number must be exactly 10 digits")
        .required("Required"),
      email_id: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      location: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
      image: Yup.mixed().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("contact_number", values.contact_number);
        formData.append("email_id", values.email_id);
        formData.append("location", values.location);
        formData.append("message", values.message);
        formData.append("image", values.image);

        const response = await axios.post(APPLYCARRERFORM_API, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setStatus({ success: response.data.message });
        resetForm();
      } catch (error) {
        setStatus({ error: "Error submitting the form" });
        console.error("Error submitting the form:", error);
      }
    },
  });
  const renderList = (data) => {
    return data
      .split("\r\n")
      .map((item, index) => <li key={index}>{item.replace(/^\-\s*/, "")}</li>);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Loader />
        </div>
      ) : (
        <>
          <Breadcrumb
            breadcrumbTitle="Social Media Manager"
            breadcrumbNav={[
              { navText: "Home", path: "/" },
              { navText: "Career", path: "/career/" },
            ]}
          />
          <Container className="py-2 pagemargin">
            <Helmet>
              <meta charSet="utf-8" />
              <title>
                Career | Kesaria Textile Company | KTC | Fashion is King
              </title>
              <link
                rel="canonical"
                href={`${
                  window.location.hostname == "localhost" ? "http" : "https"
                }://${window.location.host}/career/${id}`}
              />
              <meta
                name="description"
                content="Career in KTC. There are various career opening in Kesaria Textile Company right now like Digital Marketing Executive, Graphics Designer and Video Editor..."
              />
              <meta property="og:locale" content="en_US" />
              <meta
                property="og:site_name"
                content="Kesaria Textile Company | Fashion is King"
              />
              <meta
                property="og:title"
                content="Career | Kesaria Textile Company | KTC | Fashion is King"
              />
              <meta property="og:type" content="article" />
              <meta
                name="description"
                property="og:description"
                content="Career in KTC. There are various career opening in Kesaria Textile Company right now like Digital Marketing Executive, Graphics Designer and Video Editor..."
              />
              <meta
                property="og:url"
                content={`${
                  window.location.hostname == "localhost" ? "http" : "https"
                }://${window.location.host}/career/${id}`}
              />
              <meta
                property="article:published_time"
                content="2022-02-01T03:49:14+00:00"
              />
              <meta
                property="article:modified_time"
                content="2024-06-29T06:31:53+00:00"
              />
              <meta name="twitter:card" content="summary" />
              <meta
                name="twitter:title"
                content="Career | Kesaria Textile Company | KTC | Fashion is King"
              />
              <meta
                name="twitter:description"
                content="Career in KTC. There are various career opening in Kesaria Textile Company right now like Digital Marketing Executive, Graphics Designer and Video Editor..."
              />
              <script type="application/ld+json">
                {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https://kesariya.sridixtechnology.com/career/${id}",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com/career/${id}",
                    "position": 1,
                    "name": "Home",
                    "item": "https:/kesariya.sridixtechnology.com/",
                    "nextItem": "https://kesariya.sridixtechnology.com/career/${id}"
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com/career/${id}",
                    "position": 2,
                    "name": "Career",
                    "previousItem": "https://kesariya.sridixtechnology.com/career/${id}"
                  }
                ]
              },
              {
                "@type": "Organization",
                "@id": "https://kesariya.sridixtechnology.com",
                "name": "Keasria Textile Company",
                "description": "Fashion is King",
                "url": "https://kesariya.sridixtechnology.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https:/kesariya.sridixtechnology.com/wp-content/uploads/2022/01/cropped-ktc-logo-1.webp",
                  "@id": "https://kesariya.sridixtechnology.com/career/${id}",
                  "width": 512,
                  "height": 512,
                  "caption": "cropped-ktc-logo-1.webp"
                },
                "image": {
                  "@id": "https://kesariya.sridixtechnology.com/career/${id}"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://kesariya.sridixtechnology.com/career/${id}",
                "url": "https://kesariya.sridixtechnology.com/career/${id}",
                "name": "Career | Kesaria Textile Company | KTC | Fashion is King",
                "description": "Career in KTC. There are various career opening in Kesaria Textile Company right now like Digital Marketing Executive, Graphics Designer and Video Editor...",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://kesariya.sridixtechnology.com" },
                "breadcrumb": { "@id": "https://kesariya.sridixtechnology.com/career/${id}" },
                "datePublished": "2022-02-01T09:19:14+05:30",
                "dateModified": "2024-06-29T12:01:53+05:30"
              },
              {
                "@type": "WebSite",
                "@id": "https://kesariya.sridixtechnology.com",
                "url": "https://kesariya.sridixtechnology.com",
                "name": "Kesaria Textile Company",
                "description": "Fashion is King",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://kesariya.sridixtechnology.com" }
              }
            ]
          }
          `}
              </script>
            </Helmet>
            <Row>
              <Col lg={8} md={12} className="mb-4">
                <h4 className="text-color fw-bolder fs-2 them-font text-danger fs-11">
                  {careerData.career_title}
                </h4>
                <p className="fs-11">{careerData.career_description}</p>

                {careerData.Objectives && careerData.Objectives !== "NA" && (
                  <>
                    <h4 className="text-color fw-bolder fs-2 them-font text-danger">
                      Objectives
                    </h4>
                    <ul className="fs-11">
                      {renderList(careerData.Objectives)}
                    </ul>
                  </>
                )}

                {careerData.Responsibilities && (
                  <>
                    <h4 className="text-color fw-bolder fs-2 them-font text-danger">
                      Responsibilities
                    </h4>
                    <ul className="fs-11">
                      {renderList(careerData.Responsibilities)}
                    </ul>
                  </>
                )}

                {careerData.Skills && (
                  <>
                    <h4 className="text-color fw-bolder fs-2 them-font text-danger">
                      Skills
                    </h4>
                    <ul className="fs-11">{renderList(careerData.Skills)}</ul>
                  </>
                )}

                {careerData.Preferred_Qualifications && (
                  <>
                    <h4 className="text-color fw-bolder fs-2 them-font text-danger">
                      Preferred Qualifications
                    </h4>
                    <ul className="fs-11">
                      {renderList(careerData.Preferred_Qualifications)}
                    </ul>
                  </>
                )}
              </Col>
              <Col lg={4} md={12} className="mt-3">
                <div className="border border-dark rounded-5 theme-shadow">
                  <h4 className="text-center text-light them-font them-bg rounded-top-5 py-2 m-0">
                    Apply Now
                  </h4>
                  <Form
                    className="d-flex flex-column p-3 theme-font graybackgroundcolor rounded-bottom-5"
                    onSubmit={formik.handleSubmit}
                  >
                    <Form.Group className="mb-3 w-100" controlId="formFullName">
                      <Form.Label className="fw-semibold">
                        Full Name<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Full name"
                        {...formik.getFieldProps("name")}
                        isInvalid={formik.touched.name && formik.errors.name}
                        className="theme-shadow"
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
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
                        name="contact_number"
                        placeholder="Contact no"
                        {...formik.getFieldProps("contact_number")}
                        isInvalid={
                          formik.touched.contact_number &&
                          formik.errors.contact_number
                        }
                        className="theme-shadow border-dark"
                        maxLength={10}
                        onInput={(e) => {
                          e.target.value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                          formik.setFieldValue(
                            "contact_number",
                            e.target.value
                          );
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.contact_number}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 w-100" controlId="formEmailId">
                      <Form.Label className="fw-semibold">
                        Email Id<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="email_id"
                        placeholder="Email Id"
                        {...formik.getFieldProps("email_id")}
                        isInvalid={
                          formik.touched.email_id && formik.errors.email_id
                        }
                        className="theme-shadow"
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.email_id}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 w-100" controlId="formLocation">
                      <Form.Label className="fw-semibold">
                        Location<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="location"
                        placeholder="Location"
                        {...formik.getFieldProps("location")}
                        isInvalid={
                          formik.touched.location && formik.errors.location
                        }
                        className="theme-shadow"
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.location}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 w-100" controlId="formImage">
                      <Form.Label className="fw-semibold">
                        Upload Image<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="image"
                        onChange={(e) =>
                          formik.setFieldValue(
                            "image",
                            e.currentTarget.files[0]
                          )
                        }
                        isInvalid={formik.touched.image && formik.errors.image}
                        className="theme-shadow"
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.image}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 w-100" controlId="formMessage">
                      <Form.Label className="fw-semibold">
                        Message<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        placeholder="Enter Message..."
                        {...formik.getFieldProps("message")}
                        isInvalid={
                          formik.touched.message && formik.errors.message
                        }
                        className="theme-shadow"
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <div className="d-flex justify-content-end">
                      <button
                        className="btn border-0 rounded-5 px-3 btn-red-to-black-color-move viewmorebtn"
                        type="submit"
                      >
                        <span>Submit</span>
                      </button>
                    </div>
                  </Form>
                  {status && status.success && (
                    <Card.Text className="text-center text-success mt-3">
                      {status.success}
                    </Card.Text>
                  )}
                  {status && status.error && (
                    <Card.Text className="text-center text-danger mt-3">
                      {status.error}
                    </Card.Text>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
