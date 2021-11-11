import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PopularProperty from '../../Home/PopularProperty/PopularProperty'

const Properties = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allApartments')
            .then(res => res.json())
            .then(data => setProperties(data))
    },[])
    return (
        <Container sx={{marginTop: 10}}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            {
                    properties.map(property =>
                    <Grid
                    key={property._id}
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                >
                    <PopularProperty appartment={property}></PopularProperty>
                </Grid>)
            }
            </Grid>
        </Container>
    );
};

export default Properties;