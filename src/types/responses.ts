import {
  EditorType,
  EmployeeType,
  MagazineType,
  PublicationAuthorType,
  PublicationType,
  SubscriberType,
  UserType,
} from "./entities";

type Sort = {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
};

type Pageable = {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

type ApiResponseBase<T> = {
  content: T[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: Sort;
  empty: boolean;
};

export type ApiPublicationsResponse = ApiResponseBase<PublicationType>;

export type ApiAuthorsResponse = ApiResponseBase<PublicationAuthorType>;

export type ApiEmployeesResponse = ApiResponseBase<EmployeeType>;

export type ApiUsersResponse = ApiResponseBase<UserType>;

export type ApiMagazinesResponse = ApiResponseBase<MagazineType>;

export type ApiEditorsResponse = ApiResponseBase<EditorType>;

export type ApiSubscribersResponse = ApiResponseBase<SubscriberType>;
