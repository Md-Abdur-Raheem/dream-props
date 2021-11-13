import { Button, Container } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container sx={{marginTop: 10}}>
            <h1>404 not found</h1>
            <NavLink style={{textDecoration:"none"}} to="/home"><Button>Back to home</Button></NavLink>
        </Container>
    );
};

export default NotFound;