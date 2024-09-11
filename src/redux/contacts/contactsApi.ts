import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/services/api";
import { TheaterContacts } from "@/types/entities";

export const contactsApi = createApi({
  reducerPath: "contacts",

  baseQuery: axiosBaseQuery(),

  tagTypes: ["Info"],

  endpoints: builder => ({
    getTheaterInfo: builder.query<TheaterContacts, void>({
      query: () => ({
        url: "admin/contacts",
        method: "GET",
      }),
      providesTags: ["Info"],
    }),

    updateTheaterInfo: builder.mutation<TheaterContacts, TheaterContacts>({
      query: data => ({
        url: "admin/contacts",
        method: "PUT",
        data,
      }),
      invalidatesTags: ["Info"],
    }),
  }),
});

export const { useGetTheaterInfoQuery, useUpdateTheaterInfoMutation } =
  contactsApi;
