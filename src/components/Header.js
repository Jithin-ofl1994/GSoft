import  React, {memo} from 'react';
import { useMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const DrawerAppBar = () => {
  const isPathnameMatched = useMatch('/details');
  const charcterInfo = useSelector(
    (state) => state.character.selectedCharacter,
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {`Characters ${
              isPathnameMatched ? charcterInfo?.name : ''
            }`}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default memo(DrawerAppBar);
