import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputField from '../../components/InputField/InputField';
import Text from '../../components/Text/Text';
import CustomButton from '../../components/Button/Button';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', password: '' });
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
                boxShadow: 1
            }}
        >
            <Text text="Signup Page" variant="h4" />

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <InputField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
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
                <CustomButton label="Sign Up" type="submit" >
                    Sign Up
                </CustomButton>
            </Box>
        </Box>
    );
};

export default Signup;
