import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DreamBtn from '../../../styledComponent/DreamBtn';
import { NavLink } from 'react-router-dom';

const PopularProperty = ({ appartment }) => {
   const { price, address, state, beds, baths, img } = appartment;
    return (
        <Card sx={{
            maxWidth: 500,
            textAlign: "start",
            fontFamily: "Noto Sans"
        }}>
                <CardMedia
                    component="img"
                    height="340"
                    width="500"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography
                        style={{
                            borderBottom: '2px solid #f82a7e',
                            width: 'fit-content',
                        }}
                        gutterBottom
                        variant="h6"
                        component="div">
                        <b>$ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b>
                    </Typography>
                    <Typography
                         style={{
                            lineHeight: 3
                        }}
                        variant="body2"
                        color="text.secondary">
                        {address}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div">
                        <b>{state}</b>
                    </Typography>

                    <Typography
                        gutterBottom
                        variant="body2"
                        component="p">
                        <span style={{ marginRight: 12 }}><i className="fas fa-bed"></i> {beds} beds</span>
                        <span><i className="fas fa-bath"></i> {baths} baths</span>
                    </Typography>
                    <br />
                    <NavLink to="/"
                        style={{
                            textDecoration: 'none',
                            marginLeft: "31%"
                        }}>
                        <DreamBtn>Order</DreamBtn>
                    </NavLink>
            </CardContent>
      </Card>
    );
};

export default PopularProperty;