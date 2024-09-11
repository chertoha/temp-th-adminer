import { SxProps } from "@mui/material";

export const openedCharWrapper: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "48px",
  height: "48px",
  mr: "12px",

  backgroundColor: "color.grey",
  borderRadius: "4px",
};

export const closedCharWrapper: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "36px",
  height: "36px",

  backgroundColor: "color.grey",
  borderRadius: "4px",
};

export const char: SxProps = { color: "color.accentYellow" };

export const text: SxProps = { maxWidth: "154px" };
