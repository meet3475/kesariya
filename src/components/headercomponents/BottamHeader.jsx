import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Form,
  Carousel,
  button,
} from "react-bootstrap";
import Logo from "../../assets/images/kesariyalogo1.webp";
import whatsapplogo from "../../assets/images/image 653.svg";
import { ImPhone } from "react-icons/im";
import {
  MdArrowRightAlt,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { FaChevronRight, FaPlus, FaMinus, FaChevronDown } from "react-icons/fa";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";
import { ENQUIRY_API, HEADER_API, SEARCH_API } from "../../config/config";
import axios from "axios";
import { ENQUIRYMODEL_API } from "../../config/config";
import * as Yup from "yup";
import { Formik } from "formik";
import enquiryheaderimgmodel from "../../assets/images/enquiryheaderimgmodel.webp";
import { BsSearch } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import searchimg from "../../assets/images/searchimg.webp";
import { MobileMenu } from "./MobileHeder";
import { useSelector } from "react-redux";

export const BottamHeader = () => {
  const navigate = useNavigate();
  const [openCategory, setOpenCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchRelatedProducts, setSearchRelatedProducts] = useState([]);
  const [EnquiryData, setEnquiryData] = useState([]);
  const locationData = useSelector((state) => state.location.value);

  const [storageData, setStorageData] = useState({
    locationDynamic: "LOCATION_DY",
    locationReplace:
      localStorage?.getItem("country_name") === "India"
        ? localStorage?.getItem("city_name")
        : localStorage?.getItem("country_name"),
  });

  useEffect(() => {
    setStorageData({
      locationDynamic: "LOCATION_DY",
      locationReplace:
        locationData?.country_name == "India"
          ? locationData?.city_name
          : locationData?.country_name,
    });
  }, [locationData]);

  //  const { id, name } = useParams();

  const dropdownRef = useRef(null);
  // const [storeWidth, setStoreWidth] = useState(0);

  // useEffect(() => {
  //   if (dropdownRef.current) {
  //     setStoreWidth(parent.current.offsetWidth);
  //   }
  // }, []);

  const handleMouseEnter = (index) => {
    setOpenCategory(index);
  };

  const handleMouseLeave = () => {
    setOpenCategory(null);
  };

  const fetchheaderData = async () => {
    try {
      const response = await axios.post(HEADER_API);
      if (response.data && response.data.DATA) {
        setCategories(response.data.DATA);
      } else {
        setCategories([]);
      }
    } catch (error) {
      setCategories([]);
    }
  };

  const fetchEnquiryData = async () => {
    try {
      const response = await axios.post(ENQUIRY_API);

      if (response.data.DATA) {
        setEnquiryData(response.data?.DATA?.languageData);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    handleClose();
  };
  // .................search design................
  const fetchSearchData = async (query) => {
    try {
      const response = await axios.post(SEARCH_API, { search: query });

      if (response?.data?.DATA[0]?.data?.length > 0) {
        if (response?.data?.DATA[0]?.data) {
          setSearchRelatedProducts(response?.data?.DATA[0]?.data);
        }
      } else {
        if (response?.data?.DATA) {
          setSearchRelatedProducts(response?.data?.DATA);
        }
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleClearInput = () => {
    setSearchQuery("");
    setSearchRelatedProducts([]);
    setDropdownVisible(false);
  };

  const handleInputChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() !== "") {
      try {
        await fetchSearchData(query);
        setDropdownVisible(true);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      // setDropdownVisible(false);
      setSearchRelatedProducts([]);
    }
  };
  
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // setDropdownVisible(false);
      setOpenCategory(null);  // Close the dropdown safely
    }

      document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
  };

  const handleClick = () => {
    const daata = localStorage.removeItem("selectedSection");
    navigate("/");
    // window.location.reload();
  };

  useEffect(() => {
    fetchheaderData();
    fetchSearchData();
    fetchEnquiryData();
    // document.addEventListener("mousedown", handleClickOutside);
    // return () => {
    //   document.removeEventListener("mousedown", handleClickOutside);
    // };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Container fluid className=" pt-0 pb-0 midium-container px-sm-0">
        <Container className="custom-header-container p-0 px-sm-2 g-0">
          <div className="row midium-row p-0">
            <div className="container-fluid d-flex justify-content-between align-items-center align-content-center">
              <div className="col-10 col-md-5 col-lg-3 d-grid">
                <div className="logobg-div d-grid" onClick={handleClick}>
                  <Link to="/" className="logo-div">
                    <img
                      src={Logo}
                      alt="Kesaria Textile Company"
                      className="heder-logo mb-2"
                    />
                  </Link>
                  <div className="custom-back-light-design"></div>
                  <div className="custom-back-light-design-border"></div>
                  <Link to="/" className="logo-div">
                    <img src={Logo} alt="" className="heder-logo mb-2" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 d-none d-lg-block align-items-center pt-2">
                <ul className="navbar-nav d-flex flex-row justify-content-evenly align-items-center font-set-main">
                  <li className="nav-item">
                    <NavLink
                      exact
                      className="nav-link midium-link set-fontlink"
                      activeClassName="active-link"
                      to="/"
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link midium-link set-fontlink"
                      activeClassName="active-link"
                      to="/about/"
                    >
                      ABOUT US
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link midium-link  set-fontlink"
                      activeClassName="active-link"
                      to="/blog/"
                    >
                      BLOGS
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link midium-link set-fontlink"
                      activeClassName="active-link"
                      to="/career/"
                    >
                      CAREERS
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link midium-link set-fontlink"
                      activeClassName="active-link"
                      to="/contact-us/"
                    >
                      CONTACT US
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle midium-link set-fontlink"
                      to="/enquiry-ktc/"
                      id="enquiryDropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      ENQUIRY
                    </NavLink>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="enquiryDropdown"
                    >
                      {EnquiryData.map((languageData) => (
                        <li key={languageData.id}>
                          <a
                            className="dropdown-item"
                            href={`/enquiry-ktc/${languageData.language}`}
                          >
                            {languageData.language.charAt(0).toUpperCase() +
                              languageData.language.slice(1)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="col-md-5 col-lg-3 text-center flex-between-align justify-content-end">
                <div className="d-flex align-items-center justify-content-end">
                  <div className="me-3">
                    <BsSearch
                      className="fs-4 text-light cursor-pointer"
                      // onClick={() => setDropdownVisible(!isDropdownVisible)}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents the click from closing immediately
                        setDropdownVisible((prev) => !prev);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
              <MobileMenu categories={categories} EnquiryData={EnquiryData} />
            </div>
          </div>
          <div className="nav-container px-3 mt-0 mt-lg-3">
            <div className="row d-none d-lg-block">
              <div
                // ref={dropdownRef}
                className="dropdown-container d-flex justify-content-evenly px-2"
                style={{
                  listStyle: "none",
                  background: "white",
                  borderRadius: "40px 40px 0 0",
                  cursor: "pointer"
                }}
              >
                {categories.length > 0 ? (
                  categories.map((category, index) => {
                    return (
                      <div key={index} className="dropdown">
                        <Link
                          className="nav-link dropdown-toggle category-links py-2 fs-15"
                          to=""
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(
                              `${
                                storageData?.locationReplace?.length > 0
                                  ? "/" + storageData.locationReplace
                                  : ""
                              }/categories/${
                                category?.subcategories[0]?.subcategoriesdata
                                  ?.length > 10
                                  ? category.subcategories[0].name
                                      .toString()
                                      .trim()
                                      .replace(/-/g, "~")
                                      .replace(/\s+/g, "-")
                                      .toLowerCase()
                                  : category.name
                                      .toString()
                                      .trim()
                                      .replace(/-/g, "~")
                                      .replace(/\s+/g, "-")
                                      .toLowerCase()
                              }`,
                              {
                                state: {
                                  from: "category",
                                  id: category?.id,
                                },
                              }
                            );
                          }}
                        >
                          {category.label}
                          {openCategory === index ? (
                            <MdKeyboardArrowUp />
                          ) : (
                            <MdKeyboardArrowDown />
                          )}
                        </Link>
                        <div
                          className="dropdown-menu ps-0 pt-4 mt-0 drop-style"
                          style={{
                            opacity: openCategory === index ? 1 : 0,
                            visibility:
                              openCategory === index ? "visible" : "hidden",
                              // left: "-30px",
                              // top: "100%",
                            // left: "-50%",
                            // top: "103%",
                          }}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div>
                            <ul
                              className={`p-0 ${
                                category.subcategories.some(
                                  (sub) => sub.subcategoriesdata
                                )
                                  ? "d-flex flex-row"
                                  : "d-flex flex-column"
                              }`}
                            >
                              {/* Show only the first 7 subcategories */}
                              {category.subcategories
                                .slice(0, 10)
                                .map((subcategory, subindex) => (
                                  <li
                                    className={`list-style-none ${
                                      clickedIndex === subindex ? "clicked" : ""
                                    }`}
                                    key={subindex}
                                  >
                                    <a
                                      className={`dropdown-item sub-item category-links px-2 ${
                                        subcategory.subcategoriesdata
                                          ? "text-color fw-bolder"
                                          : "black fw-normal"
                                      }`}
                                      style={{fontSize : "15px"}}
                                      onClick={() =>
                                        navigate(
                                          `${
                                            storageData?.locationReplace
                                              ?.length > 0
                                              ? "/" +
                                                storageData?.locationReplace
                                              : ""
                                            // }/categories-detail/${subcategory?.label
                                          }/${
                                            subcategory.subcategoriesdata
                                              ? "categories"
                                              : "categories-detail"
                                          }/${subcategory?.label
                                            .toString()
                                            .trim()
                                            .replace(/-/g, "~")
                                            .replace(/\s+/g, "-")
                                            .toLowerCase()}`,
                                          {
                                            state: {
                                              from: "subcategory",
                                              id: subcategory?.id,
                                              name: subcategory?.label,
                                            },
                                          }
                                        )
                                      }
                                    >
                                      {subcategory.label}
                                    </a>
                                    {subcategory.subcategoriesdata && (
                                      <ul
                                        className="nested-subcategories d-flex flex-column"
                                        style={{ textDecoration: "none"}}
                                      >
                                        {subcategory.subcategoriesdata
                                          .slice(0, 10)
                                          .map((subSubitem, subSubindex) => (
                                            <li
                                              key={subSubitem?.id}
                                              className="nested-sub-item header-subcategory list-style-none"
                                              style={{ textDecoration: "none" }}
                                            >
                                              <a
                                                className="px-0 dropdown-item sub-item fw-semibold "
                                                style={{fontSize : "12px"}}
                                                onClick={() =>
                                                  navigate(
                                                    `${
                                                      storageData
                                                        ?.locationReplace
                                                        ?.length > 0
                                                        ? "/" +
                                                          storageData.locationReplace
                                                        : ""
                                                    }/categories-detail/${subSubitem?.label
                                                      ?.toString()
                                                      .trim()
                                                      .replace(/-/g, "~")
                                                      .replace(/\s+/g, "-")
                                                      .toLowerCase()}`,
                                                    {
                                                      state: {
                                                        from: "subcategory",
                                                        id: subSubitem?.id,
                                                        name: subSubitem?.label,
                                                      },
                                                    }
                                                  )
                                                }
                                              >
                                                {subSubitem.label}
                                              </a>
                                            </li>
                                          ))}
                                        {subcategory?.subcategoriesdata
                                          ?.length > 10 && (
                                          <li className="list-style-none">
                                            <a
                                              className="dropdown-item sub-item category-links px-2 text-color fw-bolder"
                                              style={{fontSize : "15px"}}
                                              onClick={() =>
                                                navigate(
                                                  `${
                                                    storageData?.locationReplace
                                                      ?.length > 0
                                                      ? "/" +
                                                        storageData?.locationReplace
                                                      : ""
                                                  }/categories/${subcategory?.name
                                                    .toString()
                                                    .trim()
                                                    .replace(/-/g, "~")
                                                    .replace(/\s+/g, "-")
                                                    .toLowerCase()}`,
                                                  {
                                                    state: {
                                                      from: "subcategory",
                                                      id: subcategory?.id,
                                                    },
                                                  }
                                                )
                                              }
                                            >
                                              SEE MORE...
                                            </a>
                                          </li>
                                        )}
                                      </ul>
                                    )}
                                  </li>
                                ))}

                              {/* Display "SEE MORE...subcategories */}
                              {category?.subcategories?.length > 10 && (
                                <li className="list-style-none">
                                  <a
                                    className="dropdown-item sub-item category-links px-2 text-color fw-bolder"
                                    onClick={() => {
                                      navigate(
                                        `${
                                          storageData?.locationReplace?.length >
                                          0
                                            ? "/" + storageData?.locationReplace
                                            : ""
                                        }/categories/${category?.name
                                          .toString()
                                          .trim()
                                          .replace(/-/g, "~")
                                          .replace(/\s+/g, "-")
                                          .toLowerCase()}`,
                                        {
                                          state: {
                                            from: "category",
                                            id: category?.id,
                                          },
                                        }
                                      );
                                    }}
                                  >
                                    SEE MORE...
                                  </a>
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div>No categories available</div>
                )}
              </div>
            </div>
            <div className="position-relative">
              {isDropdownVisible && (
                <>
                  <div className="dropdown-menu-custom" ref={dropdownRef}>
                    <div className="search-bar-container">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={handleInputChange}
                        // onKeyDown={handleKeyPress}
                        placeholder="Search..."
                        className="search-input"
                      />
                      {searchQuery && (
                        <MdClose
                          className="search-clear-icon"
                          onClick={handleClearInput}
                        />
                      )}
                    </div>
                    {/* <div
                      className="d-flex flex-column gap-2"
                      style={{
                        maxHeight: "400px",
                        overflowY: "auto",
                        scrollbarWidth: "none",
                      }}
                    >
                      {searchRelatedProducts?.length > 0 &&
                        searchRelatedProducts.map((product) => (
                          <div
                            key={product.id}
                            className="search-related-product p-2 pe-lg-4 pe-1 d-flex align-items-center justify-content-between"
                            onClick={() => {
                              navigate(
                                `${
                                  storageData?.locationReplace?.length > 0
                                    ? "/" + storageData?.locationReplace
                                    : ""
                                }/categories-detail/${product?.category_name
                                  .toString()
                                  .trim()
                                  .replace(/-/g, "~")
                                  .replace(/\s+/g, "-")
                                  .toLowerCase()}`,
                                {
                                  state: {
                                    id: product?.id,
                                    name: product?.category_name,
                                  },
                                }
                              );
                              handleClearInput();
                            }}
                          >
                            <div className="main-search-product d-flex align-items-center flex-grow-1">
                              <img
                                src={product.image}
                                alt={product.category_name}
                                className="searchimage"
                              />
                              <p className="ms-3 mb-0 text-wrap searchtitle">
                                {product.category_name}
                              </p>
                            </div>
                            <div>
                              <FaChevronRight className="fs-5 searcharrow" />
                            </div>
                          </div>
                        ))}
                    </div> */}
                    <div
                      className="d-flex flex-column gap-2"
                      style={{
                        maxHeight: "400px",
                        overflowY: "auto",
                        scrollbarWidth: "none",
                      }}
                    >
                      {searchQuery.trim() !== "" ? ( // Only show results if user has searched
                        searchRelatedProducts.length > 0 ? (
                          searchRelatedProducts.map((product) => (
                            <div
                              key={product.id}
                              className="search-related-product p-2 pe-lg-4 pe-1 d-flex align-items-center justify-content-between"
                              onClick={() => {
                                navigate(
                                  `${
                                    storageData?.locationReplace?.length > 0
                                      ? "/" + storageData?.locationReplace
                                      : ""
                                  }/categories-detail/${product?.category_name
                                    .toString()
                                    .trim()
                                    .replace(/-/g, "~")
                                    .replace(/\s+/g, "-")
                                    .toLowerCase()}`,
                                  {
                                    state: {
                                      id: product?.id,
                                      name: product?.category_name,
                                    },
                                  }
                                );
                                handleClearInput();
                              }}
                            >
                              <div className="main-search-product d-flex align-items-center flex-grow-1">
                                <img
                                  src={product.image}
                                  alt={product.category_name}
                                  className="searchimage"
                                />
                                <p className="ms-3 mb-0 text-wrap searchtitle">
                                  {product.category_name}
                                </p>
                              </div>
                              <div>
                                <FaChevronRight className="fs-5 searcharrow" />
                              </div>
                            </div>
                          ))
                        ) : (
                          // Show "Not Found" only when search is performed and no results are found
                          <div
                            className="text-center p-4 fw-bold not-found"
                          >
                            Product Not Found
                          </div>
                        )
                      ) : null}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Container>
      </Container>

      <Modal show={show} onHide={handleClose} className="p-3 enquirymodel">
        <Modal.Header
          closebutton
          className="them-color justify-content-center position-relative"
          closeVariant={"white"}
          style={{ borderRadius: "30px 30px 0 0" }}
        >
          <Modal.Title className="w-100 text-center">
            <span className="text-light">Send Enquiry</span>
          </Modal.Title>
        </Modal.Header>
        <Row className="modelcarousel">
          <Col lg={6} md={6} sm={6} xs={12}>
            <Carousel className="h-100">
              <Carousel.Item className="h-100">
                <img
                  className="d-block w-100 h-100"
                  src={enquiryheaderimgmodel}
                  alt="First slide"
                  style={{ borderRadius: "0 0 0 30px", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item
                className="h-100"
                style={{ borderRadius: "0 0 0 30px" }}
              >
                <img
                  className="d-block w-100 h-100"
                  src={enquiryheaderimgmodel}
                  alt="Second slide"
                  style={{ borderRadius: "0 0 0 30px", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item className="h-100">
                <img
                  className="d-block w-100 h-100"
                  src={enquiryheaderimgmodel}
                  alt="Third slide"
                  style={{ borderRadius: "0 0 0 30px", objectFit: "cover" }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12}>
            <div className="mt-3 px-4 py-3">
              <p className="fs-6 fw-semibold">
                Our team will reach out to you within the next 24 hours.
              </p>
              <Formik
                initialValues={{
                  name: "",
                  contact_number: "",
                  message: "",
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required("Full name is required"),
                  contact_number: Yup.string()
                    .matches(
                      /^\d{10}$/,
                      "Contact number must be exactly 10 digits"
                    )
                    .required("Contact number is required"),
                  message: Yup.string().required("Message is required"),
                })}
                onSubmit={async (values, { setStatus, resetForm }) => {
                  try {
                    const response = await axios.post(ENQUIRYMODEL_API, {
                      name: values.name,
                      contact_number: values.contact_number,
                      message: values.message,
                    });
                    setStatus({ success: response.data.message });
                    resetForm();
                    handleClose();
                    setShowSuccessModal(true);
                  } catch (error) {
                    setStatus({ error: "Error submitting the form" });
                    console.error("Error submitting form:", error);
                  }
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  errors,
                  status,
                }) => (
                  <Form onSubmit={handleSubmit} className="d-flex flex-column">
                    <Form.Group className="mb-3 w-100" controlId="formFullName">
                      <Form.Label className="fw-semibold">
                        Full Name<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Full name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && errors.name}
                        className="theme-shadow rounded-3"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mb-3 w-100"
                      controlId="formContactNumber"
                    >
                      <Form.Label className="fw-semibold">
                        Contact Number<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Contact no"
                        name="contact_number"
                        value={values.contact_number}
                        onChange={(e) => {
                          const value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                          handleChange({
                            target: { name: "contact_number", value },
                          });
                        }}
                        onBlur={handleBlur}
                        isInvalid={
                          touched.contact_number && errors.contact_number
                        }
                        inputMode="numeric"
                        maxLength={10}
                        className="theme-shadow rounded-3"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.contact_number}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="formInquiry">
                      <Form.Label className="fw-semibold">
                        Inquiry<span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter Query..."
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.message && errors.message}
                        className="theme-shadow rounded-3"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                      <button
                        className="them-color border-0 rounded-5 px-4 py-2 text-light reachus-btn"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                    {status && status.success && (
                      <div className="text-center text-success mt-3">
                        {status.success}
                      </div>
                    )}
                    {status && status.error && (
                      <div className="text-center text-danger mt-3">
                        {status.error}
                      </div>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Modal>
      <Modal
        show={showSuccessModal}
        onHide={handleSuccessClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header className="text-center them-color" closebutton>
          <Modal.Title className="text-light">Success</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p className="fs-4 fw-medium them-font-color">
            Submitted form successfully!
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <button
            variant="primary"
            onClick={handleSuccessClose}
            className="them-color border-0 rounded-5 px-4 py-2 text-light reachus-btn"
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
