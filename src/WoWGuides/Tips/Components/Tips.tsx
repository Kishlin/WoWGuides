import { FunctionComponent, ReactNode } from 'react';

import TipsListContainer from '../Ui/TipsListContainer';
import TipsListListing from '../Ui/TipsListListing';

declare type TipsProps = {
    children: ReactNode,
};

const Tips: FunctionComponent<TipsProps> = ({ children }) => (
    <TipsListContainer>
        <TipsListListing>
            {children}
        </TipsListListing>
    </TipsListContainer>
);

export default Tips;
