import React, { useState, useEffect } from "react";
import FirstImage from "../../components/productcomponents/FirstImage";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { BiPhoneCall } from "react-icons/bi";
import { ALL_PAGE_SEO_API, ENQUIRY_API } from "../../config/config";
import axios from "axios";
import Loader from "../../components/loaderspinnercomponents/Loader";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import enqimg from "../../assets/images/enquiryimg.webp";
import { useParams } from "react-router-dom";
import EnquiryPageForm from "./EnquiryPageForm";
// import EnquiryForm from "./EnquiryForm";
// import EnquiryPageForm from "./enquirypageform";

export const Enquiry = () => {
  const { name } = useParams();
  const [enquiryBanner, setEnquiryBanner] = useState("");
  const [loading, setLoading] = useState(false);
  const [EnqLangugeData, setEnqLangugeData] = useState({});
  const fetchEnquiryData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(ENQUIRY_API);
      // console.log("enquiry111", response.data);
      if (response.data.DATA) {
        const bannerImage = response.data.DATA.bannerData.image;
        setEnquiryBanner(bannerImage);
        const languageData = response.data.DATA.languageData;
        const matchedLanguage = languageData.find(
          (lang) => lang.language === name
        );

        if (matchedLanguage) {
          setEnqLangugeData(matchedLanguage);
          // console.log("matchedLanguage::", matchedLanguage);
        } else {
          console.error(`No language data found for name: ${name}`);
        }
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  const [seoData, setSeoData] = useState([]);

  const seofetchData = async () => {
    try {
      const response = await axios.get(ALL_PAGE_SEO_API);
      if (response) {
        setSeoData(response.data.DATA[3].meta);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchEnquiryData();
    seofetchData();
  }, [name]);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Loader />
        </div>
      ) : (
        <>
          <FirstImage image={enquiryBanner} />
          <Breadcrumb
            breadcrumbTitle="Enquiry Page"
            breadcrumbNav={[{ navText: "Home", path: "/" }]}
          />
          <Container className="pagemargin p-3 ">
            <Helmet>
              <meta charSet="utf-8" />
              <title>
                {seoData?.meta_title ||
                  "Enquiry : Kesaria Textile Company ~ Surat"}
              </title>
              <link
                rel="canonical"
                href={`${
                  window.location.hostname == "localhost" ? "http" : "https"
                }://${window.location.host}/enquiry-ktc/`}
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
                  seoData?.meta_keyword ||
                  "Leading Saree Manufacturer In Surat."
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
                  "Enquiry : Kesaria Textile Company ~ Surat"
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
                }://${window.location.host}/enquiry-ktc/`}
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
                  "Enquiry : Kesaria Textile Company ~ Surat"
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
                "@id": "https://kesariya.sridixtechnology.com/enquiry-ktc/",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com",
                    "position": 1,
                    "name": "Home",
                    "item": "https://kesariya.sridixtechnology.com",
                    "nextItem": "https://kesariya.sridixtechnology.com/enquiry-ktc/"
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com/enquiry-ktc/",
                    "position": 2,
                    "name": "Enquiry",
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
                  "@id": "https://kesariya.sridixtechnology.com/enquiry-ktc/",
                  "width": 512,
                  "height": 512,
                  "caption": "cropped-ktc-logo-1.webp"
                },
                "image": {
                  "@id": "https://kesariya.sridixtechnology.com/enquiry-ktc/"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://kesariya.sridixtechnology.com/enquiry-ktc/",
                "url": "https://kesariya.sridixtechnology.com/enquiry-ktc/",
                "name": "Enquiry : Kesaria Textile Company ~ Surat",
                "description": "Get connected to us & detail your current needs and what you may be interested in down the road. Our Sales Executive Number: +91-7969280022 | info.kesaria@kesariatextile.com",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://kesariya.sridixtechnology.com" },
                "breadcrumb": { "@id": "https://kesariya.sridixtechnology.com/enquiry-ktc/" },
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
            <div
              className="rounded-5 border border-dark theme-shadow"
              style={{ overflow: "hidden", aspectRatio: "19/8" }}
            >
              <video
                autoPlay
                unmuted
                loop
                controls
                preload="none"
                style={{
                  height: "-webkit-fill-available",
                  width: "-webkit-fill-available",
                  objectFit: "fill",
                }}
              >
                <source
                  src={
                    EnqLangugeData?.videoUrl ||
                    "https://kesariya.sridixtechnology.com/admin/videos/Hindivideo1.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </div>
          </Container>
          <div className="enquire-bg">
            <Container className="enquire-container">
              <Row>
                <Col lg={6} className="enquire-form">
                  <h2>Enquire Now</h2>
                  <EnquiryPageForm EnqLangugeData={EnqLangugeData} />
                </Col>

                <Col lg={6} className="enquire-image">
                  <img src={enqimg} alt="Enquire" className="img-fluid" />
                  <div className="red-img">
                    <BiPhoneCall className="text-light call-icon" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
    </>
  );
};
