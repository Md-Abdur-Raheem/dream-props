import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

function Header(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
    return (
    <React.Fragment>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
            <Header {...props}>
                    <AppBar
                        sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                        }} >
                    <Toolbar>
                        <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        >
                        <MenuIcon />
                        </IconButton>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    fontWeight: "bold",
                                    fontFamily: "Noto Sans",
                                    color: "#1F6F8B",
                                    textAlign:"start"
                                }}>
                            Dream Props
                        </Typography>
                            <NavLink
                                to="/login"
                                style={{
                                    textDecoration: "none",
                                    color: "black"
                                }}
                            >
                                <Button
                                    variant="text"
                                    sx={{
                                        color: "#000",
                                        fontWeight: "bold",
                                        fontFamily: "Noto Sans",
                                        fontSize: 16
                                    }}
                                >Login</Button>
                            </NavLink>
                    </Toolbar>
                </AppBar>
            </Header>
        </Box>
    </React.Fragment>
  );
}