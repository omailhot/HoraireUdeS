import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from './Logo';
import NavbarIcon from './NavbarIcon';

export default function MenuAppBar() {
  return (
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>
          <NavbarIcon />
        </Toolbar>
      </AppBar>
  );
}