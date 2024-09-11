import { SxProps } from "@mui/material";

const picker: SxProps = {
  width: "100%",
  backgroundColor: "white",
  "& .MuiInputBase-input": { py: 6 },

  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "inherit",
  },
};

const styles = { picker };
export default styles;
