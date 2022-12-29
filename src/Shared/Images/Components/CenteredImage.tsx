import React from 'react';

import ImageContainer from '../Ui/ImageContainer';
import Image from '../Ui/Image';

declare type CenteredImageProps = {
    width: number,
    height: number,
    alt: string,
    src: string,
}

const CenteredImage: React.FunctionComponent<CenteredImageProps> = ({
    height,
    width,
    src,
    alt,
}) => (
    <ImageContainer>
        <Image width={width} height={height} alt={alt} src={src} />
    </ImageContainer>
);

export default CenteredImage;
