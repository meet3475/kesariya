import React, { useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import { useNavigate } from "react-router-dom";
import { Pagination, useMediaQuery } from "@mui/material";
import moment from "moment";

const BlogList = ({
  blogpageData,
  currentPage,
  handlePageChange,
  totalPages,
}) => {
  
  const navigate = useNavigate();
  const displayedData = blogpageData.slice();

  const parseDate = (dateString) => {
    if (!dateString) return null;
    const sanitizedDate = dateString.replace(
      /(\d{1,2})-(\d{1,2})-(\d{4})/,
      (_, day, month, year) =>
        `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
          2,
          "0"
        )}`
    );
    return new Date(sanitizedDate);
  };

  const staticDate = moment("01-02-2025", "DD-MM-YYYY");

  const blogBgRef = useRef(null);
  const handlePaginationChange = (event, page) => {
    handlePageChange(event, page);
    if (blogBgRef.current) {
      blogBgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div className="blog-bg">
      {/* ref={blogBgRef} */}
      <Container className="mt-lg-4">
        <Row>
          <div className="text-center saree-heading pt-4">Our Latest Blog</div>
          <div className="d-flex justify-content-center">
            <img src={imageBorder} className="py-2 border-image" alt="border" />
          </div>
          <div className="d-flex justify-content-center align-items-center px-lg-5">
            <p className="text-center">
              Our team has helped 10,000+ entrepreneurs launch their businesses
              worldwide. As a full-service company, we guide and support our
              customers. Furthermore, we are committed to empowering women,
              which is why we also support their development.
            </p>
          </div>

          {displayedData.map((blog, i) => {
            const blogDate = parseDate(blog?.created_at);

            if (!blogDate || isNaN(blogDate.getTime())) {
              console.warn(
                `Invalid or missing created_at for blog: ${blog?.id}`
              );
            }

            const blogMoment = moment(blogDate);

            let finalUrl;

            if (
              !blogMoment.isValid() ||
              blogMoment.isSameOrBefore(staticDate)
            ) {
              const year = blogMoment.year();
              const month = String(blogMoment.month() + 1).padStart(2, "0");
              const day = String(blogMoment.date()).padStart(2, "0");

              finalUrl = `/${year}/${month}/${day}/${blog?.url
                .replace(/\s+/g, "-")
                .toLowerCase()}`;
            } else {
              finalUrl = `/blog/${blog?.url
                .replace(/\s+/g, "-")
                .toLowerCase()}`;
            }

            return (
              <Col lg={4} md={6} sm={12} className="mb-4 mt-lg-2" key={i}>
                <div className="d-flex justify-content-center">
                  <Card
                    className="them-borderradius text-dark theme-shadow bloglist"
                    style={{ width: "24rem" }}
                  >
                    <div
                      onClick={() => {
                        console.log(`Navigating to: ${finalUrl}`);

                        window.open(finalUrl, "_blank");
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={blog.image}
                        className="img-fluid card-radius"
                        alt={`blog-image-${i}`}
                        style={{ aspectRatio: "10/5" }}
                      />
                      <Card.Body>
                        <p className="text-center text-wrap">
                          {blog.description}
                        </p>
                      </Card.Body>
                    </div>
                  </Card>
                </div>
              </Col>
            );
          })}

          <div className="pagination-controls">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePaginationChange}
              variant="outlined"
              shape="rounded"
              siblingCount={1}
              boundaryCount={isMobile ? 0 : 1}
              showFirstButton={!isMobile}
              showLastButton={!isMobile}
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                overflowX: "auto",
                "& .MuiPaginationItem-root": {
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                },
                "& .Mui-selected": {
                  backgroundColor: "red",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "darkred",
                  },
                },
              }}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default BlogList;
