import React from 'react';
import { Typography, Button, styled } from '@mui/material';
import { Box } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';
import { green } from '@mui/material/colors';
import image from '../images/404.svg';

// style
const BoxStyle = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.sm,
  minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight * 2}px)`,
  margin: '0 auto',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '& .MuiTypography-paragraph': {
    marginTop: 20,
    marginBottom: 20,
  },
  '& img': {
    width: '100%',
    maxWidth: 400,
    objectFit: 'cover',
  },
  '& .MuiButton-root': {
    backgroundColor: green,
    color: '#fff',
    marginTop: 40,
  },

  [theme.breakpoints.down('sm')]: {
    '& .MuiTypography-h3': { fontSize: 30, fontWeight: 500 },
  },
}));

const ErrorPage = () => (
  <BoxStyle>
    <Typography variant="h3">Sorry, page not found!</Typography>

    <Typography paragraph color="textSecondary">
      Sorry, we couldn’t find the page you’re looking for. Perhaps
      you’ve mistyped the URL? Be sure to check your spelling.
    </Typography>

    <img src={image} alt="404 Error" loading="lazy" />

    <Button
      to="/"
      variant="contained"
      component={RouterLink}
      size="large"
      disableElevation
    >
      Go to Home
    </Button>
  </BoxStyle>
);

export default ErrorPage;
