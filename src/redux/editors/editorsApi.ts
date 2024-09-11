import { createApi } from "@reduxjs/toolkit/query/react";

import {
  EDITORS_DEFAULT_LIMIT,
  EDITORS_DEFAULT_PAGE,
  EDITORS_SORT_VALUES,
} from "@/config/paginationConfig";
import { axiosBaseQuery } from "@/services/api";
import { ApiEditorsResponse } from "@/types/responses";
import { EditorType } from "@/types/entities";
import { EditorFormType } from "@/types/forms";

type EditorsQueryType = {
  sort?: string;
  page?: number;
  size?: number;
};

export const editorsApi = createApi({
  reducerPath: "editors",
  baseQuery: axiosBaseQuery(),

  tagTypes: ["Editors"],

  endpoints: builder => ({
    getEditors: builder.query<ApiEditorsResponse, EditorsQueryType>({
      query: ({
        size = EDITORS_DEFAULT_LIMIT,
        page = EDITORS_DEFAULT_PAGE,
        sort = EDITORS_SORT_VALUES.DESC,
      }) => ({
        url: "root/editors",
        method: "GET",
        params: {
          size,
          page,
          sort,
        },
      }),

      providesTags: ["Editors"],
    }),

    createEditor: builder.mutation<EditorType, EditorFormType>({
      query: data => ({
        url: "root/editors",
        method: "POST",
        data,
      }),

      invalidatesTags: ["Editors"],
    }),

    deleteEditor: builder.mutation<void, number>({
      query: id => ({
        url: `root/editors/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Editors"],
    }),
  }),
});

export const {
  useGetEditorsQuery,
  useCreateEditorMutation,
  useDeleteEditorMutation,
} = editorsApi;
