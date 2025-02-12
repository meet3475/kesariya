import React, { useEffect, useState, useRef } from "react";
import FirstImage from "../../components/productcomponents/FirstImage";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import { Careerfirstsec } from "../../components/careercomponents/CareerFirstSec";
import { Opportunitiessec } from "../../components/careercomponents/CareerOpportunitiesSec";
import axios from "axios";
import { CAREER_API } from "../../config/config";
import Loader from "../../components/loaderspinnercomponents/Loader";
import { Helmet } from "react-helmet";

export const Career = () => {
  const [careerBenner, setCareerBenner] = useState("");
  const [opportunitiesData, setOpportunitiesData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCareerData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(CAREER_API);
      if (response.data.DATA) {
        setCareerBenner(response.data.DATA[0].data[0].image || "");
        setOpportunitiesData(response.data.DATA[1].data || []);
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
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Loader />
        </div>
      ) : (
        <div className="py-lg-5">
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              Career | Kesaria Textile Company | KTC | Fashion is King
            </title>
            <link
              rel="canonical"
              href={`${
                window.location.hostname == "localhost" ? "http" : "https"
              }://${window.location.host}/career/`}
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
              }://${window.location.host}/career/`}
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
                "@id": "https://kesariya.sridixtechnology.com/career/",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com",
                    "position": 1,
                    "name": "Home",
                    "item": "https://kesariya.sridixtechnology.com",
                    "nextItem": "https://kesariya.sridixtechnology.com/career/"
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com/career/",
                    "position": 2,
                    "name": "Career",
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
                  "@id": "https://kesariya.sridixtechnology.com/career/",
                  "width": 512,
                  "height": 512,
                  "caption": "cropped-ktc-logo-1.webp"
                },
                "image": {
                  "@id": "https:/kesariya.sridixtechnology.com/career/"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://kesariya.sridixtechnology.com/career/",
                "url": "https://kesariya.sridixtechnology.com/career/",
                "name": "Career | Kesaria Textile Company | KTC | Fashion is King",
                "description": "Career in KTC. There are various career opening in Kesaria Textile Company right now like Digital Marketing Executive, Graphics Designer and Video Editor...",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://kesariya.sridixtechnology.com/" },
                "breadcrumb": { "@id": "https://kesariya.sridixtechnology.com/career/" },
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
          <FirstImage image={careerBenner} />
          <Breadcrumb
            breadcrumbTitle="Career"
            breadcrumbNav={[{ navText: "Home", path: "/" }]}
          />
          <Careerfirstsec />
          <Opportunitiessec data={opportunitiesData} />
        </div>
      )}
    </>
  );
};
