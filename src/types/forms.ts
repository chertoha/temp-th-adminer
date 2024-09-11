import { OutputData } from "@editorjs/editorjs";
import { PublicationSections } from "./entities";

export type PublicationFormValues = {
  title: string;
  banner: string;
  content: OutputData | undefined;
  authorId: number | undefined | null;
  sections: PublicationSections | [];
  gallery: string[] | null;
  description: string;
  shortDescription: string;
  quote: string | null;
  person: string | null;
  date: string;
  comment: string | null;
};

export type MagazineFormValues = {
  title: string;
  banner: string;
  content: string;
  gallery: string[] | null;
  description: string;
  date: string;
  comment: string | null;
};

export type AuthorEditFormValues = {
  avatar: string | null;
  name: string;
};

export type EmployeeFormValues = {
  avatar: string | null;
  name: string;
  role?: string;
  phone?: string;
  email?: string;
};

export type EditorFormType = {
  name: string;
  email: string;
  password: string;
};

export type TheaterContactsFromValues = {
  phone: string;
  adminEmail: string;
  privacyPolicyEmail: string;
  legalAddress: string;
  youtubeLink: string;
  facebookLink: string;
  instagramLink: string;
  purchaseInfo: string;
};

export type RootFormValues = { [key: string]: string };
