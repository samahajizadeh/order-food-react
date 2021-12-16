import { useCallback, useReducer } from "react";

const httpReduce = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: null,
      status: "pending",
      error: null,
    };
  }
  if (action.type === "SUCCESS") {
    return {
      data: action.data,
      status: "completed",
      error: null,
    };
  }
  if (action.type === "ERROR") {
    return {
      data: null,
      status: "completed",
      error: action.errorMessage,
    };
  }
  return state;
};
const useHttp = (requestFunction, startWithPending = false) => {
  const [httpState, distpatch] = useReducer(httpReduce, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback( async (requestData) => {
    distpatch({ type: "SEND" });

    try {
      const responseData = await requestFunction(requestData);
      distpatch({ type: "SUCCESS", data: responseData });
    } catch (error) {
      distpatch({
        type: "ERROR",
        errorMessage: error.message || "Something went wrong",
      });
    }
  },[requestFunction]);

  return{
    sendRequest,
      ...httpState
  }
};

export default useHttp;