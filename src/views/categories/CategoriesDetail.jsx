import OrderProcess from "../../components/productcomponents/OrderProcess";
import SilkCotton from "../../components/productcomponents/SilkCotton";
import FirstImage from "../../components/productcomponents/FirstImage";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { CATEGORIE_DETAIL_API } from "../../config/config";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import { IntrestedProductSlider } from "../../components/productcomponents/IntrestedProductSlider";
import { Helmet } from "react-helmet";
import Loader from "../../components/loaderspinnercomponents/Loader";

const CategoriesDetailpage = ({ selectedLocation }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const [CategorydetailintrestedPro, setCategorydetailintrestedPro] = useState([]);
  const [CategorydetailBaner, setCategorydetailBaner] = useState([]);
  const [CategorydetailInfo, setCategorydetailInfo] = useState([]);
  const [breadcrumbname, setBreadcrumbname] = useState("");

  // const { id = 0, from } = location?.state || {};
  // console.log("id::", location?.state);

  const { subCategoryName } = useParams();

  const FetchCategoryDetailData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(CATEGORIE_DETAIL_API, {
        // category_id: location?.state?.id,
        category_name: subCategoryName.replace(/-/g, " ").replace(/~/g, "-"),
      });

      // console.log("---------------", response);

      const data = response?.data?.DATA;
      setCategorydetailBaner(data[0].data[0].image);
      setBreadcrumbname(data[1].category_label);
      setCategorydetailInfo({ ...(data[1].data || {}) });
      setCategorydetailintrestedPro(data[2].data || {});
    } catch (error) {
      console.log("error", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    console.log(
      "subCategoryName::",
      subCategoryName.replace(/-/g, " ").replace(/~/g, "-")
    );
    FetchCategoryDetailData();
  }, [subCategoryName]);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Loader />
        </div>
      ) : (
        <>
          <Helmet>
            <title>
              {CategorydetailInfo?.meta_title
                ? `${CategorydetailInfo?.meta_title?.replace(
                    /\s+/g,
                    ""
                  )} Manufacturer In Surat | Kesaria Textile Company`
                : "Kesaria Textile Company | Fashion is King"}
            </title>
            <link
              rel="canonical"
              href={`${
                window.location.hostname == "localhost" ? "http" : "https"
              }://${
                window.location.host
              }${selectedLocation}/categories-detail/${subCategoryName}`}
            />
            <meta
              name="description"
              content={CategorydetailInfo?.meta_description}
            />
            <meta name="keywords" content={CategorydetailInfo?.meta_keyword} />
            <meta property="og:locale" content="en_US" />
            <meta
              property="og:site_name"
              content="Kesaria Textile Company | Fashion is King"
            />
            <meta
              property="og:title"
              content={`${
                CategorydetailInfo.meta_title
                  ? CategorydetailInfo.meta_title + " Manufacturer In Surat"
                  : "Leading Saree Manufacturer In Surat"
              } | Kesaria Textile Company`}
            />
            <meta property="og:type" content="article" />
            <meta
              name="description"
              property="og:description"
              content={
                CategorydetailInfo?.meta_description ||
                "Kesaria Textile Company is leading saree manufacturer & wholesaler in Surat textile market. ★ Our customer support and factory rate make us a well-known women's clothing manufacturer."
              }
            />
            <meta
              property="og:url"
              content={`${
                window.location.hostname == "localhost" ? "http" : "https"
              }://${
                window.location.host
              }/${selectedLocation}/categories-detail/${CategorydetailInfo?.meta_title?.replace(
                /\s+/g,
                ""
              )}`}
            />
            <meta
              property="article:published_time"
              content="2022-08-26T11:21:29+00:00"
            />
            <meta
              property="article:modified_time"
              content="2024-06-20T06:07:23+00:00"
            />
            <meta name="twitter:card" content="summary" />
            <meta
              name="twitter:title"
              content={`${
                CategorydetailInfo?.meta_title?.replace(/\s+/g, "")
                  ? CategorydetailInfo?.meta_title?.replace(/\s+/g, "") +
                    " Manufacturer In Surat"
                  : "Leading Saree Manufacturer In Surat"
              } | Kesaria Textile Company`}
            />
            <meta
              name="twitter:description"
              content={
                CategorydetailInfo?.meta_description ||
                "Kesaria Textile Company is leading saree manufacturer & wholesaler in Surat textile market. ★ Our customer support and factory rate make us a well-known women's clothing manufacturer."
              }
            />
            <script type="application/ld+json">
              {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https://kesariya.sridixtechnology.com/${selectedLocation}/categories-detail/${CategorydetailInfo?.meta_title?.replace(
                /\s+/g,
                ""
              )}",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com/${selectedLocation}/categories-detail/${CategorydetailInfo?.meta_title?.replace(
                /\s+/g,
                ""
              )}",
                    "position": 1,
                    "name": "Home",
                    "item": "https://kesariya.sridixtechnology.com/${selectedLocation}/categories-detail/${CategorydetailInfo?.meta_title?.replace(
                /\s+/g,
                ""
              )}",
                    "nextItem": "https://kesariya.sridixtechnology.com/${selectedLocation}/categories-detail/${CategorydetailInfo?.meta_title?.replace(
                /\s+/g,
                ""
              )}"
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://kesariya.sridixtechnology.com/${selectedLocation}/categories-detail/${CategorydetailInfo?.meta_title?.replace(
                /\s+/g,
                ""
              )}",
                    "position": 2,
                    "name": "Categories Detail",
                    "previousItem": "https://kesariya.sridixtechnology.com/${CategorydetailInfo?.meta_title?.replace(
                      /\s+/g,
                      ""
                    )}"
                  }
                ]
              },
              {
                "@type": "Organization",
                "@id": "https://kesariya.sridixtechnology.com/${CategorydetailInfo?.meta_title?.replace(
                  /\s+/g,
                  ""
                )}",
                "name": "Keasria Textile Company",
                "description": "Fashion is King",
                "url": "https://kesariya.sridixtechnology.com/${CategorydetailInfo?.meta_title?.replace(
                  /\s+/g,
                  ""
                )}",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://kesariya.sridixtechnology.com/wp-content/uploads/2022/01/cropped-ktc-logo-1.webp",
                  "@id": "https://kesariya.sridixtechnology.com/${selectedLocation}/categories-detail/${CategorydetailInfo?.meta_title?.replace(
                /\s+/g,
                ""
              )}",
                  "width": 512,
                  "height": 512,
                  "caption": "cropped-ktc-logo-1.webp"
                },
                "image": {
                  "@id": "https://kesariya.sridixtechnology.com/${selectedLocation}/categories-detail/${CategorydetailInfo?.meta_title?.replace(
                /\s+/g,
                ""
              )}"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://kesariya.sridixtechnology.com/${selectedLocation}/categories-detail/${CategorydetailInfo?.meta_title?.replace(
                /\s+/g,
                ""
              )}",
                "url": "https://kesariya.sridixtechnology.com/${selectedLocation}/categories-detail/${CategorydetailInfo?.meta_title?.replace(
                /\s+/g,
                ""
              )}",
                "name": "Kesaria Textile categories-detail | Know About Textile Manufacturers & Wholesalers",
                "description": "Check here latest & updated textile manufacturers & wholesalers information. Our experts share some tips about buying & selling about our products.",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://kesariya.sridixtechnology.com/${CategorydetailInfo?.meta_title?.replace(
                  /\s+/g,
                  ""
                )}" },
                "breadcrumb": { "@id": "https://kesariya.sridixtechnology.com/${selectedLocation}/categories-detail/${CategorydetailInfo?.meta_title?.replace(
                /\s+/g,
                ""
              )}" },
                "datePublished": "2022-03-31T16:02:12+05:30",
                "dateModified": "2024-05-22T13:59:10+05:30"
              },
              {
                "@type": "WebSite",
                "@id": "https://kesariya.sridixtechnology.com/${CategorydetailInfo?.meta_title?.replace(
                  /\s+/g,
                  ""
                )}",
                "url": "https://kesariya.sridixtechnology.com/${CategorydetailInfo?.meta_title?.replace(
                  /\s+/g,
                  ""
                )}",
                "name": "Kesaria Textile Company",
                "description": "Fashion is King",
                "inLanguage": "en-US",
                "publisher": { "@id": "https://kesariya.sridixtechnology.com/${CategorydetailInfo?.meta_title?.replace(
                  /\s+/g,
                  ""
                )}" }
              }
            ]
          }
          `}
            </script>
          </Helmet>

          <FirstImage image={CategorydetailBaner} />
          <Breadcrumb
            breadcrumbTitle={CategorydetailInfo.category_name}
            breadcrumbNav={[
              {
                navText: "Home",
                path: "/",
              },
              {
                navText: breadcrumbname,
                path: "/",
              },
            ]}
          />
          <SilkCotton CategorydetailInfo={CategorydetailInfo} />
          <IntrestedProductSlider
            CategorydetailintrestedPro={CategorydetailintrestedPro}
          />
          <OrderProcess CategorydetailInfo={CategorydetailInfo} />
        </>
      )}
    </>
  );
};

export default CategoriesDetailpage;
