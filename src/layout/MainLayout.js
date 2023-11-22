import React from 'react';
import { Box, styled } from '@mui/material';
import DrawerAppBar from '@components/Header';

const MainStyle = styled('main')(() => ({
  flexGrow: 1,
  minHeight: '100vh',
}));

function MainLayout(props) {
  const { children } = props;
  return (
    <Box>
      <DrawerAppBar />
      <MainStyle>{children}</MainStyle>
    </Box>
  );
}

export default MainLayout;
