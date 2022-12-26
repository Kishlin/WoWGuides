import { FunctionComponent } from 'react';
import { Typography } from '@mui/material';

declare type GettingThereTextProps = {
    children: string,
};

const GettingThereText: FunctionComponent<GettingThereTextProps> = ({ children }) => (
    <Typography>
        {children}
    </Typography>
);

export default GettingThereText;
