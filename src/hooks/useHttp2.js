import React, { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [status, setStatus] = useState("");
  const sendRequest = useCallback(
   async (configData,responseData) => {
    setIsLoading(true);
    try {
      const response = await fetch(configData.url, {
        method: configData.method ? configData.method : "GET",
        headers: configData.headers ? configData.headers : {},
        body: configData.body ? JSON.stringify(configData.body) : null,
      });

      setStatus(response.statusText);
      if(!response.ok){
        throw new Error("something went wrong");
      }
      const responseData = await response.json();
      applyDate(responseData)
    } catch (error) {
      setIsError(error.message)
    }
    setIsLoading(false)
  },[]);

  return isLoading, isError, status, sendRequest;
};
