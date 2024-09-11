import { SxProps } from "@mui/material";

export const input: SxProps = {
  fontSize: 16,
  lineHeight: 1.5,

  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    borderRadius: 1,
  },

  ".MuiOutlinedInput-root .MuiOutlinedInput-input": {
    boxSizing: "border-box",
    height: "40px",

    backgroundColor: "color.light",
    boxShadow:
      "0px 1px 5px 0px #0000001F, 0px 2px 2px 0px #00000024, 0px 1px 1px 0px #00000033",
  },
};
