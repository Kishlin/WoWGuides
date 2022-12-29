import { FunctionComponent } from 'react';
import NpcTag from '../Ui/NpcTag';

declare type NpcProps = {
    children: string,
    id: number,
};

const Npc: FunctionComponent<NpcProps> = ({ children, id }) => (
    <NpcTag link={`https://www.wowdb.com/npcs/${id}`}>
        {children}
    </NpcTag>
);

export default Npc;
