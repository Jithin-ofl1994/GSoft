import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DropDownStyle } from '../CharacterListComponents/StyledComponents';

const GenericDropdown = ({
  options,
  value,
  onChange,
  label,
  isMultiSelect,
}) => (
  <DropDownStyle>
    <label>{label}</label>
    <Select
      value={value}
      onChange={onChange}
      label={label}
      multiple={isMultiSelect}
      placeholder={label}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </DropDownStyle>
);

export default GenericDropdown;
