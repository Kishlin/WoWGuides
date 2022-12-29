import { FunctionComponent, ReactNode } from 'react';
import { Box } from '@mui/material';

declare type TipsListContainerProps = {
    children: ReactNode,
};

const TipsListContainer: FunctionComponent<TipsListContainerProps> = ({ children }) => (
    <Box>
        {children}
    </Box>
);

export default TipsListContainer;
