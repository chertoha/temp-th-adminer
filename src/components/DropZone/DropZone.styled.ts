import { Box, SxProps, styled } from "@mui/material";

export const MainLabel = styled(Box, {
  shouldForwardProp: prop => prop !== "dragisover",
})<{ dragisover: boolean }>(({ dragisover, theme }) => ({
  position: "relative",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  border: "2px dashed",
  borderColor: theme.palette.text.secondary,
  borderRadius: 4,

  backgroundColor: dragisover ? "gray" : "white",
  transition: theme.transitions.create("background-color"),

  "&:hover": {
    backgroundColor: "gray",
  },
}));

const text: SxProps = {
  textDecoration: "underline",
  color: "text.secondary",
  fontWeight: 700,
};

const inner: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const error: SxProps = {
  color: "red",
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translateX(-50%)",
};

const styles = { text, inner, error };
export default styles;
