import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import DreamBtn from '../../styledComponent/DreamBtn';

const Login = () => {
    const history = useHistory();
    const location = useLocation();

    const { logInUser } = useAuth();
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
        const { email, password } = data;
        logInUser(email, password, location, history)
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
            >Login</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input onClick={clickStyle} style={inputStyles} type="email" placeholder="Email" {...register("email", { required: true })} />
                <br/><br/>
                
                <input onClick={clickStyle} style={inputStyles} type="password" placeholder="Password" {...register("password", { required: true })} />
               <br/><br/>
                {errors.exampleRequired && <span>This field is required</span>}
      
                <DreamBtn>Login</DreamBtn>
            </form>
            <br/>
            <NavLink
                to="/register"
                style={{
                    textDecoration: 'none'
                }}
            ><Button>New User?</Button></NavLink>
        </Container>
    );
};

export default Login;