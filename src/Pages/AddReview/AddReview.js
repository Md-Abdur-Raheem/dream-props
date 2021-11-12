import { Alert, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import DreamBtn from '../../styledComponent/DreamBtn';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';

const AddReview = () => {
    const { user } = useAuth();
    const [value, setValue] = React.useState(0);
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const inputStyles = {
        width: "280px",
        padding: '15px 20px',
        border: '1px solid #ac2af8'
    }
    const clickStyle = e => {
        e.preventDefault();
        e.target.style.outline = "none";
    }
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const review = { ...data, email: user.email, rating: value };
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    handleOpenModal();
                    reset();
                    setValue(0);
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
            >Add A Review</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input onClick={clickStyle} style={inputStyles} defaultValue={user.displayName} type="text" placeholder="Name" {...register("name", { required: true })} />
                <br /><br/>
                <textarea onClick={clickStyle} style={inputStyles} cols="20" rows="20" type="text" placeholder="Add Description" {...register("description", { required: true })} />
                <br />
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                    >
                    <Typography
                        component="legend"
                        sx={{
                            color: "#f82a7e"
                        }}
                    >Rate us</Typography>

                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                /></Box>
                <br /><br/>
                {errors.exampleRequired && <span>This field is required</span>}
      
                <DreamBtn>Add Review</DreamBtn>
            </form>
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
                <Alert  id="unstyled-modal-description" severity="success">Review Added Successfully</Alert>
            </Box>
        </StyledModal>
        </Container>
    );
};

export default AddReview;