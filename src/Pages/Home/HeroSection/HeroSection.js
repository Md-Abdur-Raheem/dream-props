import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import heroBanner from '../../../media/banner.png'
import DreamBtn from '../../../styledComponent/DreamBtn';

const HeroSection = () => {
    const heroStyle = {
        backgroundImage: `url(${heroBanner})`,
        backgroundColor: "#666666",
        backgroundBlendMode: "lighten",
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        marginTop: 64,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: 150
    }

    return (
        <Box style={heroStyle}>
            <Typography
            variant="h4"
            sx={{
                color: "#fff",
                marginBottom: 3,
                fontFamily: "Noto Sans",
                fontWeight: 'bold',
                fontSize: 50
                }}
            >FIND A PERFECT DREAM HOUSE</Typography>
            <Box>
                <input
                    style={{
                        backgroundColor: "#fff",
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        width: '100%',
                        height: 50,
                        borderRadius: 30,
                        padding: "10px 20px",
                        marginRight: 5,
                        marginBottom: 5,
                    }}
                    placeholder="Your ZIP Code or City. e.g. New York"
                />
                <DreamBtn>Search</DreamBtn>
            </Box>
            <Typography
                variant="body1"
                sx={{
                    color: "#fff",
                    marginTop: 3,
                }}
            >
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br/> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean
            </Typography>
        </Box>
    );
};

export default HeroSection;