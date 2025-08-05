import React from "react";
import Typography from "@mui/material/Typography";

const Text = ({
    variant = "h6",
    text,
    align = "left",
    color = "text.primary",
    sx = {},
    ...props
}) => {
    return (
        <Typography
            variant={variant}
            align={align}
            color={color}
            sx={{ ...sx }}
            {...props}
        >
            {text}
        </Typography>
    );
};

export default Text;
