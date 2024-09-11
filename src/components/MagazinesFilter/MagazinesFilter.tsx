import { Dispatch, FC } from "react";
import { Box, Grid, Typography } from "@mui/material";

import FilterDatePicker from "../UIKit/FilterDatePicker/FilterDatePicker";
import MagazinesFilterFields from "./MagazinesFilterField";
import SearchField from "../UIKit/SearchField";
import Sorting from "../UIKit/Sorting/Sorting";
import ResetFilterButton from "../PublicationsFilter/ResetFilterButton";

import {
  FieldsMagazinesAction,
  IFieldsMagazinesState,
} from "@/helpers/reducers/fieldsMagazinesReducer";
import {
  DatePickerAction,
  IDatePickerState,
} from "@/helpers/reducers/dateReducer";
import {
  FilterMagazinesAction,
  IFilterMagazines,
} from "@/helpers/reducers/filterMagazinesReducer";

import {
  searchWrapper,
  inputsWrapper,
  typoWrapper,
  wrapper,
} from "./MagazinesFilter.styled";

interface IMagazinesFilterProps {
  amount: number;
  fieldsState: IFieldsMagazinesState;
  fieldsDispatch: Dispatch<FieldsMagazinesAction>;
  datePickerState: IDatePickerState;
  datePickerDispatch: Dispatch<DatePickerAction>;
  initialState: IFilterMagazines;
  filterDispatch: Dispatch<FilterMagazinesAction>;
}

const MagazinesFilter: FC<IMagazinesFilterProps> = ({
  amount,
  fieldsState,
  fieldsDispatch,
  datePickerState,
  datePickerDispatch,
  initialState,
  filterDispatch,
}) => {
  const handleResetFilter = () =>
    filterDispatch({ type: "RESET_FILTERS", payload: initialState });

  return (
    <>
      <Box sx={wrapper}>
        <Box sx={searchWrapper}>
          <SearchField
            query={fieldsState.query}
            handler={value =>
              fieldsDispatch({ type: "SET_QUERY", payload: value })
            }
          />
        </Box>

        <ResetFilterButton handler={handleResetFilter} />
      </Box>

      <Grid container gap="8px" mb="8px">
        <Grid item>
          <Box sx={inputsWrapper}>
            <MagazinesFilterFields
              fieldsState={fieldsState}
              fieldsDispatch={fieldsDispatch}
            />
          </Box>
        </Grid>

        <Grid item>
          <Box sx={inputsWrapper}>
            <FilterDatePicker
              datePickerState={datePickerState}
              datePickerDispatch={datePickerDispatch}
            />
          </Box>
        </Grid>
      </Grid>

      <Box sx={typoWrapper}>
        <Typography variant="body1" component="span" color="color.grey">
          Знайдено журналів:{" "}
          <Typography variant="inherit" component="span" color="color.dark">
            {amount}
          </Typography>
        </Typography>

        <Sorting
          isNewerOrder={datePickerState.isNewerOrder}
          handler={() =>
            datePickerDispatch({
              type: "SET_SORT_BY_NEW",
              payload: !datePickerState.isNewerOrder,
            })
          }
        />
      </Box>
    </>
  );
};

export default MagazinesFilter;
