import { useEffect, useReducer, useState } from "react";
import { Box } from "@mui/material";
import { useDebouncedCallback } from "use-debounce";
import { toast } from "react-toastify";

import MagazinesList from "@/components/MagazinesList";
import MagazinesFilter from "@/components/MagazinesFilter";
import CreatePublicationButton from "@/components/CreatePublicationButton";
import Paginator from "@/components/UIKit/Paginator";

import { useLazyGetMagazinesQuery } from "@/redux/magazines/magazinesApi";
import {
  filterMagazinesReducer,
  IFilterMagazines,
} from "@/helpers/reducers/filterMagazinesReducer";
import { MAGAZINES_DEFAULT_LIMIT } from "@/config/paginationConfig";
import prepareMagazineQueryParams from "@/helpers/prepareMagazineQueryParams";
import { DEFAULT_ERROR_NOTIFICATION } from "@/components/Notification/Notification";

const initialState: IFilterMagazines = {
  fields: {
    date: "",
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

const MagazinesPage = () => {
  const [page, setPage] = useState<number>(1);

  const [filterState, filterDispatch] = useReducer(
    filterMagazinesReducer,
    initialState
  );

  const { datePicker, fields } = filterState;
  const size = MAGAZINES_DEFAULT_LIMIT;

  const [getMagazines, { data, error }] = useLazyGetMagazinesQuery();

  const onPageClick = (page: number) => setPage(page);

  const debouncedGetMagazines = useDebouncedCallback(
    () =>
      getMagazines(prepareMagazineQueryParams(fields, datePicker, page, size)),
    400
  );

  useEffect(() => {
    setPage(1);
  }, [filterState]);

  useEffect(() => {
    debouncedGetMagazines();
  }, [debouncedGetMagazines, filterState, page]);

  useEffect(() => {
    if (error) {
      console.error("Error fetching magazines:", error);
      toast.error(DEFAULT_ERROR_NOTIFICATION);
    }
  }, [error]);

  if (!data) return null;

  return (
    <>
      <Box mb="24px">
        <MagazinesFilter
          amount={data.totalElements}
          fieldsState={fields}
          fieldsDispatch={filterDispatch}
          datePickerState={datePicker}
          datePickerDispatch={filterDispatch}
          initialState={initialState}
          filterDispatch={filterDispatch}
        />
      </Box>

      <Box mb="24px">
        <CreatePublicationButton label="Додати журнал" isMagazine />
      </Box>

      <Box sx={{ mb: "24px" }}>
        <MagazinesList magazines={data.content} />
      </Box>

      <Paginator
        currentPage={page}
        onPageClick={onPageClick}
        perPage={MAGAZINES_DEFAULT_LIMIT}
        totalItems={data.totalElements}
      />
    </>
  );
};

export default MagazinesPage;
