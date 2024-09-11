import { SxProps } from "@mui/material";

export const sortWrapper: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mb: "40px",
};

export const tableRow: SxProps = {
  "&:last-child td, &:last-child th": { border: 0 },
};
