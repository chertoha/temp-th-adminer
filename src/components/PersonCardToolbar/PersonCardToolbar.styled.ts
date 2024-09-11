import { SxProps } from "@mui/material";

export const toolbar: SxProps = {
  flexDirection: "row",
  gap: "12px",
  justifyContent: "center",
  color: "text.secondary",
};

export const edit: SxProps = {
  width: "48px",
  height: "48px",
  "&:hover": {
    color: "#171717",
  },
};

const styles = { toolbar, edit };
export default styles;
