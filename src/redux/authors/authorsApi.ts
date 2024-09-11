import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/services/api";
import {
  AUTHORS_DEFAULT_LIMIT,
  AUTHORS_DEFAULT_PAGE,
  AUTHORS_SORT_VALUES,
} from "@/config/paginationConfig";
import { ApiAuthorsResponse } from "@/types/responses";
import { PublicationAuthorType } from "@/types/entities";

type AuthorsQueryType = {
  sort?: string;
  page?: number;
  size?: number;
};

export type AuthorCreationDataType = {
  name: string;
  avatar: string;
};

export const authorsApi = createApi({
  reducerPath: "authors",

  baseQuery: axiosBaseQuery(),

  tagTypes: ["Authors"],

  endpoints: builder => ({
    getAuthors: builder.query<ApiAuthorsResponse, AuthorsQueryType>({
      query: ({
        sort = AUTHORS_SORT_VALUES.ASC,
        page = AUTHORS_DEFAULT_PAGE,
        size = AUTHORS_DEFAULT_LIMIT,
      }) => ({
        url: "/admin/authors",
        method: "GET",
        params: {
          sort,
          page,
          size,
        },
      }),
      providesTags: ["Authors"],
    }),

    createAuthor: builder.mutation<
      PublicationAuthorType,
      AuthorCreationDataType
    >({
      query: data => ({
        url: "/admin/authors",
        method: "POST",
        data,
      }),
      invalidatesTags: ["Authors"],
    }),

    removeAuthor: builder.mutation<void, number>({
      query: id => ({
        url: `/admin/authors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Authors"],
    }),

    updateAuthor: builder.mutation<
      PublicationAuthorType,
      PublicationAuthorType
    >({
      query: ({ id, ...data }) => ({
        url: `/admin/authors/${id}`,
        method: "PUT",
        data,
      }),
      invalidatesTags: ["Authors"],
    }),
  }),
});

export const {
  useGetAuthorsQuery,
  useLazyGetAuthorsQuery,
  useCreateAuthorMutation,
  useRemoveAuthorMutation,
  useUpdateAuthorMutation,
} = authorsApi;
