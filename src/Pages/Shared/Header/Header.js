import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
    const { user, logOutUser } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        handleClose();
        logOutUser();
    }
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
                        <Container>
                            <Toolbar>
                                <NavLink
                                    to="/home"
                                    style={{
                                        flexGrow: 1,
                                        textDecoration: "none",
                                        color: "#1F6F8B"
                                    }}
                                >
                                    <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        
                                        fontWeight: "bold",
                                        fontFamily: "Noto Sans",
                                        color: "#1F6F8B",
                                        textAlign:"start"
                                    }}>
                                        Dream Props
                                    </Typography>
                                    </NavLink>
                                    <NavLink
                                        to="/properties"
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
                                        >Properties</Button>
                                    </NavLink>
                                {
                                    user.email ? 
                                        <Box>
                                            <Button
                                                id="basic-button"
                                                aria-controls="basic-menu"
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                                sx={{
                                                    color: "#000",
                                                    fontWeight: "bold",
                                                    fontFamily: "Noto Sans",
                                                    fontSize: 16
                                                }}
                                            >
                                                Dashboard
                                            </Button>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <NavLink
                                                    to="/pay"
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "black"
                                                    }}
                                                >
                                                    <MenuItem onClick={handleClose}>Pay</MenuItem>
                                                </NavLink>
                                                <NavLink
                                                    to="/myOrders"
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "black"
                                                    }}
                                                >
                                                    <MenuItem onClick={handleClose}>My orders</MenuItem>
                                                </NavLink>
                                                <NavLink
                                                    to="/addReview"
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "black"
                                                    }}
                                                >
                                                    <MenuItem onClick={handleClose}>Review</MenuItem>
                                                </NavLink>
                                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                            </Menu>
                                            <Button
                                            onClick={logOutUser}
                                            variant="text"
                                            sx={{
                                                color: "#000",
                                                fontWeight: "bold",
                                                fontFamily: "Noto Sans",
                                                fontSize: 16
                                            }}
                                            >Logout</Button>
                                        </Box>
                                        :
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
                                }
                                </Toolbar>
                    </Container>
                </AppBar>
            </Header>
        </Box>
    </React.Fragment>
  );
}