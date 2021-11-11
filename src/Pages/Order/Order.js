import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Order = () => {
    const { id } = useParams();
    const [ appartment, setAppartment ] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/appartments/${id}`)
            .then(res => res.json())
            .then(data => setAppartment(data))
    },[id])
    return (
        <Box
        sx={{marginTop: 10}}
        >
            <img src={appartment?.img} alt=""></img>
        </Box>
    );
};

export default Order;