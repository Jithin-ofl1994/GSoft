import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCaharacter } from '@slices/character';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'MUI X', col2: 'is awesome' },
  { id: 3, col1: 'Material UI', col2: 'is amazing' },
  { id: 4, col1: 'MUI', col2: '' },
  { id: 5, col1: 'Joy UI', col2: 'is awesome' },
  { id: 6, col1: 'MUI Base', col2: 'is amazing' },
];

const columns = [
  { field: 'id', hide: true },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'race', headerName: 'Race', flex: 0.5 },
  { field: 'gender', headerName: 'Gender', flex: 0.3 },
  { field: 'actions', headerName: 'Actions', flex: 0.2 },
];

const CharacterTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCaharacter());
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default CharacterTable;
