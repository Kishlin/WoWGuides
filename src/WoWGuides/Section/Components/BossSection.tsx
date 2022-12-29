import { FunctionComponent, ReactNode } from 'react';
import SectionUi from '../Ui/Section';

declare type BossSectionProps = {
    children: ReactNode,
};

const BossSection: FunctionComponent<BossSectionProps> = ({ children }) => (
    <SectionUi>
        {children}
    </SectionUi>
);

export default BossSection;
