import * as Yup from "yup";
import { BANNER_RULES, COMMENT_RULES, TITLE_RULES } from "./rules";
import MESSAGE from "./messages";
import {
  FIELDS_SYMBOLS_NUM,
  MAX_MAGAZINE_UPLOAD_FILES,
  MAX_UPLOAD_FILES,
  SECTIONS_PUB,
} from "@/config/constants";

export const publicationFormSchema = Yup.object().shape({
  title: TITLE_RULES,

  banner: BANNER_RULES,

  content: Yup.mixed(),
  authorId: Yup.number(),

  sections: Yup.array()
    .of(Yup.string())
    .min(1, MESSAGE.MIN_VALUE_NUM(1))
    .max(5),

  gallery: Yup.array()
    .of(Yup.string())
    .max(MAX_UPLOAD_FILES, MESSAGE.MAX_VALUE_NUM(MAX_UPLOAD_FILES)),

  description: Yup.string()
    .max(
      FIELDS_SYMBOLS_NUM.DESCRIPTION_MAX,
      MESSAGE.MAX_SYMBOLS(FIELDS_SYMBOLS_NUM.DESCRIPTION_MAX)
    )
    .required(MESSAGE.REQUIRED_FIELD),

  shortDescription: Yup.string()
    .max(
      FIELDS_SYMBOLS_NUM.SHORT_DESCRIPTION_MAX,
      MESSAGE.MAX_SYMBOLS(FIELDS_SYMBOLS_NUM.SHORT_DESCRIPTION_MAX)
    )
    .required(MESSAGE.REQUIRED_FIELD),

  comment: COMMENT_RULES,

  quote: Yup.string()
    .max(
      FIELDS_SYMBOLS_NUM.QUOTE_MAX,
      MESSAGE.MAX_SYMBOLS(FIELDS_SYMBOLS_NUM.QUOTE_MAX)
    )
    .when("sections", ([sections]: string[], schema) =>
      sections && sections.includes(SECTIONS_PUB.INTERVIEW.API_NAME)
        ? schema.required(MESSAGE.REQUIRED_FIELD)
        : schema.notRequired()
    ),

  person: Yup.string()
    .max(100)
    .when("sections", ([sections]: string[], schema) =>
      sections && sections.includes(SECTIONS_PUB.INTERVIEW.API_NAME)
        ? schema.required(MESSAGE.REQUIRED_FIELD)
        : schema.notRequired()
    ),

  date: Yup.string().when("sections", ([sections]: string[], schema) =>
    sections && sections.includes(SECTIONS_PUB.ACTIVITY.API_NAME)
      ? schema.required(MESSAGE.REQUIRED_FIELD)
      : schema.notRequired()
  ),
});

export const magazineFormSchema = Yup.object().shape({
  title: TITLE_RULES,

  banner: BANNER_RULES,

  content: Yup.string()
    .max(
      FIELDS_SYMBOLS_NUM.MAGAZINE_DESCRIPTION_MAX,
      MESSAGE.MAX_SYMBOLS(FIELDS_SYMBOLS_NUM.MAGAZINE_DESCRIPTION_MAX)
    )
    .required(MESSAGE.REQUIRED_FIELD),

  gallery: Yup.array()
    .of(Yup.string())
    .max(
      MAX_MAGAZINE_UPLOAD_FILES,
      MESSAGE.MAX_VALUE_NUM(MAX_MAGAZINE_UPLOAD_FILES)
    ),

  description: Yup.number()
    .typeError(MESSAGE.NUM_ONLY)
    .max(9999, MESSAGE.MAX_SYMBOLS(FIELDS_SYMBOLS_NUM.MAGAZINE_PAGES_MAX))
    .required(MESSAGE.REQUIRED_FIELD),

  comment: COMMENT_RULES,

  date: Yup.string().required(MESSAGE.REQUIRED_FIELD),
});
