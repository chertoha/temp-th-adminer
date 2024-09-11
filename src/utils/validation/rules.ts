import { FIELDS_SYMBOLS_NUM } from "@/config/constants";
import * as Yup from "yup";
import MESSAGE from "./messages";
import { emailRegexp } from "./validationPatterns";

export const TITLE_RULES = Yup.string()
  .max(
    FIELDS_SYMBOLS_NUM.TITLE_MAX,
    MESSAGE.MAX_SYMBOLS(FIELDS_SYMBOLS_NUM.TITLE_MAX)
  )
  .trim()
  .required(MESSAGE.REQUIRED_FIELD);

export const BANNER_RULES = Yup.string().required(MESSAGE.REQUIRED_FIELD);

export const COMMENT_RULES = Yup.string().max(
  FIELDS_SYMBOLS_NUM.COMMENT_MAX,
  MESSAGE.MAX_SYMBOLS(FIELDS_SYMBOLS_NUM.COMMENT_MAX)
);

export const PERSON_NAME_RULES = Yup.string()
  .min(2, MESSAGE.MIN_SYMBOLS(2))
  .max(
    FIELDS_SYMBOLS_NUM.PERSON_MAX,
    MESSAGE.MAX_SYMBOLS(FIELDS_SYMBOLS_NUM.PERSON_MAX)
  )
  .required(MESSAGE.REQUIRED_FIELD)
  .trim();

export const AVATAR_RULES = Yup.mixed().required(MESSAGE.REQUIRED_FIELD);

export const SIGN_UP_NAME_RULES = Yup.string()
  .trim()
  .min(2, MESSAGE.MIN_SYMBOLS(2))
  .max(30, MESSAGE.MAX_SYMBOLS(30))
  .required(MESSAGE.REQUIRED_FIELD);

export const SIGN_UP_EMAIL_RULES = Yup.string()
  .trim()
  .matches(emailRegexp, {
    message: "Введено неіснуючу адресу",
  })
  .max(64, MESSAGE.MAX_SYMBOLS(64))
  .required(MESSAGE.REQUIRED_FIELD);

export const SIGN_UP_PASSWORD_RULES = Yup.string()
  .trim()
  .min(8, MESSAGE.MIN_SYMBOLS(8))
  .max(16, MESSAGE.MAX_SYMBOLS(16))
  .matches(
    /[A-Z]/,
    "Пароль повинен  включати принаймні 1 велику латинську літеру"
  )
  .matches(/[0-9]/, "Пароль повинен містити  1 цифру.")
  .required(MESSAGE.REQUIRED_FIELD);
