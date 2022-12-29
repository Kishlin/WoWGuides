import { FunctionComponent } from 'react';
import GettingThereContainer from '../Ui/GettingThereContainer';
import GettingThereTitle from '../Ui/GettingThereTitle';
import GettingThereText from '../Ui/GettingThereText';

declare type GettingThereProps = {
    children: string,
};

const GettingThere: FunctionComponent<GettingThereProps> = ({ children }) => (
    <GettingThereContainer>
        <GettingThereTitle>Getting there</GettingThereTitle>
        <GettingThereText>{children}</GettingThereText>
    </GettingThereContainer>
);

export default GettingThere;
