import { styled } from "@mui/material";

export const PagList = styled("ul")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  columnGap: "3px",

  [theme.breakpoints.up("md")]: {
    columnGap: "8px",
  },
}));

export const PagItem = styled("li")(() => ({
  flexShrink: 0,
  width: "40px",
  height: "40px",
}));

export const PagButton = styled("button", {
  shouldForwardProp: prop => prop !== "type",
})<{ pagtype: string }>(({ theme, pagtype }) => ({
  cursor: "pointer",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "#D4D4D4",
  fontSize: 20,
  lineHeight: 1,

  borderRadius: "50%",
  border: "none",
  backgroundColor: "transparent",

  [theme.breakpoints.up("md")]: {
    fontSize: 24,
    lineHeight: 1.33,
  },

  ...(pagtype === "arrow" && {
    color: theme.palette.text.primary,
  }),

  ...(pagtype === "dots" && {
    color: "#D4D4D4",
  }),

  ...(pagtype === "current" && {
    color: theme.palette.text.primary,
    border: "1px solid",
    borderColor: theme.palette.text.primary,
  }),

  transition: theme.transitions.create("background-color"),
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.02)",
  },
}));
