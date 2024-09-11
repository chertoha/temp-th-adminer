import { imageAllowedMIMETypes } from "../imageAllowedMIMETypes";

const hasWrongType = (
  files: File[] | null,
  errorHandler: (message: string | null) => void
) => {
  const isTypeWrong = files?.some(
    ({ type }) => !imageAllowedMIMETypes.includes(type)
  );

  isTypeWrong && errorHandler("Не вірний тип файлу");
  return isTypeWrong ? true : false;
};

export default hasWrongType;
