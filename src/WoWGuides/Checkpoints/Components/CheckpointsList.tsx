import { FunctionComponent, ReactNode } from 'react';

import CheckpointsListContainer from '../Ui/CheckpointsListContainer';
import CheckpointsListListing from '../Ui/CheckpointsListListing';
import CheckpointsListTitle from '../Ui/CheckpointsListTitle';

declare type CheckpointsListProps = {
    children: ReactNode,
};

const CheckpointsList: FunctionComponent<CheckpointsListProps> = ({ children }) => (
    <CheckpointsListContainer>
        <CheckpointsListTitle>Checkpoints</CheckpointsListTitle>

        <CheckpointsListListing>
            {children}
        </CheckpointsListListing>
    </CheckpointsListContainer>
);

export default CheckpointsList;
