import React from 'react';
import { ImageResizeMode } from 'react-native';

export interface IProps {
  close: () => void;
  hideThumbs?: boolean;
  images: ImageObject[];
  initialIndex?: number;
  isOpen: boolean;
  resizeMode?: ImageResizeMode;
  thumbColor?: string;
  thumbSize?: number;
  thumbResizeMode?: ImageResizeMode;
  disableSwipe?: boolean;

  renderCustomThumb?: (
    item: ImageObject,
    index: number,
    isSelected: boolean
  ) => React.ReactNode;

  renderCustomImage?: (
    item: ImageObject,
    index: number,
    isSelected: boolean
  ) => React.ReactNode;

  renderHeaderComponent?: (
    item: ImageObject,
    currentIndex: number
  ) => React.ReactNode;

  renderFooterComponent?: (
    item: ImageObject,
    currentIndex: number
  ) => React.ReactNode;
}

export interface HeaderProps {
  currentIndex: number;
  item?: ImageObject;
}

export interface FooterProps {
  currentIndex: number;
  total: number;
}

export interface MediaObject {
  id?: string | number;
  thumbUrl?: string;
  url: string;
  kind?: 'img' | 'vid';
  mime?: string;
}

// For backward compatibility
export type ImageObject = MediaObject;

export interface ImagePreviewProps {
  index: number;
  isSelected: boolean;
  item: ImageObject;
  resizeMode?: ImageResizeMode;

  renderCustomImage?: (
    item: ImageObject,
    index: number,
    isSelected: boolean
  ) => React.ReactNode;
}

export interface RenderMediaProps {
  item: MediaObject;
  index: number;
  resizeMode?: ImageResizeMode;
}

// For backward compatibility
export type RenderImageProps = RenderMediaProps;
