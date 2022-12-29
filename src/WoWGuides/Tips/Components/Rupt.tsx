import { FunctionComponent, ReactNode } from 'react';
import RuptItem from '../Ui/RuptItem';

declare type RuptProps = {
    children: ReactNode,
};

const Rupt: FunctionComponent<RuptProps> = ({ children }) => (
    <RuptItem>{children}</RuptItem>
);

export default Rupt;
