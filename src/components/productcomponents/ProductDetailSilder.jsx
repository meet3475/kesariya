import React, { useState, useEffect } from "react";
import { Row, Col, Container, button, Collapse } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";
import EnquiryModel from "../enquirymodelcomponents/EnquiryModel";
import { ImWhatsapp } from "react-icons/im";
const ProductDetailSlider = ({ sliderdata }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(sliderdata);
  const [images, setImages] = useState([]);
  const [thumbnailPosition, setThumbnailPosition] = useState("left");

  useEffect(() => {
    const initialImages =
      sliderdata?.product_images?.map((image) => ({
        original: image,
        thumbnail: image,
      })) || [];
    setImages(initialImages);
  }, [sliderdata]);

  useEffect(() => {
    const updateThumbnailPosition = () => {
      if (window.innerWidth <= 467) {
        setThumbnailPosition("bottom");
      } else {
        setThumbnailPosition("left");
      }
    };
    updateThumbnailPosition();

    window.addEventListener("resize", updateThumbnailPosition);
    return () => window.removeEventListener("resize", updateThumbnailPosition);
  }, []);

  const galleryOptions = {
    items: images,
    thumbnailPosition: thumbnailPosition,
    showThumbnails: true,
    showFullscreenbutton: false,
    showPlaybutton: false,
    showBullets: false,
    renderThumbInner: (item) => (
      <div className="image-gallery-thumbnail-inner h-100 w-100">
        <img
          src={item.thumbnail}
          alt="Thumbnail"
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleColorClick = (color) => {
    setSelectedVariant(color);
    const newImages =
      color.color_images?.map((image) => ({
        original: image,
        thumbnail: image,
      })) || [];
    setImages(newImages);
  };

  const handleWhatsAppClick = () => {
    const productUrl = window.location.href;
    const message = `Check out this product: ${sliderdata?.product_name}\n${productUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Container>
        <div className="silderthumbsimage pagemargin">
          <Row className="mb-4">
            <Col lg={6} className="mt-3">
              {images.length > 0 && <ImageGallery {...galleryOptions} />}
              <div
                className="mt-5 p-2 p-sm-3 rounded-4"
                style={{ backgroundColor: "#FBF6EB" }}
              >
                <div className="flex-between-align gap-1 gap-sm-2">
                  <div
                    className="rounded-2 px-2 py-2 px-sm-3 flex-center-align"
                    onClick={handleWhatsAppClick}
                  >
                    <ImWhatsapp className="fs-23 fs-sm-18 text-light" />
                  </div>
                  <div className="custom-catalog-btn">
                    <a
                      target="_blank"
                      href={sliderdata?.download_pdf}
                      className="btn border-dark w-100 bg-white py-2 fs-sm-12 flex-center-align gap-1 btn-white-to-black-color-move"
                    >
                      <span className="d-none d-sm-block">
                        <TbDownload className="fs-20" />
                      </span>
                      <span>Download Catalog</span>
                    </a>
                  </div>
                  <div className="custom-get-btn">
                    <button
                      className="btn them-color w-100 text-white py-2 buttonhover fs-sm-12 btn-red-to-black-color-move"
                      onClick={handleShow}
                    >
                      <span> Get Quote</span>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="py-2">
                <p className="fs-4 fw-bolder">{sliderdata?.product_name}</p>
                <p className="fw-semibold fs-5">
                  {sliderdata?.product_short_description}
                </p>
                <p className="text-success fs-4 fw-bolder">
                  {sliderdata?.product_price}
                  <span className="text-dark fs-6 ms-2">
                    (Includes all taxes)
                  </span>
                </p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: sliderdata?.product_description,
                  }}
                />
                <div className="fs-6 fw-semibold pb-4">
                  Different Colors Product
                </div>
                <div>
                  {Array.isArray(sliderdata?.coloriest_product) &&
                  sliderdata.coloriest_product.length > 0 ? (
                    <Row className="d-flex gap-3 ">
                      {sliderdata.coloriest_product.map((color, index) => (
                        <Col
                          xs={3}
                          sm={6}
                          md={4}
                          lg={2}
                          className="rounded-4 image-col card-hover-img"
                          key={index}
                          onClick={() => handleColorClick(color)}
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            src={color.color_images[0]}
                            alt={`Color ${index}`}
                            className="card-img-hover img-fluid setimage"
                            style={{ width: "100%", height: "100%" }}
                          />
                          <button className="overlay-button fs-12">
                            View Color
                          </button>
                        </Col>
                      ))}
                    </Row>
                  ) : (
                    <p className="text-color fs-5 fw-semibold">
                      No similar color products available!!
                    </p>
                  )}
                </div>
                <div className="watch-video-wrapper">
                  <div className="row text-center">
                    <div className="col-lg-12 p-0">
                      <div>
                        {Array.isArray(sliderdata?.product_long_description) &&
                          sliderdata.product_long_description.map(
                            (element, index) => (
                              <div
                                key={index}
                                className="setwrapper border-bottom-1 my-4"
                              >
                                <div
                                  className="d-flex justify-content-between align-items-center p-2 px-3"
                                  onClick={() => handleToggle(index)}
                                  aria-controls={`example-collapse-text-${index}`}
                                  aria-expanded={openIndex === index}
                                  style={{ cursor: "pointer" }}
                                >
                                  <div className="d-flex gap-3 align-items-center">
                                    <div className="text">{element.title}</div>
                                  </div>
                                  <div className="fw-bold">
                                    {openIndex === index ? (
                                      <FaMinus />
                                    ) : (
                                      <FaPlus />
                                    )}
                                  </div>
                                </div>
                                <Collapse in={openIndex === index}>
                                  <div
                                    className="mt-2 text-start p-2 px-3"
                                    id={`example-collapse-text-${index}`}
                                  >
                                    <div className="border-top mb-3" />
                                    {element.value}
                                  </div>
                                </Collapse>
                              </div>
                            )
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <EnquiryModel show={show} handleClose={handleClose} />
    </>
  );
};

export default ProductDetailSlider;
