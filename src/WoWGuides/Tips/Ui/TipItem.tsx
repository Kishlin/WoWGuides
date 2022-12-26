import { FunctionComponent, ReactNode } from 'react';
import { ListItem } from '@mui/material';

declare type TipItemProps = {
    children: ReactNode,
};

const TipItem: FunctionComponent<TipItemProps> = ({ children }) => (
    <ListItem sx={{ display: 'list-item', p: 0 }}>
        {children}
    </ListItem>
);

export default TipItem;
