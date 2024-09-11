import { useEffect, useReducer, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Box } from "@mui/material";
import { toast } from "react-toastify";

import PublicationList from "@/components/PublicationList";
import PublicationsFilter from "@/components/PublicationsFilter/PublicationsFilter";
import Paginator from "@/components/UIKit/Paginator";

import { useLazyGetPublicationsQuery } from "@/redux/publications/publicationsApi";
import {
  filterPublicationsReducer,
  IFilterPublications,
} from "@/helpers/reducers/filterPublicationsReducer";
import preparePublicationQueryParams from "@/helpers/preparePublicationQueryParams";
import { PUBLICATIONS_DEFAULT_LIMIT } from "@/config/paginationConfig";
import { DEFAULT_ERROR_NOTIFICATION } from "@/components/Notification/Notification";

const initialState: IFilterPublications = {
  fields: {
    sections: [],
    authors: [],
    statuses: [],
    query: "",
  },
  datePicker: {
    dateField: "created",
    startDate: null,
    endDate: null,
    isNewerOrder: false,
  },
};

const PublicationsPage = () => {
  const [page, setPage] = useState<number>(1);

  const [filterState, filterDispatch] = useReducer(
    filterPublicationsReducer,
    initialState
  );

  const { datePicker, fields } = filterState;
  const size = PUBLICATIONS_DEFAULT_LIMIT;

  const [getPublications, { data, error }] = useLazyGetPublicationsQuery();

  const onPageClick = (page: number) => setPage(page);

  const debouncedGetPublications = useDebouncedCallback(
    () =>
      getPublications(
        preparePublicationQueryParams(fields, datePicker, page, size)
      ),
    400
  );

  useEffect(() => {
    setPage(1);
  }, [filterState]);

  useEffect(() => {
    debouncedGetPublications();
  }, [debouncedGetPublications, filterState, page]);

  useEffect(() => {
    if (error) {
      console.error("Error fetching publications:", error);
      toast.error(DEFAULT_ERROR_NOTIFICATION);
    }
  }, [error]);

  if (!data) return null;

  return (
    <>
      <Box mb="24px">
        <PublicationsFilter
          amount={data.totalElements}
          fieldsState={fields}
          fieldsDispatch={filterDispatch}
          datePickerState={datePicker}
          datePickerDispatch={filterDispatch}
          initialState={initialState}
          filterDispatch={filterDispatch}
        />
      </Box>

      <Box sx={{ mb: "24px" }}>
        <PublicationList publications={data?.content} />
      </Box>

      <Paginator
        currentPage={page}
        onPageClick={onPageClick}
        perPage={PUBLICATIONS_DEFAULT_LIMIT}
        totalItems={data.totalElements}
      />
    </>
  );
};

export default PublicationsPage;
