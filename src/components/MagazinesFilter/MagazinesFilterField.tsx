import { Dispatch, FC, useCallback } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Radio,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { STATUSES, statusSelectorOptions } from "@/config/constants";

import {
  FieldsMagazinesAction,
  IFieldsMagazinesState,
} from "@/helpers/reducers/fieldsMagazinesReducer";
import useMagazineYears from "@/hooks/useMagazineYears";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "500px",
      width: 230,
    },
  },
};

interface IMagazinesFilterFieldProps {
  fieldsState: IFieldsMagazinesState;
  fieldsDispatch: Dispatch<FieldsMagazinesAction>;
}

const MagazinesFilterField: FC<IMagazinesFilterFieldProps> = ({
  fieldsState,
  fieldsDispatch,
}) => {
  const { date, statuses } = fieldsState;

  const uniqueMagazineYears = useMagazineYears();

  const handleChange = useCallback(
    (setter: (values: string[]) => void) =>
      (event: SelectChangeEvent<string[]>) => {
        const {
          target: { value },
        } = event;
        setter(typeof value === "string" ? value.split(",") : value);
      },
    []
  );

  const handleYearsChange = (event: SelectChangeEvent<string>) => {
    fieldsDispatch({ type: "SET_YEAR", payload: event.target.value });
  };

  return (
    <>
      <FormControl sx={{ width: "230px" }} size="small">
        <InputLabel id="years">За роком</InputLabel>
        <Select
          labelId="years"
          id="years"
          value={date}
          label="За датою"
          size="small"
          onChange={handleYearsChange}
        >
          <MenuItem value="">
            <span>Усі роки</span>
          </MenuItem>

          {uniqueMagazineYears.map(year => (
            <MenuItem key={year} value={year.concat("-01-01")}>
              <Box display="flex" alignItems="center">
                <Radio
                  checked={date === year.concat("-01-01")}
                  value={year}
                  name="radio-button"
                  sx={{
                    padding: 0,
                    marginRight: 3,

                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                      color: "color.grey",
                    },
                  }}
                />
                {year}
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ width: "230px" }} size="small">
        <InputLabel id="statuses">Всі статуси</InputLabel>
        <Select
          labelId="statuses"
          id="statuses"
          label="Всі статуси"
          multiple
          value={statuses}
          onChange={handleChange(value =>
            fieldsDispatch({ type: "SET_STATUSES", payload: value })
          )}
          renderValue={selected =>
            selected.map(val => STATUSES[val].LABEL).join(", ")
          }
          MenuProps={MenuProps}
        >
          {statusSelectorOptions.map(({ label, value }) => (
            <MenuItem key={label} value={value}>
              <Checkbox checked={statuses.indexOf(value) > -1} />
              <ListItemText primary={label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default MagazinesFilterField;
