import { PublicationSection, PublicationStatusType } from "@/types/entities";
import { ROUTES } from "./routes";
import { theme } from "@/styles/theme";

export const drawerWidth: number = 240;

export type StatusType = {
  LABEL: string;
  API_NAME: PublicationStatusType;
  COLOR: string;
};

export const STATUSES: {
  [key: string]: StatusType;
} = {
  PUBLISHED: {
    LABEL: "Опублікована",
    API_NAME: "PUBLISHED",
    COLOR: theme.palette.status.published,
  },
  DRAFT: {
    LABEL: "Чернетка",
    API_NAME: "DRAFT",
    COLOR: theme.palette.status.draft,
  },
};

export const statusSelectorOptions = (() =>
  Object.keys(STATUSES).map(key => ({
    label: STATUSES[key as SectionsPubKey].LABEL,
    value: STATUSES[key as SectionsPubKey].API_NAME,
  })))();

export type SectionsPubValue = {
  LABEL: string;
  API_NAME: PublicationSection;
  COLOR: string;
};

export const SECTIONS_PUB = {
  ACTIVITY: {
    LABEL: "Події",
    API_NAME: "ACTIVITY",
    COLOR: theme.palette.tag.activity,
  } as SectionsPubValue,
  REVIEW: {
    LABEL: "Рецензії",
    API_NAME: "REVIEW",
    COLOR: theme.palette.tag.review,
  } as SectionsPubValue,
  INTERVIEW: {
    LABEL: "Інтерв’ю",
    API_NAME: "INTERVIEW",
    COLOR: theme.palette.tag.interview,
  } as SectionsPubValue,
  HISTORY: {
    LABEL: "Історія",
    API_NAME: "HISTORY",
    COLOR: theme.palette.tag.history,
  } as SectionsPubValue,
  ARTICLE: {
    LABEL: "Статті",
    API_NAME: "ARTICLE",
    COLOR: theme.palette.tag.article,
  } as SectionsPubValue,
};

export const SECTIONS = {
  ...SECTIONS_PUB,
  // temp color
  MAGAZINE: {
    LABEL: "Журнали",
    API_NAME: "MAGAZINE",
    COLOR: "1f1f1f",
  } as SectionsPubValue,
};

export const SECTIONS_PUB_COLLECTION = (() =>
  (Object.keys(SECTIONS_PUB) as SectionsPubKey[]).map(
    key => SECTIONS_PUB[key]
  ))();

export type SectionsPubKey = keyof typeof SECTIONS_PUB;

export const sectionSelectorOptions = (() =>
  Object.keys(SECTIONS_PUB).map(key => ({
    id: SECTIONS_PUB[key as SectionsPubKey].LABEL,
    label: SECTIONS_PUB[key as SectionsPubKey].LABEL,
    value: SECTIONS_PUB[key as SectionsPubKey].API_NAME,
  })))();

export const infoForDeletePopup = {
  [ROUTES.PUBLICATIONS]: {
    title: "публікацію",
    descr: "Ця публікація буде видалена на сайті і зі списку.",
  },
  [ROUTES.MAGAZINES]: {
    title: "журнал",
    descr: "Цей журнал буде видалено на сайті і зі списку.",
  },
  [ROUTES.AUTHORS]: { title: "автора", descr: "" },
  [ROUTES.EDITORS]: {
    title: "редактора",
    descr:
      "Цей користувач більше не матиме можливості додавати або редагувати публікації.",
  },
  [ROUTES.USERS]: {
    title: "користувача",
    descr: "Вся інформація про користувача буде видалена.",
  },
  [ROUTES.SUBSCRIBERS]: {
    title: "підписника",
    descr: "Вся інформація про підписника буде видалена.",
  },
  [ROUTES.ABOUT]: {
    title: "контакт",
    descr: "Цей контакт більше не буде відображатись на сайті",
  },
};

export const PUBLICATION_FORM_FIELDS: { [key: string]: string } = {
  title: "Заголовок",
  banner: "Основне фото",
  content: "Контент публікації",
  author: "Автор",
  sections: "Розділ",
  gallery: "Галерея",
  description: "Опис",
  shortDescription: "Короткий опис",
  quote: "Цитата",
  person: "Персона",
  date: "Дата",
  comment: "Нотатка",
};

export const MAGAZINE_FORM_FIELDS: { [key: string]: string } = {
  title: "Заголовок",
  banner: "Фото обкладинки",
  content: "Опис",
  gallery: "Галерея",
  description: "Кількість сторінок",
  date: "Дата випуску",
  comment: "Нотатка",
};

export const PUBLICATION_BANNER_PLACEHOLDER_API_NAME =
  "643e6a337530c251cd821204fc679fa5_placeholder.jpg";

export const FIELDS_SYMBOLS_NUM = {
  TITLE_MAX: 200,
  SHORT_DESCRIPTION_MAX: 200,
  DESCRIPTION_MAX: 400,
  COMMENT_MAX: 400,
  PERSON_MAX: 100,
  QUOTE_MAX: 400,
  MAGAZINE_PAGES_MAX: 4,
  MAGAZINE_DESCRIPTION_MAX: 700,
};

export const MAX_UPLOAD_FILE_SIZE = 10;
export const DEFAULT_UPLOAD_FILES = 1;
export const MAX_UPLOAD_FILES = 20;
export const MAX_MAGAZINE_UPLOAD_FILES = 3;
