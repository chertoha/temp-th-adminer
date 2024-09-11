import * as Yup from "yup";
import MESSAGE from "./messages";

export const commonTheaterInfoFormSchema = Yup.object().shape({
  phone: Yup.string()
    .trim()
    .max(20, MESSAGE.MAX_SYMBOLS(20))
    .required(MESSAGE.REQUIRED_FIELD),

  adminEmail: Yup.string()
    .email(MESSAGE.VALID_EMAIL)
    .trim()
    .max(64, MESSAGE.MAX_SYMBOLS(64))
    .required(MESSAGE.REQUIRED_FIELD),

  privacyPolicyEmail: Yup.string()
    .email()
    .trim()
    .max(64, MESSAGE.MAX_SYMBOLS(64))
    .required(MESSAGE.REQUIRED_FIELD),

  legalAddress: Yup.string()
    .trim()
    .max(100, MESSAGE.MAX_SYMBOLS(100))
    .required(MESSAGE.REQUIRED_FIELD),

  instagramLink: Yup.string()
    .trim()
    .max(200, MESSAGE.MAX_SYMBOLS(200))
    .required(MESSAGE.REQUIRED_FIELD),

  youtubeLink: Yup.string()
    .trim()
    .max(200, MESSAGE.MAX_SYMBOLS(200))
    .required(MESSAGE.REQUIRED_FIELD),

  facebookLink: Yup.string()
    .trim()
    .max(200, MESSAGE.MAX_SYMBOLS(200))
    .required(MESSAGE.REQUIRED_FIELD),

  purchaseInfo: Yup.string().trim().required(MESSAGE.REQUIRED_FIELD),
});
