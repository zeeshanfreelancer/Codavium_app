import React from 'react';
import TextField from '@mui/material/TextField';

const InputField = ({
    label = '',
    variant = 'outlined',
    type = 'text',
    value,
    onChange,
    sx = {},
    ...props
}) => {
    return (
        <TextField
            label={label}
            variant={variant}
            type={type}
            value={value}
            onChange={onChange}
            sx={sx}
            {...props}
        />
    );
};

export default InputField;
