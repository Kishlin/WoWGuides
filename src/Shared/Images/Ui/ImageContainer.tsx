import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

const ImageContainer: React.FunctionComponent<{ children: ReactNode }> = ({ children }) => (
    <Box display="flex" alignItems="center" justifyContent="center">
        {children}
    </Box>
);

export default ImageContainer;
