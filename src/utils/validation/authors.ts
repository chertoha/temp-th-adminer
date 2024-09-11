import * as Yup from "yup";
import { AVATAR_RULES, PERSON_NAME_RULES } from "./rules";

export const authorEditFormSchema = Yup.object().shape({
  name: PERSON_NAME_RULES,
  avatar: AVATAR_RULES,
});
