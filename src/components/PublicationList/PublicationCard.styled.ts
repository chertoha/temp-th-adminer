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
  height: "90px",
  mr: "24px",
};

export const infoWrapper: SxProps = {
  color: theme.palette.color.grey,
  mr: "auto",
};

export const statusWrapper: SxProps = {
  display: "flex",
  justifyContent: "center",
  width: "153px",
};
