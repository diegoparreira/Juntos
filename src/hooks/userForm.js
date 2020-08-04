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

  return {
    values,
    setValue,
    clearForm,
  };
}

export default useForm;
