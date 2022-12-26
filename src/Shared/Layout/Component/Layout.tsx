import { FunctionComponent, ReactNode } from 'react';
import Container from '../Ui/Container';

declare type LayoutProps = {
    children: ReactNode,
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
    <Container>
        {children}
    </Container>
);

export default Layout;
