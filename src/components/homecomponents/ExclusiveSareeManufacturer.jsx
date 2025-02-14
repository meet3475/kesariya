import { Container } from "react-bootstrap";
import imageBorder from "../../assets/images/bestsellerborder.webp";
import { storageData } from "../../config/config";

const ExclusiveSareeManufacturer = () => {
  return (
    <>
      <div
        className="ExclusiveSareeManufacturer"
        style={{ textAlign: "justify" }}
      >
        <Container>
          <h1
            className="text-center saree-heading"
            style={{ fontFamily: "Jost" }}
          >
            Exclusive Saree Manufacturer in {storageData?.locationReplace}
          </h1>
          <div className="d-flex justify-content-center">
            <img
              src={imageBorder}
              loading="lazy"
              alt="border-image"
              className="border-image"
            />
          </div>
          <h4 className="fs-6 fw-semibold  them-font">
            Kesaria Textile Company is the Best Saree Manufacturer in{" "}
            {storageData?.locationReplace}. The objective is to offer sarees
            that your customers will love, to provide clothes that express your
            unique style, and to give you as a saree shop owner an opportunity
            to increase revenue by growing your sales every year. This goal has
            earned us credibility not only in
            {storageData?.locationReplace} but has also made us the best saree
            company in India.
          </h4>
          <h4 className="fs-6 fw-semibold them-font">
            When we talk about the clothing worn by Indian women, sarees are
            among the items they wear most often. These days, designer sarees
            are very popular among women who want to look good and be
            comfortable at the same time. Retailers who buy wholesale designer
            sarees from the saree manufacturer in {storageData?.locationReplace}{" "}
            are always concerned about price. As a leading saree manufacturer in{" "}
            {storageData?.locationReplace}, India, we ensure that everything
            goes well, from quality to pricing to customer satisfaction. This
            allows us to offer products at lower prices than any other saree
            wholesaler in {storageData?.locationReplace} and export products
            throughout India.
          </h4>
          <h4 className="fs-6 fw-semibold them-font">
            Providing high-quality products to our customers has earned us the
            title of "Best Sarees Manufacturer in {storageData?.locationReplace}
            , India and Also Best Saree Supplier in{" "}
            {storageData?.locationReplace}" We are confident that if you are
            looking for a saree exporter in India, or particularly in{" "}
            {storageData?.locationReplace}, Gujarat, our products will serve
            your needs. This is a great opportunity for all Saree manufacturers
            & wholesalers in {storageData?.locationReplace} to bring style with
            comfort to your stores. When it comes to diversity, you can count on
            us to supply the newest and most in-demand styles.
          </h4>
          <h4 className="fs-6 fw-semibold them-font">
            As a reputed textile company in {storageData?.locationReplace}, we
            also maintain our inventory wisely. We have stocked trendy Indian
            clothing products thoroughly so that retailers or wholesalers who
            need them in bulk can get them anywhere in a short time.
          </h4>
        </Container>
      </div>
    </>
  );
};
export default ExclusiveSareeManufacturer;
