import { FunctionComponent, ReactNode } from 'react';
import { Typography } from '@mui/material';

declare type DungeonTitleProps = {
    children: ReactNode,
};

const DungeonTitle: FunctionComponent<DungeonTitleProps> = ({ children }) => (
    <Typography variant="h2">
        {children}
    </Typography>
);

export default DungeonTitle;
