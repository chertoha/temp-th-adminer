import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/services/api";
import { ApiPublicationsResponse } from "@/types/responses";
import { PublicationsSearchType } from "@/types/entities";
import { PublicationType } from "@/types/entities";
import { UpdatePublicationQuery, UpdateStatusQuery } from "@/types/queries";

export const publicationsApi = createApi({
  reducerPath: "publications",

  baseQuery: axiosBaseQuery(),

  tagTypes: ["Publications", "Publication"],

  endpoints: builder => ({
    getPublications: builder.query<
      ApiPublicationsResponse,
      PublicationsSearchType
    >({
      query: params => ({
        url: "/admin/publications",
        method: "GET",
        params,
      }),

      providesTags: ["Publications"],
    }),

    getPublicationById: builder.query<PublicationType, string | undefined>({
      query: id => ({
        url: `/admin/publications/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Publication", id }],
    }),

    putPublication: builder.mutation<
      PublicationType,
      { id: string | number; data: UpdatePublicationQuery }
    >({
      query: ({ id, data }) => ({
        url: `/admin/publications/${id}`,
        method: "PUT",
        data,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Publication", id },
      ],
    }),

    deletePublication: builder.mutation<void, number>({
      query: id => ({
        url: `/admin/publications/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Publications"],
    }),

    updatePublicationStatus: builder.mutation<void, UpdateStatusQuery>({
      query: ({ id, status }) => ({
        url: `/admin/publications/${id}/status`,
        method: "PATCH",
        params: {
          status,
        },
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Publication", id },
        { type: "Publications" },
      ],
    }),

    createPublication: builder.mutation<PublicationType, { title: string }>({
      query: data => ({
        url: "/admin/publications",
        method: "POST",
        data,
      }),
    }),

    sendWeeklyPublications: builder.query<void, void>({
      query: () => ({
        url: "/admin/publications/weekly",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetPublicationsQuery,
  useLazyGetPublicationsQuery,
  usePutPublicationMutation,
  useGetPublicationByIdQuery,
  useDeletePublicationMutation,
  useUpdatePublicationStatusMutation,
  useCreatePublicationMutation,
  useLazySendWeeklyPublicationsQuery,
} = publicationsApi;
