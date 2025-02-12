import logo from "../../assets/images/kesariyalogo1.webp";
const Loader = () => {
  return (
    <>
      <div class="spinnerContainer">
        <div className="d-flex justify-content-center">
          <img src={logo} className="w-50" alt="Spinner Logo" />
        </div>
        <div class="loader">
          <p className="text-light">Kesaria</p>
          <div class="words">
            <span class="word">Manufacturer</span>
            <span class="word">Exporter</span>
            <span class="word">Wholesaler</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
