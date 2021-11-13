import { Alert, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import DreamBtn from '../../styledComponent/DreamBtn';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';


const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
        fetch('https://peaceful-island-86831.herokuapp.com/addNewProperty', {
            method: "POST",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(data)
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
            >Add a new property</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input onClick={clickStyle} style={inputStyles} type="number" /* defaultValue={user.displayName} */ placeholder="Price" {...register("price", { required: true })} />
                <br /><br />
            
                <input onClick={clickStyle} style={inputStyles} type="text" /* defaultValue={user.email} */ placeholder="Address" {...register("address", { required: true })} />
                <br/><br/>
                
                <input onClick={clickStyle} style={inputStyles} type="text" placeholder="Sate" {...register("state", { required: true })} />
                <br /><br />
            
                <input onClick={clickStyle} style={inputStyles} type="number" placeholder="No. of bedroom" {...register("beds", { required: true })} />
                <br /><br />
                
                <input onClick={clickStyle} style={inputStyles} type="number" placeholder="No. of bathroom" {...register("baths", { required: true })} />
                <br /><br />
                
                <input onClick={clickStyle} style={inputStyles} type="text" placeholder="Image URL" {...register("img", { required: true })} />
                <br/><br/>
                {errors.exampleRequired && <span>This field is required</span>}
    
                <DreamBtn>Add Property</DreamBtn>
            </form>
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
                    <Alert  id="unstyled-modal-description" severity="success">New Property Added Successfully</Alert>
                </Box>
            </StyledModal>
        </Container>
    );
};

export default AddAProduct;