import { FunctionComponent, ReactNode } from 'react';
import { ListItem } from '@mui/material';

declare type CheckpointItemProps = {
    children: ReactNode,
};

const CheckpointItem: FunctionComponent<CheckpointItemProps> = ({ children }) => (
    <ListItem sx={{ display: 'list-item', p: 0 }}>
        <span>
            {children}
        </span>
    </ListItem>
);

export default CheckpointItem;
