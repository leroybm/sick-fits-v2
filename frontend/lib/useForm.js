import { useState } from 'react';

export default function useForm(initialState = {}) {
  // Create in a state object for inputs
  const [inputs, setInputs] = useState(initialState);

  function handleChange(event) {
    let { value, name, type } = event.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = event.target.files;
    }

    setInputs({
      // Copying existent state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initialState);
  }

  function clearForm() {
    const blankState = Object.entries(inputs).map(([key]) => [key, '']);
    setInputs(Object.fromEntries(blankState));
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
