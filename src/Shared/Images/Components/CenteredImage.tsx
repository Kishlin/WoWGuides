import React from 'react';

import ImageContainer from '../Ui/ImageContainer';
import Image from '../Ui/Image';

declare type CenteredImageProps = {
    width: number,
    height: number,
    alt: string,
    src: string,
    sx: {
        display: {
            xs?: string,
            sm?: string,
            md?: string,
            lg?: string,
            xl?: string,
        }
    }
}

const CenteredImage: React.FunctionComponent<CenteredImageProps> = ({
    height,
    width,
    src,
    alt,
    sx,
}) => (
    <ImageContainer sx={sx}>
        <Image width={width} height={height} alt={alt} src={src} />
    </ImageContainer>
);

export default CenteredImage;
