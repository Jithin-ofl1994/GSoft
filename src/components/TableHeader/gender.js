import React, { useState } from 'react';
import GenericDropdown from './GenericDropDown';

const Gender = ({ getGender }) => {
  const [selectedValue, setSelectedValue] = useState('any');
  const options = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Any', value: 'any' },
  ];

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
    getGender(event.target.value);
  };

  return (
    <GenericDropdown
      options={options}
      value={selectedValue}
      onChange={handleDropdownChange}
      label="Gender"
    />
  );
};

export default Gender;
