import React from 'react';
import NextImage from 'next/image';

declare type ImageProps = {
    width: number,
    height: number,
    alt: string,
    src: string,
}

const Image: React.FunctionComponent<ImageProps> = ({
    height,
    width,
    src,
    alt,
}) => (
    <NextImage
        alt={alt}
        src={src}
        width={width}
        height={height}
    />
);

export default Image;
