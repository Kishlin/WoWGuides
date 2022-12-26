import { FunctionComponent } from 'react';
import BossTitleUi from '../Ui/BossTitle';

declare type BossTitleProps = {
    children: string,
};

const BossTitle: FunctionComponent<BossTitleProps> = ({ children }) => (
    <BossTitleUi>
        {children}
    </BossTitleUi>
);

export default BossTitle;
