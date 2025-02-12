export const BASE_URL = "https://kesariya.sridixtechnology.com/admin/api/";

export const HEADER_API = `${BASE_URL}category`;
export const HOME_API = `${BASE_URL}home`;
export const CONTACT_FORM_API = `${BASE_URL}contactform`;
export const REACHUS_FORM_API = `${BASE_URL}reachusform`;
// export const BLOG_API = `${BASE_URL}blog`;
export const BLOG_API = `${BASE_URL}blogpagination`;
export const BLOG_DETAIL_API = `${BASE_URL}blogdeatails`;
export const PRODUCT_API = `${BASE_URL}product`;
export const CATEGORIES_API = `${BASE_URL}categories`;
export const CATEGORIE_DETAIL_API = `${BASE_URL}categorydetail`;
export const PRODUCTSPAGE_API = `${BASE_URL}products`;
export const CAREER_API = `${BASE_URL}career`;
export const CAREERDETAIL_API = `${BASE_URL}careerdetail`;
export const ABOUTUS_API = `${BASE_URL}aboutus`;
export const APPLYCARRERFORM_API = `${BASE_URL}applyform`;
export const PRODUCTDETAIL_API = `${BASE_URL}product_details`;
export const CONTACTSPAGE_API = `${BASE_URL}contacts`;
export const ENQUIRYMODEL_API = `${BASE_URL}enquiryform`;
export const PRIVANCYPOLICY_API = `${BASE_URL}privacypolicy`;
export const TERMANDCONDITION_API = `${BASE_URL}termscondition`;
export const FAQ_API = `${BASE_URL}faq`;
export const REFUNDS_API = `${BASE_URL}refunds`;
export const ENQUIRY_API = `${BASE_URL}enquire`;
export const ENQUIRYFORM_API = `${BASE_URL}enquiry`;
export const MARKETAREA_API = `${BASE_URL}marketarea`;
export const CUSTMERREVIEW_API = `${BASE_URL}marketarea`;
export const REVIEWFORM_API = `${BASE_URL}reviewform`;
export const COUNTRY_API = `${BASE_URL}get-countries`;
export const COUNTRYWITHCODE_API = `${BASE_URL}getcountry`;
export const STATE_API = `${BASE_URL}get-states`;
export const CITY_API = `${BASE_URL}get-cities`;
export const CONTRYCODE_API = `${BASE_URL}verifydata`;
export const SEARCH_API = `${BASE_URL}search`;
export const HOME_SEO_API = `${BASE_URL}settings`;
export const ALL_PAGE_SEO_API = `${BASE_URL}seomodule`;
export const storageData = {
  locationDynamic: "LOCATION_DY",
  locationReplace:
    localStorage?.getItem("country_name") === "India"
      ? localStorage?.getItem("city_name")
      : localStorage?.getItem("country_name"),
};
