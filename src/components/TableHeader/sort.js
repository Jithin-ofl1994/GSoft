import React, { useState } from 'react';
import GenericDropdown from './GenericDropDown';

const Sort = ({ sortOption }) => {
  const [selectedValue, setSelectedValue] = useState('asc');
  const options = [
    { label: 'A-Z', value: 'asc' },
    { label: 'Z-A', value: 'dsc' },
  ];

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
    sortOption(event.target.value);
  };

  return (
    <div>
      <GenericDropdown
        options={options}
        value={selectedValue}
        onChange={handleDropdownChange}
        label="Sort"
      />
    </div>
  );
};

export default Sort;
