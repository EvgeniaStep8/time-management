import { useState } from "react";

const useInputsChange = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  const resetForm = () => {
    setValues(initialValues);
  }

  return { values, resetForm, handleChange };
};

export default useInputsChange;
