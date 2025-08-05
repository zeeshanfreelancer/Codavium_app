import React from 'react';
import Button from '@mui/material/Button';

const MainButton = ({
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    onClick,
    children,
    fullWidth = false,
    disabled = false,
    sx = {},
    ...props
}) => {
    return (
        <Button
            variant={variant}
            color={color}
            size={size}
            onClick={onClick}
            fullWidth={fullWidth}
            disabled={disabled}
            sx={sx}
            {...props}
        >
            {children}
        </Button>
    );
};

export default MainButton;
