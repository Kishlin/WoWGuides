import { FunctionComponent, ReactNode } from 'react';
import TankItem from '../Ui/TankItem';

declare type TankProps = {
    children: ReactNode,
};

const Tank: FunctionComponent<TankProps> = ({ children }) => (
    <TankItem>{children}</TankItem>
);

export default Tank;
