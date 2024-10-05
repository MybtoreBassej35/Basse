import type { InspectorModeTags } from '@contentful/live-preview/dist/inspectorMode/types';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { ImageFieldsFragment } from '@src/lib/__generated/sdk';

interface ImageProps extends ImageFieldsFragment {
  imageProps?: Omit<NextImageProps, 'src' | 'alt'>;
  livePreviewProps?: InspectorModeTags;
}

export const CtfImage = ({ url, width, height, imageProps, livePreviewProps }: ImageProps) => {
  if (!url || !width || !height) return null;

  const blurURL = new URL(url);
  blurURL.searchParams.set('w', '10');

  return (
    <NextImage
      src={url}
      width={width}
      height={height}
      sizes="(max-width: 1200px) 100vw, 50vw"
      placeholder="blur"
      blurDataURL={blurURL.toString()}
      {...imageProps}
      {...livePreviewProps}
    />
  );
};
