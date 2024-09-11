import { TextField } from "@mui/material";
import { useField } from "formik";
import { FC } from "react";
import styles from "./InputField.styled";

interface IInputFieldProps {
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
}

const InputField: FC<IInputFieldProps> = ({
  placeholder,
  multiline,
  rows,
  ...props
}) => {
  const [{ value, ...field }] = useField(props as any);

  return (
    <TextField
      value={value || ""}
      {...field}
      multiline={multiline}
      rows={rows}
      fullWidth
      inputProps={{ "aria-label": "Without label" }}
      placeholder={placeholder}
      size="medium"
      sx={styles.field}
    />
  );
};

export default InputField;
