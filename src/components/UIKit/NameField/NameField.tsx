import TextField from "@mui/material/TextField";
import { useState } from "react";

const NameField = () => {
  const [value, setValue] = useState("");

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="name"
      label="Ім'я"
      name="name"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default NameField;
