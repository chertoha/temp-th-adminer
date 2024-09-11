import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import styles from "./SectionsSelector.styled";

import { FC, SyntheticEvent } from "react";
import { useFormikContext } from "formik";
import { PublicationSection } from "@/types/entities";
import { sectionSelectorOptions } from "@/config/constants";
import { PublicationFormValues } from "@/types/forms";

type Option = {
  id: string;
  label: string;
  value: PublicationSection;
};

interface ISectionsSelectorProps {
  name: string;
}

const SectionsSelector: FC<ISectionsSelectorProps> = ({ name: fieldName }) => {
  const options = sectionSelectorOptions;

  const { setFieldValue, values } = useFormikContext<PublicationFormValues>();

  const onChangeSelector = (
    _event: SyntheticEvent<Element, Event>,
    values: Option[]
  ) => {
    const sections = values.map(({ value }) => value);
    setFieldValue(fieldName, sections);
  };

  const selectorValue = options.filter(({ value }) =>
    (values.sections as string[]).includes(value)
  );

  return (
    <Autocomplete
      sx={styles.selector}
      value={selectorValue}
      onChange={onChangeSelector}
      multiple
      options={options}
      getOptionLabel={option => option.label}
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"
          placeholder="Оберіть розділи"
        />
      )}
    />
  );
};

export default SectionsSelector;
