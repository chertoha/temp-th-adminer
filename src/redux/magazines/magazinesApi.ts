import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/services/api";
import { UpdateStatusQuery } from "@/types/queries";
import { ApiMagazinesResponse } from "@/types/responses";
import { MagazinesSearchType, MagazineType } from "@/types/entities";
import { MagazineFormValues } from "@/types/forms";

export const magazinesApi = createApi({
  reducerPath: "magazines",

  baseQuery: axiosBaseQuery(),

  tagTypes: ["Magazines", "Magazine"],

  endpoints: builder => ({
    getMagazines: builder.query<ApiMagazinesResponse, MagazinesSearchType>({
      query: params => ({
        url: "/admin/magazines",
        method: "GET",
        params,
      }),

      providesTags: ["Magazines", "Magazine"],
    }),

    updateMagazineStatus: builder.mutation<void, UpdateStatusQuery>({
      query: ({ id, status }) => ({
        url: `/admin/magazines/${id}/status`,
        method: "PATCH",
        params: {
          status,
        },
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Magazine", id }],
    }),

    getMagazineById: builder.query<MagazineType, string | undefined>({
      query: id => ({
        url: `/admin/magazines/${id}`,
        method: "GET",
      }),

      providesTags: (_result, _error, id) => [{ type: "Magazine", id }],
    }),

    putMagazine: builder.mutation<
      MagazineType,
      { id: string | number; data: MagazineFormValues }
    >({
      query: ({ id, data }) => ({
        url: `/admin/magazines/${id}`,
        method: "PUT",
        data,
      }),

      invalidatesTags: (_result, _error, { id }) => [{ type: "Magazine", id }],
    }),

    createMagazine: builder.mutation<MagazineType, { title: string }>({
      query: data => ({
        url: "/admin/magazines",
        method: "POST",
        data,
      }),
    }),

    deleteMagazine: builder.mutation<void, number>({
      query: id => ({
        url: `/admin/magazines/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Magazines"],
    }),
  }),
});

export const {
  useGetMagazinesQuery,
  useLazyGetMagazinesQuery,
  useUpdateMagazineStatusMutation,
  useGetMagazineByIdQuery,
  usePutMagazineMutation,
  useCreateMagazineMutation,
  useDeleteMagazineMutation,
} = magazinesApi;
