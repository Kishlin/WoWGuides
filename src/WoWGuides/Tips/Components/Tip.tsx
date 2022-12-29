import { FunctionComponent, ReactNode } from 'react';
import TipItem from '../Ui/TipItem';

declare type TipProps = {
    children: ReactNode,
};

const Tip: FunctionComponent<TipProps> = ({ children }) => (
    <TipItem>{children}</TipItem>
);

export default Tip;
