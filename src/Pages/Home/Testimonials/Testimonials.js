import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Paper from '@mui/material/Paper';
import user from '../../../media/user.png'
import Rating from 'react-rating';
import { Box } from '@mui/system';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
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
      };
    
    useEffect(() => {
        fetch('https://peaceful-island-86831.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    

    return (
        <Container
        sx={{
            marginBottom: 30,
            marginTop: 20,
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
            <Slider {...settings}>
                {
                    reviews.map(review => <Paper
                        key={review._id}
                        sx={{
                            padding: 3,
                            height: 350
                        }}
                        elevation={3} >
                        <img
                            src={user}
                            width="30%"
                            alt="">
                        </img>
                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: "start",
                                fontFamily: 'Noto Sans',
                                color: '#1F6F8B'
                            }}
                        >{review?.name}</Typography>
                        <Box style={{marginLeft: "-70%"}}>
                            <Rating
                                emptySymbol={<i style={{color: 'goldenrod'}} className="far fa-star"></i>}
                                fullSymbol={<i style={{color: 'goldenrod'}} className="fas fa-star"></i>}
                                initialRating={review?.rating}
                                readonly
                            />
                        </Box>
                        <br />
                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: "start",
                                fontFamily: 'Noto Sans',
                            }}
                        >{review?.description}</Typography>
                    </Paper>)
                }
        </Slider>
        </Container>
    );
};

export default Testimonials;