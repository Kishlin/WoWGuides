import { FunctionComponent } from 'react';
import { Typography } from '@mui/material';

declare type CheckpointsListTitleProps = {
    children: string,
};

const CheckpointsListTitle: FunctionComponent<CheckpointsListTitleProps> = ({ children }) => (
    <Typography variant="h3">
        {children}
    </Typography>
);

export default CheckpointsListTitle;
