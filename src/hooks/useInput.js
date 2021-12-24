import { useState } from "react";

function useInput(validData) {
  const [enteredInput, setEnteredInput] = useState("");
  const [IsTouched, setIsTouched] = useState(false);

  const validValue = validData(enteredInput);
  const hasError = !validValue && IsTouched;

  const changeHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);
    setEnteredInput(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setEnteredInput("");
  };
  return {
    value: enteredInput,
    changeHandler,
    blurHandler,
    hasError,
    isValid :validValue,
    reset,
  };
}

export default useInput;
