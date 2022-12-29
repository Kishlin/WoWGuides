import { FunctionComponent, ReactNode } from 'react';

import TipsListContainer from '../Ui/TipsListContainer';
import TipsListListing from '../Ui/TipsListListing';

declare type TankTipsProps = {
    children: ReactNode,
};

const TankTips: FunctionComponent<TankTipsProps> = ({ children }) => (
    <TipsListContainer>
        <TipsListListing>
            {children}
        </TipsListListing>
    </TipsListContainer>
);

export default TankTips;
