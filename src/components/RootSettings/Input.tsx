import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { FC, useState } from "react";
import { useFormikContext } from "formik";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { RootFormValues } from "@/types/forms";

interface IInputProps {
  type: "text" | "email" | "password";
  fieldName: string;
}

const Input: FC<IInputProps> = ({ type, fieldName }) => {
  const { getFieldProps } = useFormikContext<RootFormValues>();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  let fieldType: typeof type;

  if (type !== "password") {
    fieldType = type;
  } else {
    fieldType = showPassword ? "text" : "password";
  }

  return (
    <OutlinedInput
      fullWidth
      size="small"
      type={fieldType}
      {...getFieldProps(fieldName)}
      endAdornment={
        type === "password" && (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }
    />
  );
};

export default Input;
