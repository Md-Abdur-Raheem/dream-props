import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import PopularProperty from '../PopularProperty/PopularProperty';
import { Container, Typography } from '@mui/material';
import DreamBtn from '../../../styledComponent/DreamBtn';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

const PopularProperties = () => {
    const [appartments, setAppartments] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-island-86831.herokuapp.com/apartments')
            .then(res => res.json())
            .then(data => setAppartments(data))
    }, [])
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <Container
            style={{
                marginBottom: 100
            }}
        >
            <Box
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 50
                    
            }}>
                <Typography
                    variant="h4"
                    sx={{
                        color: '#1F6F8B',
                        textAlign: "start",
                        fontWeight: 'bold',
                        fontFamily: 'Noto Sans'
                    }}
                >
                    POPULAR PROPERTIES
                </Typography>
                <NavLink
                    to="/properties"
                    style={{
                        textDecoration: 'none'
                    }}
                >
                    <DreamBtn>View All Properties</DreamBtn>
                </NavLink>
           </Box>
            <Slider {...settings}>
                {
                    appartments.map(appartment => <PopularProperty key={appartment._id} appartment={appartment}></PopularProperty>)
                }
            </Slider>
      </Container>
    );
};

export default PopularProperties;