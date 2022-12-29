import { FunctionComponent } from 'react';
import { Typography } from '@mui/material';

declare type GettingThereTitleProps = {
    children: string,
};

const GettingThereTitle: FunctionComponent<GettingThereTitleProps> = ({ children }) => (
    <Typography variant="h4">
        {children}
    </Typography>
);

export default GettingThereTitle;
