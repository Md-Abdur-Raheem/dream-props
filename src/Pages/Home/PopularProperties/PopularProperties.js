import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import PopularProperty from '../PopularProperty/PopularProperty';
import { Container, Typography } from '@mui/material';
import DreamBtn from '../../../styledComponent/DreamBtn';
import { Box } from '@mui/system';

const PopularProperties = () => {
    const [appartments, setAppartments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/apartments')
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
                <DreamBtn>View All Properties</DreamBtn>
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