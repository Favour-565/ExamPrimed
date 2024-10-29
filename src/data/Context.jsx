/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import useAuthStore from "./stores/authStore";

export const GlobalState = createContext({});

const DataProvider = ({ children }) => {
  const [nav, setNav] = useState(false);
  let handleCapitalize = (word) => {
    let splitter = word.trim().split(" ");
    let firstCap = splitter[0].split("");
    let remaining = splitter.slice(1, splitter.length).join(" ");

    let firstCapOne = firstCap[0].toUpperCase();
    let firstCapTwo = firstCap.slice(1, firstCap.length).join("");

    let joinFirst = `${firstCapOne}${firstCapTwo}`;

    return `${joinFirst} ${remaining}`;
  };

  let numberWithCommas = (x) => {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : x;
  };

  const toggleNav = () => {
    setNav(!nav);
  };

  let auth = useAuthStore(),
    [msisdn, setMsisdn] = useState(null),
    [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        console.log({ data }, "fetch");
        setCountry(data.country_name);
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };

    fetchCountry();
  }, []);

  useEffect(() => {
    const fetchNetwork = async () => {
      try {
        const response = await axios.post(
          "https://api.examprimed.com/index.php",
          {
            action: "GRW",
            msisdn: auth?.user?.telephone || "",
          },
          {
            headers: {
              Authorization: null,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          },
        );
        console.log({ data: response?.data }, "network");
        setMsisdn(response?.data);
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };
    if (auth?.user) fetchNetwork();
  }, [auth?.user]);

  let nairaSign = <span className="fontInherit">&#8358;</span>;
  let nairaSignNeutral = "₦";

  const state = {
    handleCapitalize,

    numberWithCommas,

    auth,
    nav,
    toggleNav,
    msisdn,
    nairaSign,
    nairaSignNeutral,
    country,
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};

export default DataProvider;
