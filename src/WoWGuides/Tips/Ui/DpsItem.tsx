import { FunctionComponent, ReactNode } from 'react';
import { ListItem, Typography } from '@mui/material';

declare type DpsItemProps = {
    children: ReactNode,
};

const DpsItem: FunctionComponent<DpsItemProps> = ({ children }) => (
    <ListItem sx={{ display: 'list-item', p: 0 }}>
        <span>
            <Typography variant="button" color="error.main">[Dps] </Typography>
            {children}
        </span>
    </ListItem>
);

export default DpsItem;
