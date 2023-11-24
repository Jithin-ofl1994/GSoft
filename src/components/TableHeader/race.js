import React, { useState } from 'react';
import GenericDropdown from './GenericDropDown';

const Race = ({ race }) => {
  const [selectedValues, setSelectedValues] = useState(['all']);

  const options = useMemo(
    () => [
      { label: 'All', value: 'all' },
    { label: 'Human', value: 'Human' },
    { label: 'Elf', value: 'Elf' },
    { label: 'Hobbit', value: 'Hobbit' },
    { label: 'Orc', value: 'Orc' },
    { label: 'Goblin', value: 'Goblin' },
    ],
    []
  );

  const handleDropdownChange = useCallback(
    (event) => {
      const selected = event.target.value || [];
    setSelectedValues(selected);
    race(selected);
    },
    [race]
  );


  return (
    <GenericDropdown
      options={options}
      value={selectedValues}
      onChange={handleDropdownChange}
      label="Race"
      isMultiSelect
    />
  );
};

export default Race;
