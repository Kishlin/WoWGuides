import { FunctionComponent } from 'react';
import { Link } from '@mui/material';

declare type NpcTagProps = {
    children: string,
    link: string,
};

const NpcTag: FunctionComponent<NpcTagProps> = ({ children, link }) => (
    <Link color="secondary.main" href={link} target="_blank" style={{ textDecoration: 'none' }}>
        {children}
    </Link>
);

export default NpcTag;
