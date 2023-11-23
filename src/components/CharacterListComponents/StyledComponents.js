import { styled } from '@mui/system';
import { Box, Grid } from '@mui/material';

export const TableContainer = styled('div')({
  width: '100%',
  '& .action_handler': {
    cursor: 'pointer',
  },
});

export const DropDownStyle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& .MuiInputBase-root': {
    width: '65%',
  },
});

export const TableHeaderContainer = styled(Box)({
  flexGrow: 1,
  paddingBottom: '10px',
});

export const ButtonContainer = styled(Grid)({
  display: 'flex',
  '& .MuiStack-root': {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
  },
});
