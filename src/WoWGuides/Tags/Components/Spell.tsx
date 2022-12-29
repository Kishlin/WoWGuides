import { FunctionComponent } from 'react';
import SpellTag from '../Ui/SpellTag';

declare type SpellProps = {
    children: string,
    id: number,
};

const Spell: FunctionComponent<SpellProps> = ({ children, id }) => (
    <SpellTag link={`https://www.wowdb.com/spells/${id}`}>
        {children}
    </SpellTag>
);

export default Spell;
