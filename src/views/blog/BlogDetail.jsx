import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import ReactPlayer from "react-player";
import * as Yup from "yup";
import { Formik } from "formik";
import Loader from "../../components/loaderspinnercomponents/Loader";
import {
  BLOG_DETAIL_API,
  HOME_API,
  ENQUIRYMODEL_API,
  storageData,
} from "../../config/config";
import { Whychoosekesariyasection } from "../../components/homecomponents/WhyChooseKesariyaSection";
import { Helmet } from "react-helmet";
import moment from "moment";

export const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = useParams();

  const [blogdetail, setBlogDetail] = useState({});
  const [hexagoneImageData, setHexagoneImageData] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.post(BLOG_DETAIL_API, { blog_url: name });

        if (response.data.DATA) {
          setBlogDetail(response.data.DATA);
        } else {
          console.error("Unexpected API response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchBlogData();
  }, [name]);

  const fetchData = async () => {
    try {
      const response = await axios.post(HOME_API);
      if (response.data.DATA) {
        setHexagoneImageData(response.data.DATA[2]?.data || []);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching home data:", error);
    }
  };
  useEffect(() => {
    fetchData();
    scrollToTop();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });
    return () => clearTimeout(timer);
  }, []);

  const handleBlogClick = async (blogUrl) => {
    try {
      const response = await axios.post(BLOG_DETAIL_API, { blog_url: blogUrl });
      console.log("response.data:", response.data);
      if (response.data.DATA) {
        setBlogDetail(response.data.DATA);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
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
            breadcrumbTitle={blogdetail?.blog_name || "Blog Detail"}
            breadcrumbNav={[
              { navText: "Home", path: "/" },
              { navText: "Blog", path: "/blog" },
            ]}
          />
          <Helmet>
            <meta charSet="utf-8" />
            <title>{blogdetail?.meta_title || "Blog Detail"}</title>

            <link
              rel="canonical"
              href={`${
                window.location.hostname == "localhost" ? "http" : "https"
              }://${window.location.host}${location?.pathname}`}
            />
            <meta name="description" content={blogdetail?.meta_description} />
            <meta name="keywords" content={blogdetail?.meta_keyword} />
            <meta property="og:locale" content="en_US" />
            <meta
              property="og:site_name"
              content="Kesaria Textile Company | Fashion is King"
            />
            <meta
              property="og:title"
              content={
                blogdetail?.meta_title ||
                "Kesaria Textile Blog | Know About Textile Manufacturers & Wholesalers"
              }
            />
            <meta property="og:type" content="article" />
            <meta
              name="description"
              property="og:description"
              content={blogdetail?.meta_description}
            />
            <meta
              property="og:url"
              content={`${
                window.location.hostname == "localhost" ? "http" : "https"
              }://${window.location.host}${location?.pathname}`}
            />
            <meta
              property="article:published_time"
              content="2022-03-31T10:32:12+00:00"
            />
            <meta
              property="article:modified_time"
              content="2024-05-22T08:29:10+00:00"
            />
            <meta name="twitter:card" content="summary" />
            <meta
              name="twitter:title"
              content={
                blogdetail?.meta_title ||
                "Kesaria Textile Blog | Know About Textile Manufacturers & Wholesalers"
              }
            />
            <meta
              name="twitter:description"
              content={blogdetail?.meta_description}
            />
            <script type="application/ld+json">
              {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https://kesariya.sridixtechnology.com/blog/${blogdetail?.meta_title
                  ?.replace(/\s+/g, "-")
                  .toLowerCase()}",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com/blog/${blogdetail?.meta_title
                      ?.replace(/\s+/g, "-")
                      .toLowerCase()}",
                    "position": 1,
                    "name": "Home",
                    "item": "https://kesariya.sridixtechnology.com/blog/${blogdetail?.meta_title
                      ?.replace(/\s+/g, "-")
                      .toLowerCase()}",
                    "nextItem": "https://kesariya.sridixtechnology.com/blog/${blogdetail?.meta_title
                      ?.replace(/\s+/g, "-")
                      .toLowerCase()}"
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com/blog/${blogdetail?.meta_title
                      ?.replace(/\s+/g, "-")
                      .toLowerCase()}",
                    "position": 2,
                    "name": "BLOG",
                    "previousItem": "https://kesariya.sridixtechnology.com/${blogdetail?.meta_title
                      ?.replace(/\s+/g, "-")
                      .toLowerCase()}"
                  }
                ]
              },
              {
                "@type": "Organization",
                "@id": "https://kesariya.sridixtechnology.com/${blogdetail?.meta_title
                  ?.replace(/\s+/g, "-")
                  .toLowerCase()}",
                "name": "Keasria Textile Company",
                "description": "Fashion is King",
                "url": "https://kesariya.sridixtechnology.com/${blogdetail?.meta_title
                  ?.replace(/\s+/g, "-")
                  .toLowerCase()}",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://kesariya.sridixtechnology.com/wp-content/uploads/2022/01/cropped-ktc-logo-1.webp",
                  "@id": "https://kesariya.sridixtechnology.com/blog/${blogdetail?.meta_title
                    ?.replace(/\s+/g, "-")
                    .toLowerCase()}",
                  "width": 512,
                  "height": 512,
                  "caption": "cropped-ktc-logo-1.webp"
                },
                "image": {
                  "@id": "https://kesariya.sridixtechnology.com/blog/${blogdetail?.meta_title
                    ?.replace(/\s+/g, "-")
                    .toLowerCase()}"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://kesariya.sridixtechnology.com/blog/${blogdetail?.meta_title
                  ?.replace(/\s+/g, "-")
                  .toLowerCase()}",
                "url": "https://kesariya.sridixtechnology.com/blog/${blogdetail?.meta_title
                  ?.replace(/\s+/g, "-")
                  .toLowerCase()}",
                "name": "Kesaria Textile Blog | Know About Textile Manufacturers & Wholesalers",
                "description": "Check here latest & updated textile manufacturers & wholesalers information. Our experts share some tips about buying & selling about our products.",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://kesariya.sridixtechnology.com/${blogdetail?.meta_title
                  ?.replace(/\s+/g, "-")
                  .toLowerCase()}" },
                "breadcrumb": { "@id": "https://kesariya.sridixtechnology.com/blog/${blogdetail?.meta_title
                  ?.replace(/\s+/g, "-")
                  .toLowerCase()}" },
                "datePublished": "2022-03-31T16:02:12+05:30",
                "dateModified": "2024-05-22T13:59:10+05:30"
              },
              {
                "@type": "WebSite",
                "@id": "https://kesariya.sridixtechnology.com/${blogdetail?.meta_title
                  ?.replace(/\s+/g, "-")
                  .toLowerCase()}",
                "url": "https://kesariya.sridixtechnology.com/${blogdetail?.meta_title
                  ?.replace(/\s+/g, "-")
                  .toLowerCase()}",
                "name": "Kesaria Textile Company",
                "description": "Fashion is King",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://kesariya.sridixtechnology.com/${blogdetail?.meta_title
                  ?.replace(/\s+/g, "-")
                  .toLowerCase()}" }
              }
            ]
          }
          `}
            </script>
          </Helmet>
          <Container className="pagemargin">
            <Row>
              <Col lg={8} className="p-2 video-container">
                <p className="fs-3 fw-bolder text-color">
                  {blogdetail?.blog_name}
                </p>
                {blogdetail?.blog_video_url && (
                  <div
                    className="rounded-4 border-danger theme-shadow"
                    style={{ overflow: "hidden", aspectRatio: "19/8" }}
                  >
                    <ReactPlayer
                      url={blogdetail.blog_video_url}
                      controls
                      className="rounded-4"
                      width="100%"
                      height="100%"
                    />
                  </div>
                )}
                <Container className="content-container py-3 py-lg-5 px-0">
                  <Row>
                    <Col lg={12} className="mb-4">
                      {blogdetail?.blog_description && (
                        <div
                          className="parent-content-blogdetails"
                          style={{ wordBreak: "break-word" }}
                        >
                          <div
                            className="text-sm xl:text-lg them-font"
                            dangerouslySetInnerHTML={{
                              __html: blogdetail.blog_description.replaceAll(
                                storageData?.locationDynamic,
                                storageData?.locationReplace
                              ),
                            }}
                            style={{ textAlign: "justify" }}
                          />
                        </div>
                      )}
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col lg={4}>
                <div className="border border-dark rounded-5 theme-shadow">
                  <h4 className="text-center bg-danger rounded-top-5 py-2 text-light">
                    Send Inquiry
                  </h4>
                  <p className="fs-6 fw-semibold px-3">
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
                      message: Yup.string(),
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
                        className="d-flex flex-column p-3"
                      >
                        <Form.Group className="mb-3" controlId="formFullName">
                          <Form.Label>
                            Full Name<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            typ
                            e="text"
                            placeholder="Full name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.name && errors.name}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formContactNumber"
                        >
                          <Form.Label>
                            Contact Number<span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Contact number"
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
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.contact_number}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formInquiry">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter your inquiry..."
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.message && errors.message}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Button
                          type="submit"
                          className="them-color border-0 rounded-5 px-4 py-2 text-light btn-red-to-black-color-move onhover"
                        >
                          <span>Submit</span>
                        </Button>
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
                <div className="border-0 rounded-5 mt-5 p-3 fthem-font blog-detail-shadow">
                  <h4>Latest Blogs</h4>
                  {blogdetail?.Latest_Blog?.length > 0 &&
                    blogdetail.Latest_Blog.map((data, i) => (
                      <Card
                        className="rounded-4 mb-3"
                        style={{ boxShadow: "2px 2px 0", cursor: "pointer" }}
                        key={i}
                        onClick={() => {
                          const staticDate = moment("01-02-2025", "DD-MM-YYYY");
                          const blogDate = moment(
                            data.blog_created_at,
                            "DD-MM-YYYY"
                          );

                          const isFutureOrSame =
                            blogDate.isSameOrAfter(staticDate);
                          const blogUrl = isFutureOrSame
                            ? `/blog/${data.meta_url}`
                            : `/${blogDate.format("YYYY/MM/DD")}/${
                                data.meta_url
                              }`;

                          navigate(blogUrl);

                          handleBlogClick(data?.meta_url);
                        }}
                      >
                        <Row className="g-0">
                          <Col xs={4} className="d-flex justify-content-center">
                            <Card.Img
                              variant="top"
                              src={data.blog_image}
                              className="img-fluid rounded-4 p-2"
                              onClick={scrollToTop}
                            />
                          </Col>
                          <Col xs={8}>
                            <Card.Body onClick={scrollToTop}>
                              <p className="blog-page-card-text fs-14">
                                {data.blog_name}
                              </p>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    ))}
                </div>
              </Col>
            </Row>
          </Container>
          <Whychoosekesariyasection HexagoneImageData={hexagoneImageData} />
        </>
      )}
    </>
  );
};
