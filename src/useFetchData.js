import { useEffect, useState } from "react";

export const useFetchData = (country) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (country) {
      fetchDataFromAPI();
    } else {
      fetchDataFromLocalstorage();
    }
  }, []);

  const fetchDataFromAPI = () => {
    let url = "https://restcountries.com/v3.1/all";

    setIsLoading(true);

    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          //Country page
          setData(data[0]);
        } else {
          //Homepage
          setData(data);
          setFilteredData(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const fetchDataFromLocalstorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));

    if (data) {
      setData(data);
      setFilteredData(data);
    } else {
      fetchDataFromAPI();
    }
  };

  return {
    data,
    filteredData,
    setFilteredData,
    isLoading,
    isError,
  };
};
