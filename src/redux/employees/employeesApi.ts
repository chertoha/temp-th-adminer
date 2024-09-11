import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/services/api";
import { ApiEmployeesResponse } from "@/types/responses";
import {
  EMPLOYEES_DEFAULT_LIMIT,
  EMPLOYEES_DEFAULT_PAGE,
} from "@/config/paginationConfig";
import { EmployeeType } from "@/types/entities";
import { EmployeeFormValues } from "@/types/forms";
import { OrderDirection } from "@/types/queries";

type EmployeesQueryType = {
  page?: number;
  size?: number;
};

export const employeesApi = createApi({
  reducerPath: "employees",
  baseQuery: axiosBaseQuery(),

  endpoints: builder => ({
    getEmployees: builder.query<ApiEmployeesResponse, EmployeesQueryType>({
      query: ({
        page = EMPLOYEES_DEFAULT_PAGE,
        size = EMPLOYEES_DEFAULT_LIMIT,
      }) => ({
        url: "admin/employees",
        method: "GET",
        params: {
          page,
          size,
        },
      }),
    }),

    createEmployee: builder.mutation<EmployeeType, EmployeeFormValues>({
      query: data => ({
        url: `admin/employees`,
        method: "POST",
        data,
      }),
    }),

    removeEmployee: builder.mutation<void, number>({
      query: id => ({
        url: `admin/employees/${id}`,
        method: "DELETE",
      }),
    }),

    updateEmployee: builder.mutation<
      EmployeeType,
      { id: number; data: EmployeeFormValues }
    >({
      query: ({ id, data }) => ({
        url: `admin/employees/${id}`,
        method: "PUT",
        data,
      }),
    }),

    changeOrder: builder.mutation<
      void,
      { id: number; direction: OrderDirection }
    >({
      query: ({ id, direction }) => ({
        url: `admin/employees/${id}/position`,
        method: "PATCH",
        params: {
          direction,
        },
      }),
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useLazyGetEmployeesQuery,
  useRemoveEmployeeMutation,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useChangeOrderMutation,
} = employeesApi;
