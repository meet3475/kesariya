import React, { useState, useEffect } from "react";
import FirstImage from "../../components/productcomponents/FirstImage";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { PRIVANCYPOLICY_API } from "../../config/config";
import Loader from "../../components/loaderspinnercomponents/Loader";
import { Helmet } from "react-helmet";

export const PrivacyPolicy = () => {
  const [privacypolicybanner, setPrivacypolicybanner] = useState("");
  const [privacyPolicyContent, setPrivacyPolicyContent] = useState("");

  const fetchPrivecypolicyData = async () => {
    try {
      const response = await axios.post(PRIVANCYPOLICY_API);
      console.log("privacy", response.data);
      if (response.data.DATA) {
        setPrivacypolicybanner(response.data.DATA[0].data[0].image);
        setPrivacyPolicyContent(response.data.DATA[1].data[0].description);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching product detail data:", error);
    }
  };

  useEffect(() => {
    fetchPrivecypolicyData();
  }, []);
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
          <FirstImage image={privacypolicybanner} />
          <Breadcrumb
            breadcrumbTitle="Privacy Policy"
            breadcrumbNav={[
              {
                navText: "Home",
                path: "/",
              },
            ]}
          />
          <Container className="p-3 pagemargin">
            <Helmet>
              <meta charSet="utf-8" />
              <title>Privacy Policy | Kesaria Textile Company</title>
              <meta
                name="description"
                content="When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, add..."
              />
              <meta property="og:locale" content="en_US" />
              <meta
                property="og:site_name"
                content="Kesaria Textile Company | Fashion is King"
              />
              <meta
                property="og:title"
                content="Privacy Policy | Kesaria Textile Company"
              />
              <meta property="og:type" content="article" />
              <meta
                name="description"
                property="og:description"
                content="When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, add..."
              />
              <meta
                property="og:url"
                content={`${
                  window.location.hostname == "localhost" ? "http" : "https"
                }://${window.location.host}/privacy-policy-2/`}
              />
              <meta
                property="article:published_time"
                content="2022-01-13T12:55:34+00:00"
              />
              <meta
                property="article:modified_time"
                content="2024-05-24T10:56:44+00:00"
              />
              <meta name="twitter:card" content="summary" />
              <meta
                name="twitter:title"
                content="Privacy Policy | Kesaria Textile Company"
              />
              <meta
                name="twitter:description"
                content="When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, add..."
              />
              <link
                rel="canonical"
                href={`${
                  window.location.hostname == "localhost" ? "http" : "https"
                }://${window.location.host}/privacy-policy-2/`}
              />
              <script type="application/ld+json">
                {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https:/kesariya.sridixtechnology.com/privacy-policy-2/#breadcrumblist",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "@id": "https:/kesariya.sridixtechnology.com/#listItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https:/kesariya.sridixtechnology.com/",
                    "nextItem": "https:/kesariya.sridixtechnology.com/privacy-policy-2/#listItem"
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https:/kesariya.sridixtechnology.com/privacy-policy-2/#listItem",
                    "position": 2,
                    "name": "Privacy Policy",
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
                  "@id": "https:/kesariya.sridixtechnology.com/privacy-policy-2/#organizationLogo",
                  "width": 512,
                  "height": 512,
                  "caption": "cropped-ktc-logo-1.webp"
                },
                "image": {
                  "@id": "https:/kesariya.sridixtechnology.com/privacy-policy-2/#organizationLogo"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https:/kesariya.sridixtechnology.com/privacy-policy-2/#webpage",
                "url": "https:/kesariya.sridixtechnology.com/privacy-policy-2/",
                "name": "Privacy Policy | Kesaria Textile Company",
                "description": "When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, add...",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https:/kesariya.sridixtechnology.com/#website" },
                "breadcrumb": { "@id": "https:/kesariya.sridixtechnology.com/privacy-policy-2/#breadcrumblist" },
                "datePublished": "2022-01-13T12:55:34+05:30",
                "dateModified": "2024-05-24T16:26:44+05:30"
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
              <Col lg={12} className="mb-4 them-font text-justify">
                <div
                  className="privacy-policy-content"
                  dangerouslySetInnerHTML={{ __html: privacyPolicyContent }}
                ></div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
