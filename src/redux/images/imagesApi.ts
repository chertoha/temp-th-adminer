import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/services/api";

export type ImageUploadResponseType = {
  name: string;
};

export const imagesApi = createApi({
  reducerPath: "images",

  baseQuery: axiosBaseQuery(),

  endpoints: builder => ({
    uploadImage: builder.mutation<ImageUploadResponseType, FormData>({
      query: data => ({
        url: "/admin/images",
        method: "POST",
        data,
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      }),
    }),

    uploadImages: builder.mutation<{ name: string }[], FormData>({
      query: data => ({
        url: "/admin/images/batch",
        method: "POST",
        data,
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      }),
    }),

    deleteImage: builder.mutation<void, string>({
      query: name => ({
        url: "/admin/images",
        method: "DELETE",
        params: {
          name,
        },
      }),
    }),
  }),
});

export const {
  useUploadImageMutation,
  useUploadImagesMutation,
  useDeleteImageMutation,
} = imagesApi;
