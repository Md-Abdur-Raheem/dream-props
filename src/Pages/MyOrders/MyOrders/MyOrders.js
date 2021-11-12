import { Alert, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Paper from '@mui/material/Paper';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Dialog } from '@mui/material';
import { Box, styled } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';



const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [id, setId] = useState('');
    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [deleted, setDeleted] = useState(false);
    const internationalNumberFormat = new Intl.NumberFormat('en-US');
    const { user } = useAuth();


    const handleOpenModal = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const handleDialogClose = () => {
        setOpen(false);
        setId('');
    };
    const handleClickOpen = (id) => {
        setOpen(true);
        setId(id);
    };

    const handleCancelBooking = () => {
        if (id) {
            fetch(`https://peaceful-island-86831.herokuapp.com/orders/${id}`, {
                method: "DELETE",
                headers: {'content-type': 'application/json'}
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        handleDialogClose();
                        handleOpenModal();
                        setDeleted(!deleted);
                    }
                })
            }
            handleDialogClose();
    }


        useEffect(() => {
            fetch(`https://peaceful-island-86831.herokuapp.com/orders?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyOrders(data));
        }, [user.email, deleted]);

    
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
        <Container sx={{ marginTop: 10 }}>
            <Grid
                container
                spacing={{ xs: 2, sm: 2, md: 3 }}
                columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                {
                    myOrders.map(order =>
                        <Grid
                            key={order._id}
                            item
                            xs={12}
                            sm={12}
                            md={4}
                            lg={4}>
                            <Paper
                                elevation={3}
                                sx={{
                                    paddingBottom: 3
                                }}
                            >
                                <img
                                    width="100%"
                                    src={order.appartment.img} alt="">
                                </img>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        color: "#f82a7e"
                                    }}
                                >
                                    <b>Booking Date: {order.date}</b>
                                </Typography>
                                {
                                    order?.status==="Pending" ? <Typography
                                    style={{
                                        textAlign: "center",
                                        color: "orange",
                                    }}
                                    gutterBottom
                                    variant="p"
                                    component="div">
                                    <b>{order?.status}</b>
                                    </Typography>
                                        : order?.status === "Delivered" && <Typography
                                        style={{
                                            textAlign: "center",
                                            color: "green",
                                        }}
                                        gutterBottom
                                        variant="p"
                                        component="div">
                                        <b>{order?.status}</b>
                                        </Typography>
                                }
                                <Typography
                                    style={{
                                        textAlign: "center",
                                        textDecoration: "underline #f82a7e"
                                    }}
                                    gutterBottom
                                    variant="h6"
                                    component="div">
                                    <b>$ {internationalNumberFormat.format(order.appartment.price)}</b>
                                </Typography>
                                <Typography
                                    style={{
                                        lineHeight: 3
                                    }}
                                    variant="body2"
                                    color="text.secondary">
                                    {order.appartment.address}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div">
                                    <b>{order.appartment.state}</b>
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    component="p">
                                    <span style={{ marginRight: 12 }}><i className="fas fa-bed"></i> {order.appartment.beds} beds</span>
                                    <span><i className="fas fa-bath"></i> {order.appartment.baths} baths</span>
                                </Typography>
                                <br />
                                {
                                    order?.status === "Pending" ? <Button
                                    onClick={() => handleClickOpen(order._id)}
                                    sx={{ color: "red" }}
                                    >Cancel Booking</Button>
                                        : <Typography
                                        style={{
                                            textAlign: "center",
                                            color: "#f82a7e",
                                        }}
                                        gutterBottom
                                        variant="p"
                                        component="div">
                                        <b>Thanks for being with us.</b>
                                        </Typography>
                                }
                            </Paper>
                        </Grid>
                    )
                }
                <Dialog
                    open={open}
                    onClose={handleDialogClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sure?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            If you cancel booking all of your booking data will be removed and it can't be restored.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDialogClose}>Cancel</Button>
                        <Button
                            onClick={handleCancelBooking}
                            sx={{ color: "red" }}
                            autoFocus
                        >
                            Confirm delete
                        </Button>
                    </DialogActions>
                </Dialog>
        </Grid>
        <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={openModal}
            onClose={handleClose}
            BackdropComponent={Backdrop}
        >
            <Box sx={style}>
                <h2 style={{color: "#1F6F8B"}}
                    id="unstyled-modal-title"
                    >Success</h2>
                <Alert  id="unstyled-modal-description" severity="success">Booking Cancelled Successfully</Alert>
            </Box>
        </StyledModal>
        </Container>
    );
};


export default MyOrders;