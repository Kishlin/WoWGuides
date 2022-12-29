import { FunctionComponent } from 'react';
import DungeonTitle from '../Ui/DungeonTitle';

declare type DungeonProps = {
    children: string,
};

const Dungeon: FunctionComponent<DungeonProps> = ({ children }) => (
    <DungeonTitle>{children}</DungeonTitle>
);

export default Dungeon;
