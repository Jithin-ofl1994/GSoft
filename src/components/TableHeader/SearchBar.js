import React, { useState } from 'react';
import { Container, InputAdornment, TextField } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ searchQuery }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    searchQuery(event.target.value);
  };

  return (
    <TextField
      id="search"
      type="search"
      label="Search"
      value={searchTerm}
      onChange={handleChange}
      sx={{ width: 600 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
