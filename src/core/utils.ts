import { AppConfig } from '../config';

/**
 * Function for getting url for cropped images
 * @param source url to poster e.g. /p/id_image
 * @returns
 */
export const getCroppedImageUrl = (source: string) => {
  return `${AppConfig.API_IMAGE_CROPPED_URL}${source}`;
};

/**
 * Function for getting url for original images
 * @param source url to poster e.g. /p/id_image
 * @returns
 */
export const getOriginalImageUrl = (source: string) => {
  return `${AppConfig.API_IMAGE_ORIGINAL_URL}${source}`;
};
