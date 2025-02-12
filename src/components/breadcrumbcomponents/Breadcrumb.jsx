import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Breadcrumb = (props) => {
  const { breadcrumbTitle, breadcrumbNav } = props;

  const breadcrumbNavList = breadcrumbNav.map((item, index) => (
    <li className="breadcrumb-item text-capitalize" key={index}>
      <Link className="link-1" to={item.path}>
        {item.navText}
      </Link>
    </li>
  ));
  return (
    <div
      className=" d-none d-lg-block breadcrumb-wrapper w-100"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <Container>
        <div className="row">
          <nav aria-label="breadcrumb " className="p-0">
            <ol className="breadcrumb">
              {breadcrumbNavList}
              <li
                className="breadcrumb-item active text-capitalize"
                aria-current="page"
              >
                {breadcrumbTitle}
              </li>
            </ol>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Breadcrumb;
