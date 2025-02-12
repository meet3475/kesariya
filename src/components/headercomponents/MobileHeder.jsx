import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import Logo from "../../assets/images/kesariyalogo.webp";
import HeaderLogo from "../../assets/images/bg-header-img.png";
import { useSelector } from "react-redux";

export const MobileMenu = ({ categories, EnquiryData }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState({});
  const [subExpanded, setSubExpanded] = useState({});
  const [enquiryExpanded, setEnquiryExpanded] = useState(false);
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

  const handleToggle = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleSubToggle = (categoryIndex, subIndex) => {
    setSubExpanded((prev) => ({
      ...prev,
      [`${categoryIndex}-${subIndex}`]: !prev[`${categoryIndex}-${subIndex}`],
    }));
  };

  // let route = `${storageData?.locationReplace?.length > 0 ? '/' + storageData.locationReplace : ''}/categories-detail/${category.id}`;
  const handleNavigate = (category, sub, subSub) => {
    let route = `${
      storageData?.locationReplace?.length > 0
        ? "/" + storageData.locationReplace
        : ""
    }/categories-detail/`;
    // }/categories-detail/${category.id}`;
    if (subSub) {
      route += `${subSub.name
        // route += `?subcategory_id=${sub.id}&subsubcategory_id=${subSub.name
        .toString()
        .trim()
        .replace(/-/g, "~")
        .replace(/\s+/g, "-")
        .toLowerCase()}`;
    } else {
      // route += `?subcategory_id=${sub.id}`;
      route += `${sub.name
        .toString()
        .trim()
        .replace(/-/g, "~")
        .replace(/\s+/g, "-")
        .toLowerCase()}`;
    }

    navigate(route, {
      state: { id: subSub?.id ? subSub.id : sub.id },
    });
  };

  const handleClick = () => {
    localStorage.removeItem("selectedSection");
    navigate("/");
    window.location.reload();
  };

  const handleEnquiryToggle = () => {
    setEnquiryExpanded(!enquiryExpanded);
  };

  return (
    <div className="col-1 col-md-1 d-block d-lg-none d-flex justify-content-center heder-mobile">
      <IoIosMenu
        className="text-danger"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
        style={{ fontSize: "25px" }}
      />
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div
          className="offcanvas-header"
          style={{
            background: `url(${HeaderLogo}) no-repeat center center`,
            backgroundSize: "cover",
            height: "100px",
          }}
        >
          <div
            className="col-11 col-md-6 col-lg-3 text-center text-md-left"
            onClick={handleClick}
          >
            <img className="heder-logo" src={Logo} alt="Logo" />
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            closeVariant={"white"}
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav d-grid align-items-center p-0">
            <li
              className="nav-item midium-link p-0 navbar-nav-onhover"
              data-bs-dismiss="offcanvas"
            >
              <Link className="nav-link" aria-current="page" to="/">
                <FaChevronRight className="me-2 mb-1" />
                HOME
              </Link>
            </li>
            <div className="border-bottom"></div>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              {categories.length > 0 &&
                categories.map((category, categoryIndex) => (
                  <div
                    className="accordion-item border-bottom"
                    key={category.id}
                  >
                    <h6
                      className="accordion-header"
                      id={`flush-heading${categoryIndex}`}
                    >
                      <button
                        className="accordion-button collapsed d-flex justify-content-between align-items-center py-2 px-0"
                        type="button"
                        onClick={() => handleToggle(categoryIndex)}
                        aria-expanded={
                          expanded[categoryIndex] ? "true" : "false"
                        }
                        aria-controls={`flush-collapse${categoryIndex}`}
                      >
                        <p className="fs-15 mb-0 text-uppercase midium-link p-0">
                          <span>
                            {expanded[categoryIndex] ? (
                              <FaChevronDown className="me-2" />
                            ) : (
                              <FaChevronRight className="me-2" />
                            )}
                          </span>
                          {category.label}
                        </p>
                        {category.subcategories.length > 0 && (
                          <span className="bottam-link d-flex align-items-center">
                            {expanded[categoryIndex] ? <FiMinus /> : <FiPlus />}
                          </span>
                        )}
                      </button>
                    </h6>
                    <div
                      id={`flush-collapse${categoryIndex}`}
                      className={`accordion-collapse collapse ${
                        expanded[categoryIndex] ? "show" : ""
                      }`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body py-0 px-0">
                        <ul className="list-group list-group-flush">
                          {category.subcategories.map((sub, subIndex) => (
                            <div className="border-bottom" key={sub.id}>
                              <div className="accordion-header">
                                <button
                                  className="accordion-button collapsed d-flex justify-content-between align-items-center py-2 ps-3 px-0"
                                  type="button"
                                  onClick={() =>
                                    sub.subcategoriesdata?.length > 0
                                      ? handleSubToggle(categoryIndex, subIndex)
                                      : handleNavigate(category, sub)
                                  }
                                  aria-expanded={
                                    subExpanded[`${categoryIndex}-${subIndex}`]
                                      ? "true"
                                      : "false"
                                  }
                                >
                                  <p className="fs-14 mb-0">
                                    <span>
                                      {subExpanded[
                                        `${categoryIndex}-${subIndex}`
                                      ] ? (
                                        <FaChevronDown className="me-2" />
                                      ) : (
                                        <FaChevronRight className="me-2" />
                                      )}
                                    </span>
                                    {sub.label}
                                  </p>
                                  {sub.subcategoriesdata?.length > 0 && (
                                    <span className="bottam-link d-flex align-items-center">
                                      {subExpanded[
                                        `${categoryIndex}-${subIndex}`
                                      ] ? (
                                        <FiMinus />
                                      ) : (
                                        <FiPlus />
                                      )}
                                    </span>
                                  )}
                                </button>
                                {subExpanded[`${categoryIndex}-${subIndex}`] &&
                                  sub.subcategoriesdata?.length > 0 && (
                                    <ul className="list-group list-group-flush">
                                      {sub.subcategoriesdata.map(
                                        (subSub, subSubIndex) => (
                                          <div
                                            className="border-bottom"
                                            key={subSub.id}
                                          >
                                            <li
                                              className="list-group-item fs-13 py-2 ps-4"
                                              onClick={() =>
                                                handleNavigate(
                                                  category,
                                                  sub,
                                                  subSub
                                                )
                                              }
                                              data-bs-dismiss="offcanvas"
                                            >
                                              {/* <FaChevronRight className="mb-1 me-2" /> */}
                                              {subSub.label}
                                            </li>
                                          </div>
                                        )
                                      )}
                                    </ul>
                                  )}
                              </div>
                            </div>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

              {/* Enquiry Subcategory Dropdown */}
              <div className="accordion-item border-bottom">
                <h6 className="accordion-header">
                  <button
                    className="accordion-button collapsed d-flex justify-content-between align-items-center py-2 px-0"
                    type="button"
                    onClick={handleEnquiryToggle}
                    aria-expanded={enquiryExpanded ? "true" : "false"}
                  >
                    <p className="fs-15 mb-0 text-uppercase midium-link p-0">
                      <span>
                        {enquiryExpanded ? (
                          <FaChevronDown className="me-2" />
                        ) : (
                          <FaChevronRight className="me-2" />
                        )}
                      </span>
                      ENQUIRY
                    </p>
                    <span className="bottam-link d-flex align-items-center">
                      {enquiryExpanded ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>
                </h6>
                <div
                  className={`accordion-collapse collapse ${
                    enquiryExpanded ? "show" : ""
                  }`}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body py-0 px-0">
                    <ul className="list-group list-group-flush">
                      {EnquiryData.map((sub, index) => (
                        <div className="border-bottom" key={sub.id}>
                          <li
                            className="list-group-item fs-13 py-2 ps-4 nav-link"
                            onClick={() => {
                              navigate(`/enquiry-ktc/${sub.language}`);
                              window.location.reload();
                            }}
                            data-bs-dismiss="offcanvas"
                          >
                            <FaChevronRight className="mb-1 me-2" />
                            {sub.language}
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Static Links */}

            <li
              className="nav-item midium-link py-2"
              data-bs-dismiss="offcanvas"
            >
              <Link className="nav-link" aria-current="page" to="/about">
                <FaChevronRight className="me-2 mb-1" />
                ABOUT US
              </Link>
            </li>
            <div className="border-bottom"></div>
            <li
              className="nav-item midium-link py-2"
              data-bs-dismiss="offcanvas"
            >
              <Link className="nav-link" aria-current="page" to="/contact-us/">
                <FaChevronRight className="me-2 mb-1" />
                CONTACT US
              </Link>
            </li>
            <div className="border-bottom"></div>
            <li
              className="nav-item midium-link py-2"
              data-bs-dismiss="offcanvas"
            >
              <Link className="nav-link" aria-current="page" to="/blog">
                <FaChevronRight className="me-2 mb-1" />
                BLOGS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
