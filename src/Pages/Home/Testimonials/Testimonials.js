import { Container, Typography } from '@mui/material';
import React from 'react';

const Testimonials = () => {
    return (
        <Container
        sx={{
            height: "50vh"
        }}
        >
            <Typography
            variant="h4"
            sx={{
                fontWeight: "bold",
                fontFamily: "Noto Sans",
                color: "#1F6F8B",
                textAlign: "start",
                marginBottom: 3
                }}
            >
                TESTIMONIALS
            </Typography>
        </Container>
    );
};

export default Testimonials;