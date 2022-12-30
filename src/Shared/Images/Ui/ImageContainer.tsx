import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

declare type ImageContainerProps = {
    children: ReactNode,
    sx: {
        display: {
            xs?: string,
            sm?: string,
            md?: string,
            lg?: string,
            xl?: string,
        }
    }
};

const ImageContainer: React.FunctionComponent<ImageContainerProps> = ({ children, sx }) => (
    <Box display="flex" alignItems="center" justifyContent="center" sx={sx}>
        {children}
    </Box>
);

export default ImageContainer;
