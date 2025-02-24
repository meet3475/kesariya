import React, { useEffect, useState } from "react";
// import Breadcrumb from "../../components/breadcrumb/breadcumb";
// import FirstImage from "../../components/productcomponent/firstimage";
// import { AboutusSec } from "../../components/aboutuscomponents/Firstsec";
// import { Founder } from "../../components/aboutuscomponents/Founder";
// import { OwnClothingCard } from "../../components/homecomponant/ownClothingCard";
// import { ManufacturerCard } from "../../components/homecomponant/manufacturerCard";
import { Col, Container, Row } from "react-bootstrap";
import finishimgresponsive from "../../assets/images/responsiveimg.webp";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import manubg from "../../assets/images/aboutusmanubgimg.webp";
import { ABOUTUS_API, ALL_PAGE_SEO_API, HOME_API } from "../../config/config";
import axios from "axios";
// import Loader from "../../components/loaderspinner/loader";
import finishimg from "../../assets/images/finish1img.webp";
import { Helmet } from "react-helmet";
import Loader from "../../components/loaderspinnercomponents/Loader";
import FirstImage from "../../components/productcomponents/FirstImage";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import { OwnClothingCard } from "../../components/homecomponents/OwnClothingCard";
import { ManufacturerCard } from "../../components/homecomponents/ManuFacturerCard";
import { Founder }from "../../components/aboutuscomponents/Founder";
import { AboutusSec } from "../../components/aboutuscomponents/FirstSec";

export const Aboutus = () => {
  const [aboutbanner, setAboutbanner] = useState([]);
  const [aboutuslist, setAboutuslist] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBlogData = async () => {
    setLoading(true)
    try {
      const response = await axios.post(ABOUTUS_API);
      if (response.data.DATA) {
        setAboutbanner(response.data.DATA[0].data[0].image);
        setAboutuslist(response.data.DATA[1].data[0]);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    finally {
      setTimeout(() => {
        setLoading(false);
    }, 1000);
    }
  };

  const [ownClothingCard, setOwnClothingCard] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post(HOME_API);
      if (response.data.DATA) {
        setOwnClothingCard(response.data.DATA[3].data);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [seoData, setSeoData] = useState([]);

  const seofetchData = async () => {
    try {
      const response = await axios.get(ALL_PAGE_SEO_API);
      if (response) {
        setSeoData(response.data.DATA[2].meta);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchBlogData();
    seofetchData();
  }, []);

  return (
    <>
      <div className="app-container py-lg-5">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Loader />
          </div>
        ) : (
          <>
            <FirstImage image={aboutbanner} />
            <Breadcrumb
              breadcrumbTitle="AboutUs"
              breadcrumbNav={[
                {
                  navText: "Home",
                  path: "/",
                },
              ]}
            />
            <Helmet>
              <meta charSet="utf-8" />
              <title>
                {seoData?.meta_title ||
                  "About Us | Kesaria Textile Company ~ Top Textile Company In Surat"}
              </title>
              <link
                rel="canonical"
                href={`${window.location.hostname == "localhost" ? "http" : "https"}://${window.location.host}/about/`}
              />
              <meta
                name="description"
                content={
                  seoData?.meta_description ||
                  "Kesaria textiles is one of the leading manufacturer, exporter, wholesalers and dealers of high quality & best rated textile company in Surat."
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
                  "About Us | Kesaria Textile Company ~ Top Textile Company In Surat"
                }
              />
              <meta property="og:type" content="article" />
              <meta
                name="description"
                property="og:description"
                content={
                  seoData?.meta_description ||
                  "Kesaria textiles is one of the leading manufacturer, exporter, wholesalers and dealers of high quality & best rated textile company in Surat."
                }
              />
              <meta
                property="og:url"
                content= {`${window.location.hostname == "localhost" ? "http" : "https"}://${window.location.host}/about/`}
              />
              <meta
                property="article:published_time"
                content="2016-07-18T03:29:30+00:00"
              />
              <meta
                property="article:modified_time"
                content="2024-05-22T08:21:32+00:00"
              />
              <meta name="twitter:card" content="summary" />
              <meta
                name="twitter:title"
                content={
                  seoData?.meta_title ||
                  "About Us | Kesaria Textile Company ~ Top Textile Company In Surat"
                }
              />
              <meta
                name="twitter:description"
                content={
                  seoData?.meta_description ||
                  "Kesaria textiles is one of the leading manufacturer, exporter, wholesalers and dealers of high quality & best rated textile company in Surat."
                }
              />

              <script type="application/ld+json">
                {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https://kesariya.sridixtechnology.com/about/",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com",
                    "position": 1,
                    "name": "Home",
                    "item": "https://kesariya.sridixtechnology.com",
                    "nextItem": "https://kesariya.sridixtechnology.com/about/"
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com/about/",
                    "position": 2,
                    "name": "About",
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
                  "@id": "https://kesariya.sridixtechnology.com/about/",
                  "width": 512,
                  "height": 512,
                  "caption": "cropped-ktc-logo-1.webp"
                },
                "image": {
                  "@id": "https://kesariya.sridixtechnology.com/about/"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://kesariya.sridixtechnology.com/about/",
                "url": "https://kesariya.sridixtechnology.com/about/",
                "name": "About Us | Kesaria Textile Company ~ Top Textile Company In Surat",
                "description": "Kesaria textiles is one of the leading manufacturer, exporter, wholesalers and dealers of high quality & best rated textile company in Surat.",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://kesariya.sridixtechnology.com" },
                "breadcrumb": { "@id": "https://kesariya.sridixtechnology.com/about/" },
                "datePublished": "2016-07-18T08:59:30+05:30",
                "dateModified": "2024-05-22T13:51:32+05:30"
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
            <AboutusSec aboutuslist={aboutuslist} />
            <Founder />
            <OwnClothingCard ImageData={ownClothingCard} />
            <div style={{ backgroundImage: `url(${manubg})` }} className="py-4">
              <Container>
                <Row>
                  <Col>
                    <h1 className="text-center them-font mt-3">
                      Our Manufacturer
                    </h1>
                    <div className="d-flex justify-content-center">
                      <img
                        src={imageBorder}
                        className="pb-3 pt-1 border-image"
                        alt="border"
                      />
                    </div>
                    <div className="d-none d-md-block">
                      <img
                        src={finishimg}
                        className="w-100 h-100"
                        alt="Finish Image"
                      />
                    </div>
                    <div className="d-md-none">
                      <img
                        src={finishimgresponsive}
                        className="w-100 h-100"
                        alt="Responsive Finish Image"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <ManufacturerCard />
          </>
        )}
      </div>
    </>
  );
};
