import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // For navigating to different routes
import { CONTRYCODE_API } from '../../config/config';

const DataSection = ({ dataSections }) => {
  const [stateData, setStateData] = useState([]);
  const storedCountry = localStorage.getItem("country_code");
  const navigate = useNavigate();
  
  const handleSectionClick = (item) => {
    // -----------start for when country select and can't match code ---------------------
    if (storedCountry !== item.country_code) {
      alert("Error 404: Country code does not match.");
      return;
    }
    // ----------- end for when country select and can't match code --------------------- 
    localStorage.setItem("selectedSection", item.label);
    navigate(`/${item.label}`);
  };

  const fetchCountryData = async () => {
    try {
      const response = await axios.post(CONTRYCODE_API, {
        country_code: storedCountry,
      });
      if (response.data !== null) {
        setStateData(response.data.states);
      } else {
        console.error("Error: ", response.data.message || "Unexpected response status");
      }

      // console.log("Response of country==>", response.data.states);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      {dataSections?.label && (
        <>
          <div className="fs-2 them-font them-font-color py-2">
            {dataSections.label}
          </div>
          <Row>
            {Array.isArray(dataSections?.data) && dataSections.data.length > 0 ? (
              dataSections.data.map((item, index) => (
                <Col
                  key={index}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={2}
                  className="mb-4"
                >
                  <Card className="rounded-4 border-dark theme-shadow country-card">
                    <Card.Body className="d-flex justify-content-center align-items-center">
                      <p
                        className="them-font fs-6 mb-0"
                        onClick={() => handleSectionClick(item)}
                      >
                        {item.label}<span className='d-none'> {item.country_code}</span> 
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No data available.</p>
            )}
          </Row>

          {storedCountry === "IN" && stateData && Array.isArray(stateData) && stateData.length > 0 ? (
            stateData.map((state, stateIndex) => (
              <div key={stateIndex}>
                <div className="fs-2 them-font them-font-color py-2">
                  <h5>{state.label}</h5>
                </div>
                <Row>
                  {state.citydata && state.citydata.map((city, cityIndex) => (
                    <Col key={cityIndex} xs={6} sm={6} md={4} lg={2} className="mb-4">
                      <Card className="rounded-4 border-dark theme-shadow state-card">
                        <Card.Body className="d-flex justify-content-center align-items-center">
                          <p className="them-font fs-6 mb-0">
                            {city.label}
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ))
          ) : (
            <p>No state data available.</p>
          )}
        </>
      )}
    </>
  );
};

export default DataSection;
