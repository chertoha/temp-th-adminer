import { SxProps } from "@mui/material";

export const item: SxProps = {
  p: 0,

  "&:not(:last-child)": {
    mb: "12px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
};
