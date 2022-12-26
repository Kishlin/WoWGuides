import { FunctionComponent } from 'react';
import { Typography } from '@mui/material';

declare type GettingThereTitleProps = {
    children: string,
};

const GettingThereTitle: FunctionComponent<GettingThereTitleProps> = ({ children }) => (
    <Typography variant="h3">
        {children}
    </Typography>
);

export default GettingThereTitle;
