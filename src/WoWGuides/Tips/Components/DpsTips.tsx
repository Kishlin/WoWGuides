import { FunctionComponent, ReactNode } from 'react';

import TipsListContainer from '../Ui/TipsListContainer';
import TipsListListing from '../Ui/TipsListListing';

declare type DpsTipsProps = {
    children: ReactNode,
};

const DpsTips: FunctionComponent<DpsTipsProps> = ({ children }) => (
    <TipsListContainer>
        <TipsListListing>
            {children}
        </TipsListListing>
    </TipsListContainer>
);

export default DpsTips;
