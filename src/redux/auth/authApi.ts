import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/services/api";
import { UserData } from "@/types/entities";

type LoginRequest = {
  email: FormDataEntryValue;
  password: FormDataEntryValue;
};

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: axiosBaseQuery(),

  endpoints: builder => ({
    login: builder.mutation<UserData, LoginRequest>({
      query: data => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),

    refreshUser: builder.query<UserData, void>({
      query: () => ({
        url: "/profile/info",
        method: "GET",
      }),
    }),

    resetPassword: builder.mutation<void, { email: string }>({
      query: data => ({
        url: "/reset-password",
        method: "POST",
        data,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useLazyRefreshUserQuery,
  useResetPasswordMutation,
} = authApi;
