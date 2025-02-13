import React, { useState, useEffect } from "react";
import FirstImage from "../../components/productcomponents/FirstImage";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import { Container, Row, Col, Card, Collapse } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import axios from "axios";
import { FAQ_API } from "../../config/config";
import Loader from "../../components/loaderspinnercomponents/Loader";
import { Helmet } from "react-helmet";

export const Faq = () => {
  const [faqbanner, setFaqbanner] = useState("");
  const [faqinfo, setFaqinfo] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  const fetchFaqData = async () => {
    try {
      const response = await axios.post(FAQ_API);

      if (response.data.DATA) {
        const bannerImage = response.data.DATA[0].data[0].image;
        const faqList = response.data.DATA[1].data;

        setFaqbanner(bannerImage);
        setFaqinfo(faqList);
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
    fetchFaqData();
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Loader />
        </div>
      ) : (
        <>
          <FirstImage image={faqbanner} />
          <Breadcrumb
            breadcrumbTitle="Faq"
            breadcrumbNav={[
              {
                navText: "Home",
                path: "/",
              },
            ]}
          />
          <Container>
            <Helmet>
              <meta charSet="utf-8" />
              <title>
                FAQ | Kesaria Textile Company | KTC | Fashion is King
              </title>
              <meta
                name="description"
                content="Here are some common questions about KTC Fashion How many Saree designs? We have 10,000+ beautiful saree designs and adding more every day to our colle..."
              />
              <meta property="og:locale" content="en_US" />
              <meta
                property="og:site_name"
                content="Kesaria Textile Company | Fashion is King"
              />
              <meta
                property="og:title"
                content="FAQ | Kesaria Textile Company | KTC | Fashion is King"
              />
              <meta property="og:type" content="article" />
              <meta
                name="description"
                property="og:description"
                content="FAQ - Here are some common questions about KTC Fashion How many Saree designs? We have 10,000+ beautiful saree designs and adding more every day to our colle..."
              />
              <meta
                property="og:url"
                content={`${
                  window.location.hostname == "localhost" ? "http" : "https"
                }://${window.location.host}/faq/`}
              />
              <meta
                property="article:published_time"
                content="2015-09-07T08:56:06+00:00"
              />
              <meta
                property="article:modified_time"
                content="2024-05-22T08:40:10+00:00"
              />
              <meta name="twitter:card" content="summary" />
              <meta
                name="twitter:title"
                content="FAQ | Kesaria Textile Company | KTC | Fashion is King"
              />
              <meta
                name="twitter:description"
                content="FAQ - Here are some common questions about KTC Fashion How many Saree designs? We have 10,000+ beautiful saree designs and adding more every day to our colle..."
              />
              <link
                rel="canonical"
                href={`${
                  window.location.hostname == "localhost" ? "http" : "https"
                }://${window.location.host}/faq/`}
              />
              <script type="application/ld+json">
                {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https:/kesariya.sridixtechnology.com/faq/#breadcrumblist",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "@id": "https:/kesariya.sridixtechnology.com/#listItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https:/kesariya.sridixtechnology.com/",
                    "nextItem": "https:/kesariya.sridixtechnology.com/faq/#listItem"
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https:/kesariya.sridixtechnology.com/faq/#listItem",
                    "position": 2,
                    "name": "FAQ",
                    "previousItem": "https:/kesariya.sridixtechnology.com/#listItem"
                  }
                ]
              },
              {
                "@type": "Organization",
                "@id": "https:/kesariya.sridixtechnology.com/#organization",
                "name": "Keasria Textile Company",
                "description": "Fashion is King",
                "url": "https:/kesariya.sridixtechnology.com/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https:/kesariya.sridixtechnology.com/wp-content/uploads/2022/01/cropped-ktc-logo-1.webp",
                  "@id": "https:/kesariya.sridixtechnology.com/faq/#organizationLogo",
                  "width": 512,
                  "height": 512,
                  "caption": "cropped-ktc-logo-1.webp"
                },
                "image": {
                  "@id": "https:/kesariya.sridixtechnology.com/faq/#organizationLogo"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https:/kesariya.sridixtechnology.com/faq/#webpage",
                "url": "https:/kesariya.sridixtechnology.com/faq/",
                "name": "FAQ | Kesaria Textile Company | KTC | Fashion is King",
                "description": "FAQ - Here are some common questions about KTC Fashion How many Saree designs? We have 10,000+ beautiful saree designs and adding more every day to our colle...",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https:/kesariya.sridixtechnology.com/#website" },
                "breadcrumb": { "@id": "https:/kesariya.sridixtechnology.com/faq/#breadcrumblist" },
                "datePublished": "2015-09-07T08:56:06+05:30",
                "dateModified": "2024-05-22T14:10:10+05:30"
              },
              {
                "@type": "WebSite",
                "@id": "https:/kesariya.sridixtechnology.com/#website",
                "url": "https:/kesariya.sridixtechnology.com/",
                "name": "Kesaria Textile Company",
                "description": "Fashion is King",
                "inLanguage": "en-US",
                "publisher": { "@id": "https:/kesariya.sridixtechnology.com/#organization" }
              }
            ]
          }
          `}
              </script>
            </Helmet>
            <Row>
              <Col>
                <div className="pagemargin py-2">
                  <h1 className="fs-3 them-font text-danger  text-start py-2 fw-bolder">
                    Here are some common questions about Kesaria Textile Company
                  </h1>
                  {faqinfo.map((item, index) => (
                    <Card
                      key={index}
                      className="mb-3 p-2 rounded-5"
                      style={{
                        boxShadow: "3px 3px 1px 1px",
                        background: "#F9F9F9",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        className="d-flex justify-content-between align-items-center p-2"
                        onClick={() => handleToggle(index)}
                        aria-controls={`example-collapse-text-${index}`}
                        aria-expanded={openIndex === index}
                      >
                        <h3 className="fw-bolder them-font fs-5">
                          {item.question}
                        </h3>
                        <div>
                          {openIndex === index ? (
                            <IoIosArrowUp />
                          ) : (
                            <IoIosArrowDown />
                          )}
                        </div>
                      </div>
                      <Collapse in={openIndex === index}>
                        <div
                          className="p-3 fs-6 them-font"
                          id={`example-collapse-text-${index}`}
                          style={{
                            maxHeight: openIndex === index ? "500px" : "0px",
                            overflow: "hidden",
                            transition:
                              "max-height 0s ease-in-out, padding 0.4s ease-in-out",
                            padding: openIndex === index ? "12px" : "0px",
                          }}
                        >
                          {item.answer}
                        </div>
                      </Collapse>
                    </Card>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
