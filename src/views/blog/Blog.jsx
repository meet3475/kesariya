import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import FirstImage from "../../components/productcomponents/FirstImage";
import BlogList from "../../components/blogcomponents/BlogAllBlogsSec";
import { BlogZeroHero } from "../../components/blogcomponents/BlogZeroToHeroSec";
import Blogslider from "../../components/blogcomponents/BlogSlider";
import { Blogretailreview } from "../../components/blogcomponents/BlogRetailReview";
import { ManufacturerCard } from "../../components/homecomponents/ManuFacturerCard";
import { BlogOwnStorySec } from "../../components/blogcomponents/BlogOwnStorySec";
import axios from "axios";
import { BLOG_API } from "../../config/config";
import Loader from "../../components/loaderspinnercomponents/Loader";
import { Helmet } from "react-helmet";

export const Blog = () => {
  const [BlogBenner, setBlogBenner] = useState([]);
  const [Bloglist, setBloglist] = useState([]);
  const [BlogSlider, setBlogSlider] = useState([]);
  const [Blogreview, setBlogreview] = useState([]);
  const [counter, setCounter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);


  const fetchBlogData = async (page) => {
    setLoading(true);
    try {
      const response = await axios.post(BLOG_API, {
        page,
      });
      if (response.data.DATA) {
        setBlogBenner(response.data.DATA[0].data[0].image);
        setBloglist(response.data.DATA[1].data.data);
        setTotalPages(response.data.DATA[1].data.last_page);
        setCurrentPage(response.data.DATA[1].data.current_page);
        setBlogSlider(response.data.DATA[2].data);
        setBlogreview(response.data.DATA[3].data);
        setCounter(response.data.Total_Count);
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
    fetchBlogData(currentPage);
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    fetchBlogData(value);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Loader />
        </div>
      ) : (
        <div className="blog-page py-lg-5">
          <FirstImage image={BlogBenner} />
          <Breadcrumb
            breadcrumbTitle="Blogs"
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
              Kesaria Textile Blog | Know About Textile Manufacturers &
              Wholesalers
            </title>
            <meta
              name="description"
              content="Check here latest & updated textile manufacturers & wholesalers information. Our experts share some tips about buying & selling about our products."
            />
            <link
              rel="canonical"
              // href="https://kesariya.sridixtechnology.com/blog/"
              href={`${
                window.location.hostname == "localhost" ? "http" : "https"
              }://${window.location.host}/blog/`}
            />

            <meta property="og:locale" content="en_US" />
            <meta
              property="og:site_name"
              content="Kesaria Textile Company | Fashion is King"
            />
            <meta
              property="og:title"
              content="Kesaria Textile Blog | Know About Textile Manufacturers & Wholesalers"
            />
            <meta property="og:type" content="article" />
            <meta
              name="description"
              property="og:description"
              content="Check here latest & updated textile manufacturers & wholesalers information. Our experts share some tips about buying & selling about our products."
            />
            <meta
              property="og:url"
              // content="https://kesariya.sridixtechnology.com/blog/"
              content={`${
                window.location.hostname == "localhost" ? "http" : "https"
              }://${window.location.host}/blog/`}
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
              content="Kesaria Textile Blog | Know About Textile Manufacturers & Wholesalers"
            />
            <meta
              name="twitter:description"
              content="Check here latest & updated textile manufacturers & wholesalers information. Our experts share some tips about buying & selling about our products."
            />

            <script type="application/ld+json">
              {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https://kesariya.sridixtechnology.com/blog/",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com",
                    "position": 1,
                    "name": "Home",
                    "item": "https://kesariya.sridixtechnology.com",
                    "nextItem": "https://kesariya.sridixtechnology.com/blog/"
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com/blog/",
                    "position": 2,
                    "name": "Blog",
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
                  "@id": "https://kesariya.sridixtechnology.com/blog/",
                  "width": 512,
                  "height": 512,
                  "caption": "cropped-ktc-logo-1.webp"
                },
                "image": {
                  "@id": "https://kesariya.sridixtechnology.com/blog/"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://kesariya.sridixtechnology.com/blog/",
                "url": "https://kesariya.sridixtechnology.com/blog/",
                "name": "Kesaria Textile Blog | Know About Textile Manufacturers & Wholesalers",
                "description": "Check here latest & updated textile manufacturers & wholesalers information. Our experts share some tips about buying & selling about our products.",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://kesariya.sridixtechnology.com/" },
                "breadcrumb": { "@id": "https://kesariya.sridixtechnology.com/blog/" },
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

          <BlogList
            blogpageData={Bloglist}
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
          <BlogZeroHero counter={counter} />
          <Blogslider data={BlogSlider} />
          <BlogOwnStorySec />
          <Blogretailreview reviewdata={Blogreview} />
          <ManufacturerCard />
          <div className="mb-3 mb-md-0"></div>
        </div>
      )}
    </>
  );
};
