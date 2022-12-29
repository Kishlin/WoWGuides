import { FunctionComponent } from 'react';
import SectionTitleUi from '../Ui/SectionTitle';

declare type SectionTitleProps = {
    children: string,
};

const SectionTitle: FunctionComponent<SectionTitleProps> = ({ children }) => (
    <SectionTitleUi>
        {children}
    </SectionTitleUi>
);

export default SectionTitle;
