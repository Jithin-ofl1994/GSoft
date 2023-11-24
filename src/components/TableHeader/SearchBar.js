import React, { useState, useCallback, useMemo } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ searchQuery }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = useCallback((event) => {
    const value = event.target.value;
    setSearchTerm(value);
    searchQuery(value);
  }, [searchQuery]);

  const searchBarComponent = useMemo(() => (
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
  ), [searchTerm, handleChange]);

  return searchBarComponent;
};

export default React.memo(SearchBar);
