import {
  SUBSCRIBERS_DEFAULT_LIMIT,
  SUBSCRIBERS_DEFAULT_PAGE,
  SUBSCRIBERS_SORT_VALUES,
} from "@/config/paginationConfig";
import { axiosBaseQuery } from "@/services/api";
import { ApiSubscribersResponse } from "@/types/responses";
import { createApi } from "@reduxjs/toolkit/query/react";

type SubscribersQueryType = {
  sort?: string;
  page?: number;
  size?: number;
};

export const subscribersApi = createApi({
  reducerPath: "subscribers",

  baseQuery: axiosBaseQuery(),

  tagTypes: ["Subscribers"],

  endpoints: builder => ({
    getSubscribers: builder.query<ApiSubscribersResponse, SubscribersQueryType>(
      {
        query: ({
          size = SUBSCRIBERS_DEFAULT_LIMIT,
          page = SUBSCRIBERS_DEFAULT_PAGE,
          sort = SUBSCRIBERS_SORT_VALUES.DESC,
        }) => ({
          url: "/admin/subscriptions",
          method: "GET",
          params: {
            size,
            page,
            sort,
          },
        }),
        providesTags: ["Subscribers"],
      }
    ),

    getSubscribersData: builder.query<any, void>({
      query: () => ({
        url: "/admin/subscriptions/export",
        method: "GET",
      }),
    }),

    deleteSubscriber: builder.mutation<void, number>({
      query: id => ({
        url: `/admin/subscriptions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Subscribers"],
    }),
  }),
});

export const {
  useGetSubscribersQuery,
  useLazyGetSubscribersDataQuery,
  useDeleteSubscriberMutation,
} = subscribersApi;
