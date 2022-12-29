import { FunctionComponent, ReactNode } from 'react';
import { ListItem, Typography } from '@mui/material';

declare type RuptItemProps = {
    children: ReactNode,
};

const RuptItem: FunctionComponent<RuptItemProps> = ({ children }) => (
    <ListItem sx={{ display: 'list-item', p: 0 }}>
        <span>
            <Typography variant="button" color="error.main">[Rupt!] </Typography>
            {children}
        </span>
    </ListItem>
);

export default RuptItem;
