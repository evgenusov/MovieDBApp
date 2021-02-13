import { AppConfig } from "../config"
import { MovieType } from "./types"

export const getCroppedImageUrl = (source: string) => {
    return `${AppConfig.API_IMAGE_CROPPED_URL}${source}`
}

export const getOriginalImageUrl = (source: string) => {
    return `${AppConfig.API_IMAGE_ORIGINAL_URL}${source}`
}