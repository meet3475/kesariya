import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import { storageData } from "../../config/config";

export const Companyinfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleContent = () => setIsExpanded(!isExpanded);

  return (
    <Container style={{ overflow: "hidden" }}>
      <Row>
        <Col>
          <div className="text-center them-font saree-heading fs-1">
            Kesaria Textile Company
          </div>
          <div className="d-flex justify-content-center">
            <img
              src={imageBorder}
              className="py-2 border-image"
              alt="Kesaria Textile Company"
            />
          </div>
          <div className="text-start them-font">
            <h6>
              Kesaria Textile Company: {storageData?.locationReplace} Clothes
              Manufacturer
            </h6>
            <p style={{ textAlign: "justify" }}>
              The Kesaria Textile Company produces clothing for women and is
              well-known among the best sarees manufacturers in{" "}
              {storageData?.locationReplace} textile market. We have a large
              selection of fashionable blouses, dress material, twirling
              dupattas, sophisticated Kurtis, Leggings, designer Lehenga,
              Palazzo, attractive Trousers, wholesale designer Sarees, Stoles,
              Suits, and many more. According to customer requirements, we have
              a wide choice of products. We inspect every item before it is
              shipped to guarantee its high quality. Customers come first, so we
              improve our offerings whenever necessary to meet their needs.
            </p>
            {(isExpanded || window.innerWidth > 467) && (
              <>
                <h6>Saree Wholesaler In {storageData?.locationReplace}</h6>
                <p style={{ textAlign: "justify" }}>
                  Are you looking for the best saree company in India? Finding
                  the right thing to buy at a fair price that boosts your sales
                  and standing in the market can be difficult because of the
                  wide range of available possibilities. Kesaria Textile Company
                  is among the top saree brands in{" "}
                  {storageData?.locationReplace}. With our collection, we’ve
                  made it our mission to provide clothing for every woman of an
                  Indian family. Look around at what’s available to pick the
                  clothes that work best for you. We as a{" "}
                  {storageData?.locationReplace}’s saree manufacturer &
                  wholesaler produce high-quality, reasonably-priced designer
                  clothing for the whole family. Take your time perusing the
                  many options of clothing to locate the one that best fits you.
                </p>
                <h6>
                  Best textile company in {storageData?.locationReplace}: We
                  Celebrate Fashion with Tradition
                </h6>
                <p style={{ textAlign: "justify" }}>
                  If you are just stepping into the textile industry, you won’t
                  give a thought to stocking the bulk of products before
                  figuring out the complete market. Kesaria Textile Company, as
                  a top-rated ladies garment manufacturer, understands your
                  concerns. To work as a helping hand for all saree
                  manufacturers in the {storageData?.locationReplace} textile
                  market, we offer you the following assurance:
                </p>
                <ul>
                  <li>Best Quality with comfort</li>
                  <li>Low price to invest</li>
                  <li>Color options available.</li>
                  <li>Bulk Product stored for on-time delivery</li>
                  <li>Easy payment Facility</li>
                  <li>Guide and support our customers.</li>
                </ul>
                <p className="them-font" style={{ textAlign: "justify" }}>
                  The beautiful colors, finest textiles, and a hint of Indian
                  culture have come to define Kesaria Textile Company as the
                  best saree manufacturer in {storageData?.locationReplace}.
                  They are reflections of its many years of history, its wealth
                  of heritage, and the many changes it has experienced. To learn
                  more, you can either drop by our office at B 3031-32,
                  Millennium Textile Market-1, Ring Road,{" "}
                  {storageData?.locationReplace}, Gujarat 395002, or Call us on
                  this No.: +91-9876542013
                </p>
              </>
            )}
            {/* Only display the toggle button in mobile view */}
            {window.innerWidth <= 768 && (
              <p className="info-p fw-bolder mt-1" onClick={toggleContent}>
                {isExpanded ? "See Less.." : "See More..."}
              </p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
