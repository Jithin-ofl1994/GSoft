import React, { useState, useCallback } from 'react';
import GenericDropdown from './GenericDropDown';

const Sort = ({ sortOption }) => {
  const [selectedValue, setSelectedValue] = useState('asc');
  const options = [
    { label: 'A-Z', value: 'asc' },
    { label: 'Z-A', value: 'dsc' },
  ];

  const handleDropdownChange = useCallback(
    (event) => {
      setSelectedValue(event.target.value);
      sortOption(event.target.value);
    },
    [sortOption]
  );

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

export default React.memo(Sort);