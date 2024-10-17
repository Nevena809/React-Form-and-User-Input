import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [eneteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(eneteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: eneteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: didEdit && !valueIsValid,
  };
}
