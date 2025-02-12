import React from "react";
import { Homepage } from "../views/home/Home";
import { Blog } from "../views/blog/Blog";
import { CareerDetail } from "../views/careers/CareerDetail";
import { TermsAndCondition } from "../views/terms/TermsAndCondition";
import { RefundAndReturn } from "../views/terms/RefundAndReturn";
import { Enquiry } from "../views/terms/Enquiry";
import { MarketArea } from "../views/terms/MarketArea";
import { CustmerReview } from "../views/terms/CustomerReview";
import CategoriesDetailpage from "../views/categories/CategoriesDetail";
import { storageData } from "../config/config";
import { Aboutus } from "../views/aboutus/AboutUs";
import { BlogDetail } from "../views/blog/BlogDetail";
import { Career } from "../views/careers/Career";
import Categories from "../views/categories/Categories";
import { Contectus } from "../views/contactus/ContactUs";
import { Faq } from "../views/faq/Faq";
import { PrivacyPolicy } from "../views/privacypolicy/PrivancyPolicy";

const selectedLocation =
  storageData?.locationReplace?.length > 0
    ? storageData?.locationReplace?.toLowerCase()?.trim() != "surat"
      ? "/" + storageData?.locationReplace.toLowerCase()
      : ""
    : "";

export const RouteData = [
  {
    path: `/`,
    element: <Homepage />,
  },
  {
    path: `${selectedLocation}/`,
    element: <Homepage />,
  },
  {
    path: "/about/",
    element: <Aboutus />,
  },
  {
    path: "/categories/",
    element: <Categories />,
  },
  {
    path: `/:cityName/categories/:categoryName/`,
    element: <Categories />,
  },
  {
    path: `/:cityName/categories-detail/:subCategoryName`,
    element: <CategoriesDetailpage selectedLocation={selectedLocation} />,
  },
  {
    path: "/career/",
    element: <Career />,
  },
  {
    path: "/contact-us/",
    element: <Contectus />,
  },
  {
    path: "/privacy-policy-2/",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-condition/",
    element: <TermsAndCondition />,
  },
  {
    path: "/return-policy/",
    element: <RefundAndReturn />,
  },
  {
    path: "/enquiry-ktc/",
    element: <Enquiry />,
  },
  {
    path: "/enquiry-ktc/:name",
    element: <Enquiry />,
  },
  {
    path: "/market-area/",
    element: <MarketArea />,
  },
  {
    path: "/customer-review/",
    element: <CustmerReview />,
  },
  {
    path: "/career/:id",
    element: <CareerDetail />,
  },
  {
    path: "/faq/",
    element: <Faq />,
  },
  {
    path: "/blog/",
    element: <Blog />,
  },
  {
    path: "/blog/:name",
    element: <BlogDetail />,
  },
  {
    path: "/:year/:month/:day/:name",
    element: <BlogDetail />,
  },
];
