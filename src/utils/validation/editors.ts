import * as Yup from "yup";
import {
  SIGN_UP_EMAIL_RULES,
  SIGN_UP_NAME_RULES,
  SIGN_UP_PASSWORD_RULES,
} from "./rules";

export const editorFormSchema = Yup.object().shape({
  name: SIGN_UP_NAME_RULES,
  email: SIGN_UP_EMAIL_RULES,
  password: SIGN_UP_PASSWORD_RULES,
});
