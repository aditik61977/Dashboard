import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.css';

const Header = () => {
  return (
    <AppBar position="static" className={styles.header} elevation={0}>
      <Toolbar className={styles.toolbar}>
        <Box display="flex" alignItems="center" className={styles.logoSection}>
          <img src="https://i.ibb.co/6bQ7QwM/iet-logo.jpg" alt="IET Logo" className={styles.logo} />
          <Box ml={2}>
            <Typography variant="h6" className={styles.instituteName}>
              Institute Of Engineering and Technology
            </Typography>
          </Box>
        </Box>
        <Box className={styles.searchSection}>
          <InputBase
            placeholder="Search…"
            classes={{ root: styles.inputRoot, input: styles.inputInput }}
            startAdornment={<SearchIcon className={styles.searchIcon} />}
          />
        </Box>
        <Box className={styles.iconSection}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <PersonIcon />
          </IconButton>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 