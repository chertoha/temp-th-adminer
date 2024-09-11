import ValidateImage from "./ValidateImage";

import { DEFAULT_UPLOAD_FILES, MAX_UPLOAD_FILE_SIZE } from "@/config/constants";
import { ValidationOptions } from "@/hooks/useDragAndDrop";
import { allowedImageExtensions } from "@/utils/imageAllowedMIMETypes";

const checkImageErrors = (
  files: File[] | null,
  errorHandler: (message: string) => void,
  options?: ValidationOptions
): boolean => {
  const { extensions, limit, maxSize } = {
    maxSize: MAX_UPLOAD_FILE_SIZE,
    extensions: allowedImageExtensions,
    limit: DEFAULT_UPLOAD_FILES,

    ...options,
  };

  return ValidateImage.init(files)
    .type(extensions)
    .size(maxSize)
    .limit(limit)
    .catch(errorHandler);
};

export default checkImageErrors;
