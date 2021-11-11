import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import DreamBtn from '../../styledComponent/DreamBtn';
import { Alert, Button, Container, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const [error, setError] = useState('');
    const { registerUser } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const inputStyles = {
        width: "280px",
        padding: '15px 20px',
        border: '1px solid #ac2af8'
    }
    const clickStyle = e => {
        e.preventDefault();
        e.target.style.outline = "none";
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { name, email, password, password2 } = data;
        if (password === password2) {
            registerUser(name, email, password, location, history);
        }
        else {
            setError("Password didn't match");
        }
    }

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
            >Register</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input onClick={clickStyle} style={inputStyles} type="text" placeholder="Name" {...register("name", { required: true })} />
                <br /><br />
                
                <input onClick={clickStyle} style={inputStyles} type="email" placeholder="Email" {...register("email", { required: true })} />
                <br/><br/>
                
                <input onClick={clickStyle} style={inputStyles} type="password" placeholder="Password" {...register("password", { required: true })} />
                <br /><br />
                
                <input onClick={clickStyle} style={inputStyles} type="password" placeholder="Re Type Password" {...register("password2", { required: true })} />
                <br /><br />
                
                {errors.exampleRequired && <span>This field is required</span>}
                {
                    error && <Alert severity="error">{error}</Alert>
                }
      
                <DreamBtn>Register</DreamBtn>
            </form>
            <br/>
            <NavLink
                to="/login"
                style={{
                    textDecoration: 'none'
                }}
            ><Button>Already Registered?</Button></NavLink>
        </Container>
    );
};

export default Register;