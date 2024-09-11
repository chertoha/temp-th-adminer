import { SxProps } from "@mui/material";

export const datePicker: SxProps = {
  // width: "100%",
  width: "230px",
  "& .MuiInputBase-input": { py: "8.5px" },
  "& .MuiFormLabel-root": {
    top: "-7.5px",
  },

  "& .MuiInputLabel-shrink": {
    transform: "matrix(0.75, 0, 0, 0.75, 14, -2)",
  },
};

export const item: SxProps = {
  padding: 0,
  marginRight: 3,

  "& .MuiSvgIcon-root": {
    fontSize: 20,
    color: "color.grey",
  },
};
