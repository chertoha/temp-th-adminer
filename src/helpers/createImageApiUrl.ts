const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

export const createImageApiUrl = (imageName: string) => {
  return `${BASE_URL}/api/images?name=${imageName}`;
};

export const createImagePreviewApiUrl = (imageName: string) => {
  return `${BASE_URL}/api/images?name=${imageName}&preview=true`;
};
