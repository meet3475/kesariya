import React, { useEffect, useState } from "react";
import FirstImage from "../../components/productcomponents/FirstImage";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import { Container, Row, Col, Form, button } from "react-bootstrap";
import { ReachusForm } from "../../components/homecomponents/ReachusForm";
import axios from "axios";
import { ALL_PAGE_SEO_API, CONTACTSPAGE_API } from "../../config/config";
import Loader from "../../components/loaderspinnercomponents/Loader";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import { Helmet } from "react-helmet";

export const Contectus = () => {
  const [contectpagebanner, setContectpagebanner] = useState([]);
  const [contectinformation, setContectinformation] = useState([]);
  const [mapUrl, setMapUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(CONTACTSPAGE_API);

      if (response.data.DATA) {
        setContectpagebanner(response.data.DATA[0].data[0].image);
        setContectinformation(response.data.DATA[1].data);
        setMapUrl(response.data.DATA[2].data[0].Map_Url);
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

  const [seoData, setSeoData] = useState([]);

  const seofetchData = async () => {
    try {
      const response = await axios.get(ALL_PAGE_SEO_API);
      if (response) {
        setSeoData(response.data.DATA[4].meta);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
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
          <FirstImage image={contectpagebanner} />
          <Breadcrumb
            breadcrumbTitle="Contact us"
            breadcrumbNav={[
              {
                navText: "Home",
                path: "/",
              },
            ]}
          />
          <div className="Aboutus-main py-4">
            <Helmet>
              <meta charSet="utf-8" />
              <title>
                {seoData?.meta_title ||
                  "Contact Us: Kesaria Textile Company ~ Surat"}
              </title>
              <link
                rel="canonical"
                href={`${
                  window.location.hostname == "localhost" ? "http" : "https"
                }://${window.location.host}/contact-us/`}
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
                  "Leading Saree Manufacturer In Surat."
                }
                // content={
                //   seoData?.meta_keyword ||
                //   "Leading Saree Manufacturer In Surat."
                // }
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
                  "Contact Us: Kesaria Textile Company ~ Surat"
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
                }://${window.location.host}/contact-us/`}
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
                  "Contact Us: Kesaria Textile Company ~ Surat"
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
                "@id": "https://kesariya.sridixtechnology.com/contact-us/",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com",
                    "position": 1,
                    "name": "Home",
                    "item": "https://kesariya.sridixtechnology.com",
                    "nextItem": "https://kesariya.sridixtechnology.com/contact-us/"
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com/contact-us/",
                    "position": 2,
                    "name": "Contact Us",
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
                  "@id": "https://kesariya.sridixtechnology.com/contact-us/",
                  "width": 512,
                  "height": 512,
                  "caption": "cropped-ktc-logo-1.webp"
                },
                "image": {
                  "@id": "https://kesariya.sridixtechnology.com/contact-us/"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://kesariya.sridixtechnology.com/contact-us/",
                "url": "https://kesariya.sridixtechnology.com/contact-us/",
                "name": "Contact Us: Kesaria Textile Company ~ Surat",
                "description": "Get connected to us & detail your current needs and what you may be interested in down the road. Our Sales Executive Number: +91-7969280022 | info.kesaria@kesariatextile.com",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://kesariya.sridixtechnology.com" },
                "breadcrumb": { "@id": "https://kesariya.sridixtechnology.com/contact-us/" },
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
            <Container className="pagemargin">
              <h1 className="text-center saree-heading">
                We love to meet new people
              </h1>
              <div className="d-flex flex-column align-items-center ">
                <img src={imageBorder} className="border-image" alt="border" />
              </div>
              <div className=" fs-5  text-center mb-2 px-lg-3 fs-sm-15">
                We Aim To Build Long Term Relationships With Our Partners. Get
                Connected To Us And Detail Your Current Needs And What You May
                Be Interested In Down The Road.
              </div>
              <Row>
                <Col sm={12} md={12} lg={6} xl={6} cl>
                  <h1 className="them-font">Contact Information</h1>
                  {contectinformation.map((info, index) => (
                    <div className="d-flex gap-2" key={index}>
                      <div className="p-2">
                        <img src={info.logo} alt={info.name} width={"40px"} />
                      </div>
                      <div>
                        <div className="text-danger fs-6 fw-bold them-font">
                          {info.name}
                        </div>
                        <div className="them-font fs-6">{info.description}</div>
                      </div>
                    </div>
                  ))}
                </Col>
                <ReachusForm h1text={"Reach to Us"} />
              </Row>
            </Container>
          </div>
          <Container>
            <Row>
              <Col>
                <div className="my-5">
                  <div
                    className="them-border theme-shadow"
                    style={{ borderRadius: "30px", overflow: "hidden" }}
                    dangerouslySetInnerHTML={{ __html: mapUrl }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
