import { theme } from "@/styles/theme";
import { SxProps } from "@mui/material";

export const charWrapper: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "48px",
  height: "48px",

  borderRadius: "4px",
  backgroundColor: theme.palette.color.grey,
};

export const char: SxProps = { color: "#F3C319", textTransform: "uppercase" };

export const infoWrapper: SxProps = { width: "260px" };

export const emailText: SxProps = { color: theme.palette.color.grey };
