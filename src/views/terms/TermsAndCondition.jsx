import React, { useState, useEffect } from "react";
import FirstImage from "../../components/productcomponents/FirstImage";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { TERMANDCONDITION_API } from "../../config/config";
import Loader from "../../components/loaderspinnercomponents/Loader";
import { Helmet } from "react-helmet";

export const TermsAndCondition = () => {
  const [termandconditioninfo, setTermandconditioninfo] = useState([]);
  const [termandconditionbanner, setTermandconditionbanner] = useState("");

  const fetchTermAndConditionData = async () => {
    try {
      const response = await axios.post(TERMANDCONDITION_API);
      // console.log("term", response.data);

      if (response.data.DATA) {
        const bannerImage = response.data.DATA[0].data[0].image;
        const description = response.data.DATA[1].data[0].description;

        setTermandconditionbanner(bannerImage);
        setTermandconditioninfo([
          { id: 1, name: "Terms & Condition", description },
        ]);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTermAndConditionData();
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
          <FirstImage image={termandconditionbanner} />
          <Breadcrumb
            breadcrumbTitle="Terms & Condition"
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
              <title>
                Terms & Condition -Kesaria Textile Company | Fashion is King
              </title>
              <meta
                name="description"
                content="Terms & Condition of Kesaria Textile Company (KTC) are: The Website Owner, including subsidiaries and affiliates (“www.ktcfashion.com” or “Kesaria” or “we” o..."
              />
              <meta property="og:locale" content="en_US" />
              <meta
                property="og:site_name"
                content="Kesaria Textile Company | Fashion is King"
              />
              <meta
                property="og:title"
                content="Terms & Condition -Kesaria Textile Company | Fashion is King"
              />
              <meta property="og:type" content="article" />
              <meta
                name="description"
                property="og:description"
                content="Terms & Condition of Kesaria Textile Company (KTC) are: The Website Owner, including subsidiaries and affiliates (“www.ktcfashion.com” or “Kesaria” or “we” o...."
              />
              <meta
                property="og:url"
                // content="https:/kesariya.sridixtechnology.com/terms-condition/"
                content={`${
                  window.location.hostname == "localhost" ? "http" : "https"
                }://${window.location.host}/terms-condition/`}
              />
              <meta
                property="article:published_time"
                content="2016-06-21T15:10:26+00:00"
              />
              <meta
                property="article:modified_time"
                content="2024-05-22T08:26:57+00:00"
              />
              <meta name="twitter:card" content="summary" />
              <meta
                name="twitter:title"
                content="Terms & Condition -Kesaria Textile Company | Fashion is King"
              />
              <meta
                name="twitter:description"
                content="Terms & Condition of Kesaria Textile Company (KTC) are: The Website Owner, including subsidiaries and affiliates (“www.ktcfashion.com” or “Kesaria” or “we” o...."
              />
              <link
                rel="canonical"
                // href="https:/kesariya.sridixtechnology.com/terms-condition/"
                href={`${
                  window.location.hostname == "localhost" ? "http" : "https"
                }://${window.location.host}/terms-condition/`}
              />
              <script type="application/ld+json">
                {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https:/kesariya.sridixtechnology.com/terms-condition/#breadcrumblist",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "@id": "https:/kesariya.sridixtechnology.com/#listItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https:/kesariya.sridixtechnology.com/",
                    "nextItem": "https:/kesariya.sridixtechnology.com/terms-condition/#listItem"
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https:/kesariya.sridixtechnology.com/terms-condition/#listItem",
                    "position": 2,
                    "name": "Terms & Condition",
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
                  "@id": "https:/kesariya.sridixtechnology.com/terms-condition/#organizationLogo",
                  "width": 512,
                  "height": 512,
                  "caption": "cropped-ktc-logo-1.webp"
                },
                "image": {
                  "@id": "https:/kesariya.sridixtechnology.com/terms-condition/#organizationLogo"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https:/kesariya.sridixtechnology.com/terms-condition/#webpage",
                "url": "https:/kesariya.sridixtechnology.com/terms-condition/",
                "name": "Terms & Condition -Kesaria Textile Company | Fashion is King",
                "description": "Terms & Condition of Kesaria Textile Company (KTC) are: The Website Owner, including subsidiaries and affiliates (‘www.ktcfashion.com’ or ‘Kesaria’ or ‘we’ or ‘our’) ...",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https:/kesariya.sridixtechnology.com/#website" },
                "breadcrumb": { "@id": "https:/kesariya.sridixtechnology.com/terms-condition/#breadcrumblist" },
                "datePublished": "2016-06-21T15:10:26+05:30",
                "dateModified": "2024-05-22T13:56:57+05:30"
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
                {termandconditioninfo.map((section, index) => (
                  <div key={section.id}>
                    <div
                      className="fs-11"
                      dangerouslySetInnerHTML={{ __html: section.description }}
                    />
                  </div>
                ))}
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
