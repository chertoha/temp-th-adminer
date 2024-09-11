import { theme } from "@/styles/theme";
import { SxProps, styled } from "@mui/material";

export const StyledTextarea = styled("textarea")({
  width: "550px",
  height: "130px",
  padding: "10px",
  resize: "initial",
  boxSizing: "border-box",

  fontSize: "16px",
  border: `1px solid ${theme.palette.color.dark}`,
  borderRadius: "4px",
  outline: "none",

  "&:focus": {
    borderColor: "#66afe9",
    boxShadow: "0px 1px 5px 0px #0000001F",
  },
});

export const button: SxProps = {
  "&:hover": {
    color: theme.palette.color.dark,
  },
};

export const link: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  padding: "8px",
  borderRadius: "50%",
  color: theme.palette.color.grey,

  transitionDuration: "150ms",

  "&:hover": {
    color: theme.palette.color.dark,
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
};

export const noteWrapper: SxProps = {
  position: "absolute",
  bottom: "-130px",
  right: "100px",
  zIndex: "10",
};

export const note: SxProps = {
  backgroundColor: theme.palette.color.light,

  "&:hover": {
    borderColor: theme.palette.color.dark,
  },

  "&:focus": {
    borderColor: theme.palette.color.dark,
  },
};
