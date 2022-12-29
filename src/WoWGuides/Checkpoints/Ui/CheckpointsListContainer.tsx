import { FunctionComponent, ReactNode } from 'react';
import { Box } from '@mui/material';

declare type CheckpointsListContainerProps = {
    children: ReactNode,
};

const CheckpointsListContainer: FunctionComponent<CheckpointsListContainerProps> = ({ children }) => (
    <Box>
        {children}
    </Box>
);

export default CheckpointsListContainer;
