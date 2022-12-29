import { FunctionComponent } from 'react';
import { Link } from '@mui/material';

declare type SpellTagProps = {
    children: string,
    link: string,
};

const SpellTag: FunctionComponent<SpellTagProps> = ({ children, link }) => (
    <Link color="primary.main" href={link} target="_blank" style={{ textDecoration: 'none' }}>
        {children}
    </Link>
);

export default SpellTag;
