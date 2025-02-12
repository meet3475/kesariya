import React, { useEffect, useState } from "react";
import FirstImage from "../../components/productcomponents/FirstImage";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import Container from "react-bootstrap/Container";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import {
  ALL_PAGE_SEO_API,
  CONTRYCODE_API,
  MARKETAREA_API,
} from "../../config/config";
import axios from "axios";
import DataSection from "./MarketData";
import Loader from "../../components/loaderspinnercomponents/Loader";
import { Helmet } from "react-helmet";

export const MarketArea = () => {
  const [dataSections, setDataSections] = useState([]);
  const [marketareabanner, setMarketareabanner] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchMarketAreaData = async () => {
    try {
      const response = await axios.post(MARKETAREA_API);
      if (response.data.DATA) {
        setMarketareabanner(response.data.DATA[0]?.data[0]?.image || "");
        const sections = response.data.DATA[1];
        setDataSections(sections);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching market area data:", error);
    }
  };

  const [seoData, setSeoData] = useState([]);

  const seofetchData = async () => {
    try {
      const response = await axios.get(ALL_PAGE_SEO_API);
      if (response) {
        setSeoData(response.data.DATA[5].meta);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMarketAreaData();
    seofetchData();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
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
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              {seoData?.meta_title ||
                "Market Area : Kesaria Textile Company ~ Surat"}
            </title>
            <link
              rel="canonical"
              href= {`${window.location.hostname == "localhost" ? "http" : "https"}://${window.location.host}/market-area/`}
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
                "Market Area : Kesaria Textile Company ~ Surat"
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
              content= {`${window.location.hostname == "localhost" ? "http" : "https"}://${window.location.host}/market-area/`}

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
                "Market Area : Kesaria Textile Company ~ Surat"
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
                "@id": "https://kesariya.sridixtechnology.com/market-area/",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com",
                    "position": 1,
                    "name": "Home",
                    "item": "https://kesariya.sridixtechnology.com",
                    "nextItem": "https://kesariya.sridixtechnology.com/market-area/"
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com/market-area/",
                    "position": 2,
                    "name": "Market area",
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
                  "@id": "https://kesariya.sridixtechnology.com/market-area/",
                  "width": 512,
                  "height": 512,
                  "caption": "cropped-ktc-logo-1.webp"
                },
                "image": {
                  "@id": "https://kesariya.sridixtechnology.com/market-area/"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://kesariya.sridixtechnology.com/market-area/",
                "url": "https://kesariya.sridixtechnology.com/market-area/",
                "name": "Market Area : Kesaria Textile Company ~ Surat",
                "description": "Get connected to us & detail your current needs and what you may be interested in down the road. Our Sales Executive Number: +91-7969280022 | info.kesaria@kesariatextile.com",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://kesariya.sridixtechnology.com" },
                "breadcrumb": { "@id": "https://kesariya.sridixtechnology.com/market-area/" },
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
          <FirstImage image={marketareabanner} />
          <Breadcrumb
            breadcrumbTitle="Market Area"
            breadcrumbNav={[{ navText: "Home", path: "/" }]}
          />
          <Container className="pagemargin">
            <h1 className="text-center saree-heading pt-3"> Market Area</h1>
            <div className="d-flex justify-content-center">
              <img
                src={imageBorder}
                className="py-2 border-image"
                alt="border"
              />
            </div>
            <DataSection dataSections={dataSections} />
          </Container>
        </>
      )}
    </>
  );
};
