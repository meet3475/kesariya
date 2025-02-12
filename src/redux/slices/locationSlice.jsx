import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    country_code: localStorage.getItem("country_code") || "",
    country_name: localStorage.getItem("country_name") || "",
    city_name: localStorage.getItem("city_name") || "",
  },
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    storeLocationData: (state, action) => {
      const data = action?.payload;

      const updatedState = { ...state.value };

      // For ip-api.co/json API
      // if (data.countryCode && data.countryCode !== localStorage.getItem("country_code")) {
      //   localStorage.setItem("country_code", data.countryCode);
      //   updatedState.country_code = data.countryCode;
      // }
      // if (data.country && data.country !== localStorage.getItem("country_name")) {
      //   localStorage.setItem("country_name", data.country);
      //   updatedState.country_name = data.country;
      // }

      // For ipapi.com/json API
      if (data.country_code && data.country_code !== localStorage.getItem("country_code")) {
        localStorage.setItem("country_code", data.country_code);
        updatedState.country_code = data.country_code;
      }
      if (data.country_name && data.country_name !== localStorage.getItem("country_name")) {
        localStorage.setItem("country_name", data.country_name);
        updatedState.country_name = data.country_name;
      }
      if (data.city && data.city.toLowerCase() !== localStorage.getItem("city_name")) {
        localStorage.setItem("city_name", data.city.toLowerCase());
        updatedState.city_name = data.city.toLowerCase();
      }

      state.value = updatedState; // Update state.value once at the end
    },
  },
});

export const { storeLocationData } = locationSlice.actions;

export default locationSlice.reducer;
