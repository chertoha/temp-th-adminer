import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/services/api";
import { RootFormValues } from "@/types/forms";

export const rootAdminApi = createApi({
  reducerPath: "root",

  baseQuery: axiosBaseQuery(),

  endpoints: builder => ({
    updateRootName: builder.mutation<void, RootFormValues>({
      query: data => ({
        url: "/profile/name",
        method: "PATCH",
        data,
      }),
    }),

    updateRootEmail: builder.mutation<void, RootFormValues>({
      query: data => ({
        url: "/root/email",
        method: "PATCH",
        data,
      }),
    }),

    updateRootPassword: builder.mutation<void, RootFormValues>({
      query: password => ({
        url: "/profile/password",
        method: "PATCH",
        data: password,
      }),
    }),
  }),
});

export const {
  useUpdateRootNameMutation,
  useUpdateRootEmailMutation,
  useUpdateRootPasswordMutation,
} = rootAdminApi;
