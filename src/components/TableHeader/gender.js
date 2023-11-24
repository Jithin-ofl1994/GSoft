import React, { useState, useMemo, useCallback } from 'react';
import GenericDropdown from './GenericDropDown';

const Gender = ({ getGender }) => {
  const [selectedValue, setSelectedValue] = useState('any');

  const options = useMemo(
    () => [
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' },
      { label: 'Any', value: 'any' },
    ],
    []
  );

  const handleDropdownChange = useCallback(
    (event) => {
      setSelectedValue(event.target.value);
      getGender(event.target.value);
    },
    [getGender]
  );

  return (
    <GenericDropdown
      options={options}
      value={selectedValue}
      onChange={handleDropdownChange}
      label="Gender"
    />
  );
};

export default React.memo(Gender);