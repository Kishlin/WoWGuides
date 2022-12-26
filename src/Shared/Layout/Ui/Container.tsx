import { FunctionComponent, ReactNode } from 'react';
import { Stack } from '@mui/material';

declare type ContainerProps = {
    children: ReactNode,
};

const Container: FunctionComponent<ContainerProps> = ({ children }) => (
    <Stack spacing={1}>
        {children}
    </Stack>
);

export default Container;
