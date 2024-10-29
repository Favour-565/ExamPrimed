import axios from "axios";

export const TOKEN = "AUTH_TOKEN";

export const SetAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
    axios.defaults.headers.common["frontend-source"] = "webuser";
  } else {
    delete axios.defaults.headers.common["Authorization"];
    delete axios.defaults.headers.common["frontend-source"];
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const useURL = import.meta.env.DEV
  ? "http://localhost:9999"
  : import.meta.env.VITE_BASE_URL;

export const SetDefaultHeaders = () => {
  axios.defaults.baseURL = useURL;
  axios.defaults.headers.common["frontend-source"] = "webuser";
};
