import { FunctionComponent, ReactNode } from 'react';
import { List } from '@mui/material';

declare type TipsListListingProps = {
    children: ReactNode,
};

const TipsListListing: FunctionComponent<TipsListListingProps> = ({ children }) => (
    <List sx={{ listStyleType: 'disc', pl: 4 }}>
        {children}
    </List>
);

export default TipsListListing;
