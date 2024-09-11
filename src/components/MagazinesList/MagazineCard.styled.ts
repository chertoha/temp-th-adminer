import { theme } from "@/styles/theme";
import { SxProps } from "@mui/material";

export const card: SxProps = {
  width: "100%",

  backgroundColor: theme.palette.color.light,
};

export const cardContent: SxProps = {
  p: "0 !important",
  mb: "12px",
};

export const cardTitle: SxProps = { fontSize: 18, fontWeight: 600 };

export const imageWrapper: SxProps = {
  width: " 160px",
  height: "160px",
  mr: "24px",
};

export const infoWrapper: SxProps = {
  mt: "20px",
  mr: "auto",

  color: theme.palette.color.grey,
};

export const statusWrapper: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",

  width: "153px",
};
