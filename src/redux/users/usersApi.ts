import {
  USERS_DEFAULT_LIMIT,
  USERS_DEFAULT_PAGE,
  USERS_SORT_VALUES,
} from "@/config/paginationConfig";
import { axiosBaseQuery } from "@/services/api";
import { ApiUsersResponse } from "@/types/responses";
import { createApi } from "@reduxjs/toolkit/query/react";

type UsersQueryType = {
  sort?: string;
  page?: number;
  size?: number;
};

export const usersApi = createApi({
  reducerPath: "users",

  baseQuery: axiosBaseQuery(),

  tagTypes: ["Users"],

  endpoints: builder => ({
    getUsers: builder.query<ApiUsersResponse, UsersQueryType>({
      query: ({
        size = USERS_DEFAULT_LIMIT,
        page = USERS_DEFAULT_PAGE,
        sort = USERS_SORT_VALUES.DESC,
      }) => ({
        url: "/admin/users",
        method: "GET",
        params: {
          size,
          page,
          sort,
        },
      }),
      providesTags: ["Users"],
    }),

    deleteUser: builder.mutation<void, number>({
      query: id => ({
        url: `/admin/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery, useDeleteUserMutation } = usersApi;
