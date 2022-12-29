import { FunctionComponent } from 'react';
import { Typography } from '@mui/material';

declare type SectionTitleProps = {
    children: string,
};

const SectionTitle: FunctionComponent<SectionTitleProps> = ({ children }) => (
    <Typography variant="h4">
        {children}
    </Typography>
);

export default SectionTitle;
