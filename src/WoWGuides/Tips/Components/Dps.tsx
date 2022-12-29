import { FunctionComponent, ReactNode } from 'react';
import DpsItem from '../Ui/DpsItem';

declare type DpsProps = {
    children: ReactNode,
};

const Dps: FunctionComponent<DpsProps> = ({ children }) => (
    <DpsItem>{children}</DpsItem>
);

export default Dps;
