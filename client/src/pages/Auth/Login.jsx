import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Text from '../../components/Text/Text';
import InputField from '../../components/InputField/InputField';
import CustomButton from '../../components/Button/Button';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with:', formData);
        // Reset
        setFormData({ email: '', password: '' });
    };

    return (
        <Box
            sx={{
                maxWidth: 400,
                mx: 'auto',
                mt: 5,
                p: 3,
                border: '1px solid #ccc',
                borderRadius: 2,
                boxShadow: 1,
            }}
        >
            <Text text="Login" variant="h4" />

            <Box
                component="form"
                onSubmit={handleLogin}
                sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <InputField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <CustomButton type="submit" label="Login" >
                    Login
                </CustomButton>
            </Box>
        </Box>
    );
};

export default Login;
