import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import DreamBtn from '../../styledComponent/DreamBtn';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';

const Order = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [appartment, setAppartment] = useState({});
    const internationalNumberFormat = new Intl.NumberFormat('en-US');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetch(`https://peaceful-island-86831.herokuapp.com/appartments/${id}`)
            .then(res => res.json())
            .then(data => setAppartment(data))
    }, [id])
    const { price, address, state, beds, baths, img } = appartment;

    const inputStyles = {
        width: "280px",
        padding: '15px 20px',
        border: '1px solid #ac2af8'
    }
    const clickStyle = e => {
        e.preventDefault();
        e.target.style.outline = "none";
    }

    const onSubmit = data => {
        const date = new Date().toLocaleDateString();
        const { name, email, address, phone } = data;
        const status = "Pending";
        const order = { name, email, date, address, phone, appartment, status };
        fetch('https://peaceful-island-86831.herokuapp.com/orders', {
            method: "POST",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    handleOpen();
                }
            })
        
    }
    const StyledModal = styled(ModalUnstyled)`
            position: fixed;
            z-index: 1300;
            right: 0;
            bottom: 0;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            `;
    const Backdrop = styled('div')`
            z-index: -1;
            position: fixed;
            right: 0;
            bottom: 0;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            -webkit-tap-highlight-color: transparent;
            `;
    const style = {
            width: 400,
            bgcolor: '#fff',
            p: 2,
            px: 4,
            pb: 3,
    };
    

    return (
        <Container sx={{marginTop: 20}}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 12, sm: 12, md: 12, lg:12 }}
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                >
                    <img
                        src={img}
                        width="100%"
                        alt=""
                    ></img>
                    
                    <Typography
                        style={{
                            textAlign: "center",
                            textDecoration: "underline #f82a7e"
                        }}
                        gutterBottom
                        variant="h6"
                        component="div">
                        <b>$ {internationalNumberFormat.format(price)}</b>
                        
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
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                >

                <Container
                        sx={{marginTop: 10}}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: "bold",
                                    fontFamily: "Noto Sans",
                                    color: "#1F6F8B",
                                    textAlign: "center",
                                    marginBottom: 3
                                    }}
                            >Book Order</Typography>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                
                                <input onClick={clickStyle} style={inputStyles} type="text" defaultValue={user.displayName} placeholder="Name" {...register("name", { required: true })} />
                                <br /><br />
                            
                                <input onClick={clickStyle} style={inputStyles} type="email" defaultValue={user.email} placeholder="Email" {...register("email", { required: true })} />
                                <br/><br/>
                                
                                <input onClick={clickStyle} style={inputStyles} type="text" placeholder="Address" {...register("address", { required: true })} />
                            <br /><br />
                            
                                <input onClick={clickStyle} style={inputStyles} type="number" placeholder="Phone Number" {...register("phone", { required: true })} />
                                <br/><br/>
                                {errors.exampleRequired && <span>This field is required</span>}
                    
                                <DreamBtn>Confirm Booking</DreamBtn>
                            </form>
                            <br/>
                        </Container>
                                </Grid>
                        </Grid>
                        <StyledModal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={open}
                            onClose={handleClose}
                            BackdropComponent={Backdrop}
                        >
                            <Box sx={style}>
                                <h2 style={{color: "#1F6F8B"}}
                                    id="unstyled-modal-title"
                                    >Success</h2>
                                <Alert  id="unstyled-modal-description" severity="success">Booking Confirmed Successfully</Alert>
                            </Box>
                        </StyledModal>
                </Container>
    );
};

export default Order;