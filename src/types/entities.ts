export type Interview = {
  id: number | string;
  name: string;
  quote: string;
  imgSrc: string;
  date: string;
};

export interface IPublication {
  id: number;
  title: string;
  descr: string;
  imgSrc: string;
  readTime: number;
  date: string;
  likes: number;
}

export type PublicationSection =
  | "ACTIVITY"
  | "REVIEW"
  | "INTERVIEW"
  | "ARTICLE"
  | "HISTORY"
  | "MAGAZINE";

export type PublicationSections = [PublicationSection, ...PublicationSection[]];

export type PublicationAuthorType = {
  id: number;
  name: string;
  avatar: string;
};

export type PublicationStatusType = "DRAFT" | "PUBLISHED";

export type PublicationType = {
  id: number;
  title: string;
  banner: string;
  content: string;
  author: PublicationAuthorType | null;
  publisherId: number;
  sections: PublicationSections;
  gallery: string[] | null;
  status: PublicationStatusType;
  description: string;
  shortDescription: string;
  likes: number;
  isLiked: boolean;
  isBookmarked: boolean;
  quote: string | null;
  person: string | null;
  comment: string | null;
  readingTime: number;
  date: string;
  publicationDate: string;
  created: string;
  updated: string;
};

export type PublicationsSearchType = {
  sections: string | null;
  authors: string | null;
  statuses: string | null;
  query: string | null;
  dateField: string;
  from: string | null;
  to: string | null;
  sort: string;
  page: number;
  size: number;
};

export type MagazineType = {
  id: number;
  title: string;
  banner: string;
  content: string;
  gallery: string[] | null;
  status: PublicationStatusType;
  description: string;
  comment: string | null;
  publisherId: number | null;
  date: string;
  publicationDate: string;
  created: string;
  updated: string;
};

export type MagazinesSearchType = {
  date?: string | null;
  statuses?: string | null;
  query?: string | null;
  dateField?: string;
  from?: string | null;
  to?: string | null;
  sort?: string;
  page?: number;
  size?: number;
};

export type RelatedPublicationType = {
  id: number;
  title: string;
};

export type AboutContact = {
  id: number;
  name: string;
  position: string;
  email?: string;
  tel?: string;
  image: string;
};

type UserRole = "USER" | "ADMIN" | "ROOT";

export type UserData = {
  name: string;
  email: string;
  isSubscribed: boolean;
  bookmarksCount: number;
  likesCount: number;
  roles: UserRole[];
};

export type EmployeeType = {
  id: number;
  name: string;
  avatar: string;
  role: string | null;
  email: string | null;
  phone: string | null;
  position: number;
};

export type UserType = {
  id: number;
  name: string;
  email: string;
  bookmarksCount: number;
  likesCount: number;
};

export type EditorType = {
  id: number;
  name: string;
  email: string;
};

export type SubscriberType = {
  id: number;
  email: string;
  created: string;
  updated: string;
};

export type TheaterContacts = {
  youtubeLink: string;
  facebookLink: string;
  instagramLink: string;
  legalAddress: string;
  adminEmail: string;
  privacyPolicyEmail: string;
  phone: string;
  purchaseInfo: string;
};
