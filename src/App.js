import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/jost";
import "@fontsource/ribeye-marrow";
import "@fontsource/lobster";
import "./assets/style/style.scss";
import { TopHeader } from "./components/headercomponents/TopHeder";
import { BottamHeader } from "./components/headercomponents/BottamHeader";
import { Footer } from "./components/footercomponents/Footer";
import { RouteData } from "./routes/routes";
import ScrollToTop from "./components/scrolltopcomponents/ScrollTop";
// import TawkTo from "./components/Chatcomponents/Message";
import TawkTo from "./components/chatcomponents/Message";
import Loader from "./components/loaderspinnercomponents/Loader";
import "animate.css";
// import { CallAndWhatsapp } from "./components/callcomponents/Call";
import { CallAndWhatsapp } from "./components/callcomponents/Call";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { storeLocationData } from "./redux/slices/locationSlice";
// import store from "./redux/storeConfig/store";

function App() {
  const [geolocation, setGeoLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const fetchLocation = async () => {
    try {
      // const response = await fetch("http://ip-api.com/json/");
      const response = await fetch("https://ipapi.co/json/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const storedCountryCode = localStorage.getItem("country_code");
      const storedCountryName = localStorage.getItem("country_name");
      const storedCityName = localStorage.getItem("city_name");

      if (
        data &&
        data?.countryCode !== storedCountryCode ||
        data?.country !== storedCountryName ||
        data?.city !== storedCityName
      ) {
        dispatch(storeLocationData(data));
      }
      setGeoLocation(data);
    } catch (error) {
      setErrorMessage("Failed to fetch location data.");
    }
  };

  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 3000 });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    fetchLocation();

    // dispatch(fetchLocation());

    return () => clearTimeout(timer);
    // }, [dispatch]);
  }, []);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
      } else {
        setShowModal(true);
        localStorage.setItem("hasVisited", "true");
      }
    } else if (location.pathname === "/") {
      setShowModal(true);
    }
  }, [location, navigate]);

  const handleClose = () => setShowModal(false);

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    handleClose();
  };

  return (
    <>
      <HelmetProvider>
        {/* {loading ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Loader />
          </div>
        ) : ( */}
        <div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <ScrollToTop />
          <CallAndWhatsapp />
          <TopHeader />
          <BottamHeader />
          <TawkTo />
          <Routes>
            {RouteData?.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
          <Footer />
        </div>
        {/* // )} */}
      </HelmetProvider>
    </>
  );
}

export default App;
