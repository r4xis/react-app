import { useState, useEffect } from "react";

const FetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(fetchApi, []);

  return [data, isLoading];
};

export default FetchData;
