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

const ManageProducts = () => {
    const [allAppartments, setAllAppartments] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [id, setId] = useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [control, setControl] = useState(false);
    const internationalNumberFormat = new Intl.NumberFormat('en-US');

    useEffect(() => {
        fetch('https://peaceful-island-86831.herokuapp.com/allApartments')
            .then(res => res.json())
            .then(data => setAllAppartments(data))
    }, [control])
    
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
    const handleDelete = () => {
        if (id) {
            fetch(`https://peaceful-island-86831.herokuapp.com/allApartments/${id}`, {
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
            >Manage all properties</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center"><b>#</b></TableCell>
                        <TableCell align="center"><b>Image</b></TableCell>
                        <TableCell align="center"><b>Price</b></TableCell>
                        <TableCell align="center"><b>Address</b></TableCell>
                        <TableCell align="center"><b>Action</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {allAppartments.map((a, i) => (
                        <TableRow
                        key={i}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center" component="th" scope="row">
                            <b>{i+1}</b>
                            </TableCell>
                            <TableCell align="center" sx={{width: "10%"}}>
                            <img width="50%" src={a.img} alt=""></img>
                        </TableCell>
                        <TableCell align="center" component="th" scope="row">
                        <b>$ {internationalNumberFormat.format(a.price)}</b>
                        </TableCell>
                        <TableCell align="center"><b>{a.address}</b></TableCell>
                        <TableCell align="center">
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
                            If you delete this property all the information related to this property will be removed and it can't be restored.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDialogClose}>Cancel</Button>
                        <Button
                            onClick={handleDelete}
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
                <Alert  id="unstyled-modal-description" severity="success">Deleted Successfully</Alert>
            </Box>
        </StyledModal>
        </Box>
    );
};

export default ManageProducts;