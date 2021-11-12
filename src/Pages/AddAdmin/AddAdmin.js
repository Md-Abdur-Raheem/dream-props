import { Alert, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import DreamBtn from '../../styledComponent/DreamBtn';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import AllAdmin from '../AllAdmin/AllAdmin';

const AddAdmin = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const inputStyles = {
        width: "280px",
        padding: '15px 20px',
        border: '1px solid #ac2af8',
        marginRight: 5
    }
    const clickStyle = e => {
        e.preventDefault();
        e.target.style.outline = "none";
    }
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        fetch(`https://peaceful-island-86831.herokuapp.com/users`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    handleOpen();
                    reset();
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
        <Container sx={{marginTop: 10}}>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    fontFamily: "Noto Sans",
                    color: "#1F6F8B",
                    textAlign: "center",
                    marginBottom: 3
                    }}
            >Add an admin</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input onClick={clickStyle} style={inputStyles} type="email" placeholder="Email" {...register("email", { required: true })} />
                
                <DreamBtn>Make Admin</DreamBtn>

                {errors.exampleRequired && <span>This field is required</span>}
      
            </form>
            <br/>
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
                    <Alert  id="unstyled-modal-description" severity="success">Admin Made Successfully</Alert>
                </Box>
            </StyledModal>
            <AllAdmin></AllAdmin>
        </Container>
    );
};

export default AddAdmin;