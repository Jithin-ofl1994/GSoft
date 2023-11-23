import React, { useState } from 'react';
import { Grid, Button, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {
  TableHeaderContainer,
  ButtonContainer,
} from '../CharacterListComponents/StyledComponents';

import Sort from './Sort';
import Gender from './Gender';
import Race from './Race';
import SearchBar from './SearchBar';

const TableHeader = ({ getFilterValues }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortValue, setSortValue] = useState('asc');
  const [genderValue, setGenderValue] = useState('any');
  const [raceValue, setRaceValue] = useState(['all']);

  const submitFilter = () => {
    getFilterValues({
      searchValue: searchQuery,
      sortValue,
      genderValue,
      raceValue,
    });
  };
  return (
    <TableHeaderContainer>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <SearchBar searchQuery={(query) => setSearchQuery(query)} />
        </Grid>
        <Grid item xs={3}>
          <Sort sortOption={(option) => setSortValue(option)} />
        </Grid>
        <Grid item xs={4}>
          <Gender
            getGender={(genderVal) => setGenderValue(genderVal)}
          />
        </Grid>
        <Grid item xs={4}>
          <Race race={(raceVal) => setRaceValue(raceVal)} />
        </Grid>
        <ButtonContainer item xs={4}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => submitFilter()}
            >
              Submit
            </Button>
          </Stack>
        </ButtonContainer>
      </Grid>
    </TableHeaderContainer>
  );
};

export default TableHeader;
