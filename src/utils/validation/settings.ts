import * as Yup from "yup";
import {
  SIGN_UP_EMAIL_RULES,
  SIGN_UP_NAME_RULES,
  SIGN_UP_PASSWORD_RULES,
} from "./rules";

export const rootNameFormSchema = Yup.object().shape({
  name: SIGN_UP_NAME_RULES,
});

export const rootEmailFormSchema = Yup.object().shape({
  email: SIGN_UP_EMAIL_RULES,
});

export const rootPasswordFormSchema = Yup.object().shape({
  password: SIGN_UP_PASSWORD_RULES,
});
