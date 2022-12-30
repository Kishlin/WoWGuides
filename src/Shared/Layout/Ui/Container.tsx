import { FunctionComponent, ReactNode } from 'react';
import { Box, Stack } from '@mui/material';

declare type ContainerProps = {
    children: ReactNode,
};

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
    const stackStyle = {
        backgroundColor: 'background.paper',
        pt: 2,
        pb: 16,
        px: 2,
    };

    return (
        <Box sx={{ backgroundColor: 'background.default' }} px={{ xs: 0, sm: 4, md: 16 }}>
            <Stack spacing={1} sx={stackStyle}>
                {children}
            </Stack>
        </Box>
    );
};

export default Container;
