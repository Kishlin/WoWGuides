import { FunctionComponent, ReactNode } from 'react';
import { List } from '@mui/material';

declare type CheckpointsListListingProps = {
    children: ReactNode,
};

const CheckpointsListListing: FunctionComponent<CheckpointsListListingProps> = ({ children }) => (
    <List sx={{ listStyleType: 'disc', pl: 4 }}>
        {children}
    </List>
);

export default CheckpointsListListing;
