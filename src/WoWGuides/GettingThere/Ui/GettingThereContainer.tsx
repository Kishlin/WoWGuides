import { FunctionComponent, ReactNode } from 'react';
import { Box } from '@mui/material';

declare type GettingThereContainerProps = {
    children: ReactNode,
};

const GettingThereContainer: FunctionComponent<GettingThereContainerProps> = ({ children }) => (
    <Box>
        {children}
    </Box>
);

export default GettingThereContainer;
