import { Button, Stack, Tooltip } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import useTheme from '../../hooks/useTheme';

const NavbarIcon = () => {

  const theme = useTheme();

  const iconStyle = {
    minWidth: "0",
    padding: "4px",
    borderRadius: "10px"
  };

  return (
    <Stack spacing={1} direction="row">
      <Tooltip title="My Github profile">
        <Button 
          target="_blank"
          href="https://github.com/omailhot"
          variant="outlined"
          sx={iconStyle}
          aria-label="github profile">
            <GitHubIcon/>
        </Button>
      </Tooltip>
      
      <Tooltip title="My LinkedIn profile">
        <Button 
          target="_blank"
          href="https://www.linkedin.com/in/omailhot/"
          variant="outlined"
          sx={iconStyle}
          aria-label="linkedin profile">
            <LinkedInIcon/>
        </Button>
      </Tooltip>

      <Tooltip title="Theme">
        <Button 
          variant="outlined"
          sx={iconStyle}
          onClick={theme.themeHandler}
          aria-label="theme switch">
            {theme.theme === "dark" ? 
              <DarkModeOutlinedIcon/> : <LightModeOutlinedIcon/>
            }
        </Button>
      </Tooltip>
    </Stack>
  )
}

export default NavbarIcon;