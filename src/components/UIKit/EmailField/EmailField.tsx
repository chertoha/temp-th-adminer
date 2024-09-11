import TextField from "@mui/material/TextField";
import { useState } from "react";

const EmailField = () => {
  const [value, setValue] = useState("");

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Електронна пошта"
      name="email"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default EmailField;
