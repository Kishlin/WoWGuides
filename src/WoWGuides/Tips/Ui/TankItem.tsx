import { FunctionComponent, ReactNode } from 'react';
import { ListItem, Typography } from '@mui/material';

declare type TankItemProps = {
    children: ReactNode,
};

const TankItem: FunctionComponent<TankItemProps> = ({ children }) => (
    <ListItem sx={{ display: 'list-item', p: 0 }}>
        <span>
            <Typography variant="button" color="warning.main">[Tank] </Typography>
            {children}
        </span>
    </ListItem>
);

export default TankItem;
