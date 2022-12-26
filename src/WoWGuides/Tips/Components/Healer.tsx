import { FunctionComponent, ReactNode } from 'react';
import HealerItem from '../Ui/HealerItem';

declare type HealerProps = {
    children: ReactNode,
};

const Healer: FunctionComponent<HealerProps> = ({ children }) => (
    <HealerItem>{children}</HealerItem>
);

export default Healer;
