import { FunctionComponent, ReactNode } from 'react';
import { Box } from '@mui/material';

declare type SectionProps = {
    children: ReactNode,
}

const Section: FunctionComponent<SectionProps> = ({ children }) => (
    <Box>
        {children}
    </Box>
);

export default Section;
