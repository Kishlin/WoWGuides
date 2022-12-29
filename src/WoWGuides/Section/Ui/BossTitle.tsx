import { FunctionComponent } from 'react';
import { Typography } from '@mui/material';

declare type BossTitleProps = {
    children: string,
};

const BossTitle: FunctionComponent<BossTitleProps> = ({ children }) => (
    <Typography variant="h4">
        {children}
        <Typography variant="button" color="error.main"> [Boss!]</Typography>
    </Typography>
);

export default BossTitle;
