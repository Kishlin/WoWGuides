import { FunctionComponent, ReactNode } from 'react';
import CheckpointItem from '../Ui/CheckpointItem';

declare type CheckpointProps = {
    children: ReactNode,
};

const Checkpoint: FunctionComponent<CheckpointProps> = ({ children }) => (
    <CheckpointItem>{children}</CheckpointItem>
);

export default Checkpoint;
