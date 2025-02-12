import React, { useState, useEffect } from "react";
import FirstImage from "../../components/productcomponents/FirstImage";
import Breadcrumb from "../../components/breadcrumbcomponents/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { REFUNDS_API } from "../../config/config";
import Loader from "../../components/loaderspinnercomponents/Loader";

export const RefundAndReturn = () => {
  const [refundsinfo, setRefundsinfo] = useState([]);
  const [refundsbanner, setRefundsbanner] = useState("");

  const fetchRefundsData = async () => {
    try {
      const response = await axios.post(REFUNDS_API);

      if (response.data.DATA) {
        const bannerImage = response.data.DATA[0].data[0].image;
        const description = response.data.DATA[1].data[0].description;

        setRefundsbanner(bannerImage);
        setRefundsinfo([
          { id: 1, name: "Refunds & Exchange Policy", description },
        ]);
      } else {
        console.error("Unexpected API response structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchRefundsData();
  }, []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });

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
          <FirstImage image={refundsbanner} />
          <Breadcrumb
            breadcrumbTitle="Refund & Exchange"
            breadcrumbNav={[
              {
                navText: "Home",
                path: "/",
              },
            ]}
          />
          <Container className="pagemargin mt-2">
            <Row>
              <Col lg={12} className="mb-lg-4">
                {refundsinfo.length > 0 && (
                  <>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: refundsinfo[0].description,
                      }}
                    />
                  </>
                )}
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
