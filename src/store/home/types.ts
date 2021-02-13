import { MovieType } from '../../core/types';

export enum HomeScreenCarouselTypeEnum {
  BIG_ITEMS,
  SMAILL_ITEMS,
}

export type HomeScreenSection = {
  title: string;
  subtitle?: string;
  type: HomeScreenCarouselTypeEnum;
  data: MovieType[];
};
