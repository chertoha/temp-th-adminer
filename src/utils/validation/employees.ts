import * as Yup from "yup";
import MESSAGE from "./messages";

import { AVATAR_RULES, PERSON_NAME_RULES } from "./rules";

export const employeeEditFormSchema = Yup.object().shape({
  name: PERSON_NAME_RULES,

  role: Yup.string().max(100, MESSAGE.MAX_SYMBOLS(100)).trim(),

  phone: Yup.string().max(20, MESSAGE.MAX_SYMBOLS(20)).trim(),

  email: Yup.string()
    .email(MESSAGE.VALID_EMAIL)
    .max(64, MESSAGE.MAX_SYMBOLS(64))
    .trim(),

  avatar: AVATAR_RULES,
});
