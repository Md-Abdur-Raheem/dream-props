import { Alert, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Dialog } from '@mui/material';
import { styled } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';


const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [id, setId] = useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch('https://peaceful-island-86831.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [control])

    const updateToDelivered = id => {
        fetch(`https://peaceful-island-86831.herokuapp.com/orders/${id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({status: "Delivered"})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setControl(!control);
                    handleOpenModal();
                }
            })
    }
    
    const handleOpenModal = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const handleClickOpen = (id) => {
        setOpen(true);
        setId(id);
    };
    const handleDialogClose = () => {
        setOpen(false);
        setId('');
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
                        setControl(!control);
                    }
                })
            }
            handleDialogClose();
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
        <Box sx={{marginTop: 10}}>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    fontFamily: "Noto Sans",
                    color: "#1F6F8B",
                    textAlign: "center",
                    marginBottom: 3
                    }}
            >Manage all orders</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center"><b>#</b></TableCell>
                        <TableCell align="center"><b>Name</b></TableCell>
                        <TableCell align="center"><b>Booking</b></TableCell>
                        <TableCell align="center"><b>Email</b></TableCell>
                        <TableCell align="center"><b>Date</b></TableCell>
                        <TableCell align="center"><b>Address</b></TableCell>
                        <TableCell align="center"><b>Phone No.</b></TableCell>
                        <TableCell align="center"><b>Status</b></TableCell>
                        <TableCell align="center"><b>Action</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {allOrders.map((a, i) => (
                        <TableRow
                        key={i}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center" component="th" scope="row">
                            <b>{i+1}</b>
                        </TableCell>
                        <TableCell align="center" component="th" scope="row">
                            {a.name}
                        </TableCell>
                        <TableCell align="center" sx={{width: "10%"}}>
                            <img width="50%" src={a.appartment.img} alt=""></img>
                            <p><b>{a.appartment.price}</b></p>
                            <p><b>{a.appartment.address}</b></p>
                        </TableCell>
                        <TableCell align="center"><b>{a.email}</b></TableCell>
                        <TableCell align="center">{a.date}</TableCell>
                        <TableCell align="center">{a.address}</TableCell>
                        <TableCell align="center">{a.phone}</TableCell>
                        <TableCell align="center">
                            {
                                a?.status==="Pending" ? <Typography
                                style={{
                                    textAlign: "center",
                                    color: "orange",
                                }}
                                gutterBottom
                                variant="p"
                                component="div">
                                <b>{a?.status}</b>
                                </Typography>
                                    : a?.status === "Delivered" && <Typography
                                    style={{
                                        textAlign: "center",
                                        color: "green",
                                    }}
                                    gutterBottom
                                    variant="p"
                                    component="div">
                                    <b>{a?.status}</b>
                                    </Typography>
                            }
                        </TableCell>
                        <TableCell align="center">
                            {
                                    a.status === "Delivered" || <Button
                                        onClick={()=>updateToDelivered(a._id)}
                                    >Update To Delivered</Button>
                            }
                            <br/>
                            <Button
                            onClick = {()=>handleClickOpen(a._id)}
                            sx={{ color: "red" }}
                            >Delete</Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
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
                            If you delete booking all of your booking data will be removed and it can't be restored.
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
                <Alert  id="unstyled-modal-description" severity="success">Action Completed Successfully</Alert>
            </Box>
        </StyledModal>
        </Box>
    );
};

export default ManageAllOrder;