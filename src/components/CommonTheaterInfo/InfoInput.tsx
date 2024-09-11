import { TheaterContactsFromValues } from "@/types/forms";
import { Box, TextField, Typography } from "@mui/material";
import { FormikErrors, useFormikContext } from "formik";
import { FC } from "react";

type ValueKey = keyof FormikErrors<TheaterContactsFromValues>;

interface IInfoInputProps {
  name: string;
  type?: "text" | "email" | "tel";
  placeholder?: string;
}

const InfoInput: FC<IInfoInputProps> = ({
  name,
  type = "text",
  placeholder = "",
}) => {
  const { getFieldProps, errors, touched, values } =
    useFormikContext<TheaterContactsFromValues>();

  return (
    <Box position="relative">
      <TextField
        {...getFieldProps(name)}
        value={values[name as ValueKey] || ""}
        size="small"
        fullWidth
        type={type}
        placeholder={placeholder}
      />

      {errors[name as ValueKey] && touched[name as ValueKey] && (
        <Typography color="color.error" position="absolute">
          {errors[name as ValueKey]}
        </Typography>
      )}
    </Box>
  );
};

export default InfoInput;
