import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, button } from "react-bootstrap";
import FirstImage from "../../components/productcomponents/FirstImage";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import Loader from "../../components/loaderspinnercomponents/Loader";
import axios from "axios";
import { ALL_PAGE_SEO_API, BLOG_API } from "../../config/config";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import { Helmet } from "react-helmet";

export const CustmerReview = () => {
  const [showAll, setShowAll] = useState(false);
  const [BlogBenner, setBlogBenner] = useState([]);
  const [Bloglist, setBloglist] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogData = async () => {
    try {
      const response = await axios.post(BLOG_API);
      if (response.data.DATA) {
        setBlogBenner(response.data.DATA[0].data[1].image);
        setBloglist(response.data.DATA[1].data.data);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const [seoData, setSeoData] = useState([]);

  const seofetchData = async () => {
    try {
      const response = await axios.get(ALL_PAGE_SEO_API);
      if (response) {
        setSeoData(response.data.DATA[0].meta);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBlogData();
    seofetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Loader />
        </div>
      ) : (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              {seoData?.meta_title ||
                "Customer Review : Kesaria Textile Company ~ Surat"}
            </title>
            <link
              rel="canonical"
              href={`${
                window.location.hostname == "localhost" ? "http" : "https"
              }://${window.location.host}/customer-review/`}
            />
            <meta
              name="description"
              content={
                seoData?.meta_description ||
                "Get connected to us & detail your current needs and what you may be interested in down the road. Our Sales Executive Number: +91-7969280022 | info.kesaria@kesariatextile.com"
              }
            />
            <meta
              name="keywords"
              content={
                seoData?.meta_keyword || "Leading Saree Manufacturer In Surat."
              }
            />
            <meta property="og:locale" content="en_US" />
            <meta
              property="og:site_name"
              content="Kesaria Textile Company | Fashion is King"
            />
            <meta
              property="og:title"
              content={
                seoData?.meta_title ||
                "Customer Review : Kesaria Textile Company ~ Surat"
              }
            />
            <meta property="og:type" content="article" />
            <meta
              name="description"
              property="og:description"
              content={
                seoData?.meta_description ||
                "Get connected to us & detail your current needs and what you may be interested in down the road. Our Sales Executive Number: +91-7969280022 | info.kesaria@kesariatextile.com"
              }
            />
            <meta
              property="og:url"
              content={`${
                window.location.hostname == "localhost" ? "http" : "https"
              }://${window.location.host}/customer-review/`}
            />
            <meta
              property="article:published_time"
              content="2015-12-26T03:36:03+00:00"
            />
            <meta
              property="article:modified_time"
              content="2024-05-22T08:25:01+00:00"
            />
            <meta name="twitter:card" content="summary" />
            <meta
              name="twitter:title"
              content={
                seoData?.meta_title ||
                "Customer Review : Kesaria Textile Company ~ Surat"
              }
            />
            <meta
              name="twitter:description"
              content={
                seoData?.meta_description ||
                "Get connected to us & detail your current needs and what you may be interested in down the road. Our Sales Executive Number: +91-7969280022 | info.kesaria@kesariatextile.com"
              }
            />

            <script type="application/ld+json">
              {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https://kesariya.sridixtechnology.com/customer-review/",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com",
                    "position": 1,
                    "name": "Home",
                    "item": "https://kesariya.sridixtechnology.com",
                    "nextItem": "https://kesariya.sridixtechnology.com/customer-review/"
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com/customer-review/",
                    "position": 2,
                    "name": "Customer Review",
                    "previousItem": "https://kesariya.sridixtechnology.com"
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
                  "@id": "https://kesariya.sridixtechnology.com/customer-review/",
                  "width": 512,
                  "height": 512,
                  "caption": "cropped-ktc-logo-1.webp"
                },
                "image": {
                  "@id": "https://kesariya.sridixtechnology.com/customer-review/"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://kesariya.sridixtechnology.com/customer-review/",
                "url": "https://kesariya.sridixtechnology.com/customer-review/",
                "name": "Customer Review : Kesaria Textile Company ~ Surat",
                "description": "Get connected to us & detail your current needs and what you may be interested in down the road. Our Sales Executive Number: +91-7969280022 | info.kesaria@kesariatextile.com",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://kesariya.sridixtechnology.com" },
                "breadcrumb": { "@id": "https://kesariya.sridixtechnology.com/customer-review/" },
                "datePublished": "2015-12-26T09:06:03+05:30",
                "dateModified": "2024-05-22T13:55:01+05:30"
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
          <FirstImage image={BlogBenner} />
          <Breadcrumb
            breadcrumbTitle="Customer Reviews"
            breadcrumbNav={[
              {
                navText: "Home",
                path: "/",
              },
            ]}
          />
          <Container className="pagemargin">
            <Row>
              <div className="text-center saree-heading pt-2">
                Customer Reviews
              </div>
              <div className="d-flex justify-content-center">
                <img
                  src={imageBorder}
                  className="py-2 border-image"
                  alt="border"
                />
              </div>
              <div className="text-center fs-6">
                Our team has helped 10,000+ entrepreneurs launch their
                businesses worldwide. As a full-service company, we guide and
                support our customers. Furthermore, we are committed to
                empowering women, which is why we also support their
                development.
              </div>
              {Bloglist.slice(0, showAll ? Bloglist.length : 3).map(
                (item, index) => (
                  <Col xs={12} sm={6} md={4} key={index} className="py-5">
                    <Card
                      className="them-borderradius theme-shadow m-2 bloglist"
                      style={{ aspectRatio: "10/15" }}
                    >
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="card-radius"
                        style={{ aspectRatio: "10/6" }}
                      />
                      <Card.Body>
                        <Card.Text className="text-center">
                          {item.description}
                        </Card.Text>
                      </Card.Body>

                      <Card
                        className="border-0"
                        style={{
                          background: "#F9F9F9",
                          borderRadius: "0 0 30px 30px",
                          aspectRatio: "10/7",
                        }}
                      >
                        <Card.Body>
                          <div className="d-flex align-items-center mb-3">
                            <img
                              src={item.review_profile_image}
                              className="rounded-circle mr-3"
                              style={{ width: "60px", height: "60px" }}
                              alt={item.review_name}
                            />
                            <div className="mx-3">
                              <strong>{item.review_name}</strong>
                              <div className="text-muted">
                                Reviewed on:{" "}
                                {new Date(
                                  item.review_date
                                ).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <p>'{item.review_description}'</p>
                        </Card.Body>
                      </Card>
                    </Card>
                  </Col>
                )
              )}

              {Bloglist.length > 3 && (
                <div className="text-center my-3">
                  <button
                    variant="danger"
                    onClick={() => setShowAll(!showAll)}
                    className="btn-red-to-black-color-move"
                  >
                    <span>{showAll ? "Show Less" : "View More"}</span>
                  </button>
                </div>
              )}
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
