import { FunctionComponent, ReactNode } from 'react';

import TipsListContainer from '../Ui/TipsListContainer';
import TipsListListing from '../Ui/TipsListListing';

declare type HealerTipsProps = {
    children: ReactNode,
};

const HealerTips: FunctionComponent<HealerTipsProps> = ({ children }) => (
    <TipsListContainer>
        <TipsListListing>
            {children}
        </TipsListListing>
    </TipsListContainer>
);

export default HealerTips;
