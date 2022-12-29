import { FunctionComponent, ReactNode } from 'react';
import SectionUi from '../Ui/Section';

declare type SectionProps = {
    children: ReactNode,
};

const Section: FunctionComponent<SectionProps> = ({ children }) => (
    <SectionUi>
        {children}
    </SectionUi>
);

export default Section;
