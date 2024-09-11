import { Dispatch, FC } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import dayjs from "dayjs";

import {
  DatePickerAction,
  IDatePickerState,
} from "@/helpers/reducers/dateReducer";

import { datePicker, item } from "./FilterDatePicker.styled";

const SORT_BY_DATE = [
  { value: "created", label: "За датою створення" },
  { value: "publicationDate", label: "За датою публікації" },
];

interface IDateRangePickerProps {
  datePickerState: IDatePickerState;
  datePickerDispatch: Dispatch<DatePickerAction>;
}

const DateRangePicker: FC<IDateRangePickerProps> = ({
  datePickerState,
  datePickerDispatch,
}) => {
  const { dateField, startDate, endDate } = datePickerState;

  const handleDateFieldChange = (event: SelectChangeEvent<string>) => {
    datePickerDispatch({ type: "SET_DATE_FILED", payload: event.target.value });
  };

  return (
    <>
      <Box>
        <FormControl sx={{ width: "230px" }} size="small">
          <InputLabel id="date-field">За датою</InputLabel>
          <Select
            labelId="date-field"
            id="date-field"
            value={dateField}
            label="За датою"
            onChange={handleDateFieldChange}
          >
            {SORT_BY_DATE.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                <Box display="flex" alignItems="center">
                  <Radio
                    checked={dateField === value}
                    value={value}
                    name="radio-button"
                    sx={item}
                  />
                  {label}
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <DatePicker
        label="Початкова дата"
        value={startDate}
        onChange={value =>
          datePickerDispatch({ type: "SET_START_DATE", payload: value })
        }
        maxDate={endDate || dayjs(new Date())}
        format="DD.MM.YYYY"
        slotProps={{
          field: { clearable: true },
        }}
        sx={datePicker}
      />

      <DatePicker
        label="Кінцева дата"
        value={endDate}
        onChange={value =>
          datePickerDispatch({ type: "SET_END_DATE", payload: value })
        }
        minDate={startDate || undefined}
        maxDate={dayjs(new Date())}
        format="DD.MM.YYYY"
        slotProps={{
          field: { clearable: true },
        }}
        sx={datePicker}
      />
    </>
  );
};

export default DateRangePicker;
