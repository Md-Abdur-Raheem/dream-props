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
                                        <Button
                                            onClick={logOutUser}
                                            variant="text"
                                            sx={{
                                                color: "#000",
                                                fontWeight: "bold",
                                                fontFamily: "Noto Sans",
                                                fontSize: 16
                                            }}
                                        >Log Out</Button>
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