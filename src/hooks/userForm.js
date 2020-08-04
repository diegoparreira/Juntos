import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  const clearForm = () => {
    setValues(initialValues);
  };

  const handleSubmit = (event, categories, setCategories) => {
    event.preventDefault();
    setCategories([...categories, values]);
    clearForm(initialValues);
  };

  return {
    values,
    setValue,
    handleSubmit,
  };
}

export default useForm;
