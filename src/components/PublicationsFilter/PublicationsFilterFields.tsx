import { Dispatch, FC, useCallback } from "react";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import {
  SECTIONS_PUB,
  sectionSelectorOptions,
  SectionsPubKey,
  STATUSES,
  statusSelectorOptions,
} from "@/config/constants";
import {
  FieldsPublicationsAction,
  IFieldsPublicationsState,
} from "@/helpers/reducers/fieldsPublicationsReducer";
import useAuthors from "@/hooks/useAuthors";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "500px",
      width: 230,
    },
  },
};

interface IPublicationsFilterFieldsProps {
  fieldsState: IFieldsPublicationsState;
  fieldsDispatch: Dispatch<FieldsPublicationsAction>;
}

const PublicationsFilterFields: FC<IPublicationsFilterFieldsProps> = ({
  fieldsState,
  fieldsDispatch,
}) => {
  const { sections, authors, statuses } = fieldsState;

  const authorsArr = useAuthors();

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

  return (
    <>
      <FormControl sx={{ width: "230px" }} size="small">
        <InputLabel id="section">Всі розділи</InputLabel>
        <Select
          labelId="section"
          id="section"
          label="Всі розділи"
          multiple
          value={sections}
          onChange={handleChange(value =>
            fieldsDispatch({ type: "SET_SECTIONS", payload: value })
          )}
          renderValue={selected =>
            selected
              .map(val => SECTIONS_PUB[val as SectionsPubKey].LABEL)
              .join(", ")
          }
          MenuProps={MenuProps}
        >
          {sectionSelectorOptions.map(({ label, value }) => (
            <MenuItem key={label} value={value}>
              <Checkbox checked={sections.indexOf(value) > -1} />
              <ListItemText primary={label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ width: "230px" }} size="small">
        <InputLabel id="authors">Всі автори</InputLabel>
        <Select
          labelId="authors"
          id="authors"
          label="Всі автори"
          multiple
          value={authors}
          onChange={handleChange(value =>
            fieldsDispatch({ type: "SET_AUTHORS", payload: value })
          )}
          renderValue={selected =>
            authorsArr.authors
              .filter(({ id }) => selected.includes(id.toString()))
              .map(({ name }) => name)
              .join(", ")
          }
          MenuProps={MenuProps}
        >
          {authorsArr.authors.map(({ id, name }) => (
            <MenuItem key={id} value={id.toString()}>
              <Checkbox checked={authors.indexOf(id.toString()) > -1} />
              <ListItemText sx={{ overflow: "hidden" }} primary={name} />
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

export default PublicationsFilterFields;
