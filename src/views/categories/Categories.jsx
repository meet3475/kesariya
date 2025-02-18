import React, { useEffect, useState } from "react";
import { Card, Row, Col, button } from "react-bootstrap";
import { GrDownload } from "react-icons/gr";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import EnquiryModel from "../../components/enquirymodelcomponents/EnquiryModel";
import { CATEGORIES_API, storageData } from "../../config/config";
import axios from "axios";
import { Helmet } from "react-helmet";
import Loader from "../../components/loaderspinnercomponents/Loader";
const Categories = () => {
  let { categoryName } = useParams();
  // const { name, id } = useParams(); 
  const navigate = useNavigate();
  const location = useLocation();
  const { id = 0, from = "category" } = location?.state || {};
  // const { from = "category" } = location?.state || {};
  const [categoriesData, setCategoriesData] = useState();
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchCategoriesData = async () => {
    setLoading(true);
    try {
      // const body =
      //   from === "category"
      //     ? { category_id: id }
      //     : { sub_category_id: id };
      // { category_id: id }; 
      const response = await axios.post(CATEGORIES_API, {
        category_name: categoryName.replace(/-/g, ' ').replace(/~/g, '-')
      });
      // console.log("categories==>", response.data);

      if (from === "category") {
        setCategoriesData(response.data.DATA);
      } else {
        setCategoriesData(response.data.DATA);
      }

      setResponseData(response.data);
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchCategoriesData();
  }, [categoryName, location?.state]);

  const [visibleItems, setVisibleItems] = useState(15);
  const [expanded, setExpanded] = useState(false);

  const handleToggleView = () => {
    if (expanded) {
      setVisibleItems(15);
    } else {
      setVisibleItems(
        categoriesData.reduce(
          (acc, data) =>
            acc + data.sub_subcategories?.length || data.subcategories.length,
          0
        )
      );
    }
    setExpanded(!expanded);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (event) => {
    event.stopPropagation();
    setShow(true);
    const favicon = document.querySelector("link[rel~='icon']");
    if (favicon) {
      favicon.href = "%PUBLIC_URL%/favicon1.ico";
    }
  };

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
              Best Saree, Kurtis, Lehenga, Blouse & So On Wholesaler In Surat
            </title>
            <link
              rel="canonical"
              // href={`https://kesariya.sridixtechnology.com/categories/${name}`}
              href={`${window.location.hostname == "localhost" ? "http" : "https"
                }://${window.location.host}/categories/${categoryName}`}
            />
            <meta property="og:locale" content="en_US" />
            <meta
              property="og:site_name"
              content="Kesaria Textile Company | Fashion is King"
            />
            <meta
              property="og:title"
              content="Best Saree, Kurtis, Lehenga, Blouse & So On Wholesaler In Surat"
            />
            <meta property="og:type" content="article" />
            <meta
              name="description"
              property="og:description"
              content="Ladies clothes manufacturer in Surat. Shop wholesale wide range of saree, kurti, lehenga, blouse, leggings, dupatta, dress materials & more in Surat."
            />
            <meta
              property="og:url"
              // content={`https://kesariya.sridixtechnology.com/categories/${name}`}
              content={`${window.location.hostname == "localhost" ? "http" : "https"
                }://${window.location.host}/categories/${categoryName}`}
            />
            <meta
              property="article:published_time"
              content="2022-01-18T06:06:20+00:00"
            />
            <meta
              property="article:modified_time"
              content="2024-06-03T08:51:09+00:00"
            />
            <meta name="twitter:card" content="summary" />
            <meta
              name="twitter:title"
              content="Best Saree, Kurtis, Lehenga, Blouse & So On Wholesaler In Surat"
            />
            <meta
              name="twitter:description"
              content="Ladies clothes manufacturer in Surat. Shop wholesale wide range of saree, kurti, lehenga, blouse, leggings, dupatta, dress materials & more in Surat."
            />
          </Helmet>
          <Breadcrumb
            breadcrumbTitle={categoryName.replace(/-/g, ' ').replace(/~/g, '-')}
            breadcrumbNav={[
              {
                navText: "Home",
                path: "/",
              },
            ]}
          />
          <div className="background-image-container mt-5">
            <div className="container mt-4">
              <div className="productdata">
                {categoriesData &&
                  categoriesData.map((data, i) => (
                    <div key={i}>
                      <p className="fs-2 fw-semibold">
                        {data.name || data.category_name},{" "}
                        {data.sub_subcategories?.length ||
                          data.subcategories.length ||
                          0}{" "}
                        Categories
                      </p>
                      <Row xs={2} sm={2} md={3} lg={5} className="g-3 mt-2">
                        {(data.sub_subcategories || data.subcategories)
                          .slice(0, visibleItems)
                          .map((sub, index) => (
                            <Col key={index} className="mb-4">
                              <Card
                                className="product-card"
                                // onClick={() =>
                                //   navigate(
                                //     `${storageData?.locationReplace?.length > 0
                                //       ? "/" + storageData.locationReplace
                                //       : ""
                                //     }/categories-detail/${sub.category_name.replace(
                                //       /[^a-zA-Z]/g,
                                //       ""
                                //     ).toLowerCase()}`,

                                //     {
                                //       state: {
                                //         id: sub?.id,
                                //         name: sub?.category_name,
                                //       },
                                //     }
                                //   )
                                // }
                                onClick={() =>
                                  navigate(
                                    `${
                                      storageData
                                        ?.locationReplace
                                        ?.length > 0
                                        ? "/" +
                                          storageData.locationReplace
                                        : ""
                                    }/categories-detail/${sub?.category_name
                                      ?.toString()
                                      .trim()
                                      .replace(/-/g, "~")
                                      .replace(/\s+/g, "-")
                                      .toLowerCase()}`,
                                    {
                                      state: {
                                        id: sub?.id,
                                        name: sub?.category_name
                                      },
                                    }
                                  )
                                }
                                style={{
                                  background: sub.color_code,
                                  cursor: "pointer",
                                }}
                              >
                                <div className="main">
                                  <a
                                    target="_blank"
                                    href={sub?.catelog}
                                    className="main"
                                  >
                                    {/* <div className="download-icon">
                                      <GrDownload style={{marginTop :"9px"}} />
                                    </div> */}
                                  </a>
                                </div>
                                <Card.Img
                                  variant="top"
                                  src={sub.image}
                                  className="setimage"
                                  
                                />
                                <button
                                  className="btn btn-danger button-icon rounded-5"
                                  onClick={handleShow}
                                >
                                  GET QUOTE
                                </button>
                                <Card.Text className="text-center mt-2 mb-2 txtfamily fs-13 fw-medium text-light" style={{letterSpacing : "1px"}}>
                                  {sub.category_name}
                                </Card.Text>
                              </Card>
                            </Col>
                          ))}
                      </Row>
                    </div>
                  ))}
                <div className="d-flex justify-content-center">
                  <button
                    className="them-color border-0 rounded-5 px-4 py-2 mt-3 mb-5 btn-red-to-black-color-move btnhoverblue"
                    onClick={handleToggleView}
                  >
                    <span>{expanded ? "View Less" : "View More"}</span>
                  </button>
                </div>
              </div>
            </div>
            <EnquiryModel show={show} handleClose={handleClose} />
          </div>
        </>
      )}
    </>
  );
};

export default Categories;
