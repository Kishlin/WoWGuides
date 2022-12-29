import { FunctionComponent, ReactNode } from 'react';
import { ListItem, Typography } from '@mui/material';

declare type HealerItemProps = {
    children: ReactNode,
};

const HealerItem: FunctionComponent<HealerItemProps> = ({ children }) => (
    <ListItem sx={{ display: 'list-item', p: 0 }}>
        <span>
            <Typography variant="button" color="success.main">[Healer] </Typography>
            {children}
        </span>
    </ListItem>
);

export default HealerItem;
