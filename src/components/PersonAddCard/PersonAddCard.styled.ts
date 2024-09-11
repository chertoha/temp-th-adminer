import { Box, SxProps, styled } from "@mui/material";

export const AddButton = styled(Box, {
  shouldForwardProp: prop => prop !== "isEmployee",
})<{ isEmployee: boolean }>(({ theme, isEmployee }) => ({
  margin: isEmployee ? "" : "8px auto 0",
  display: "block",
  textDecoration: "underline",
  backgroundColor: "transparent",
  border: "none",

  fontSize: isEmployee ? 20 : 16,
  lineHeight: isEmployee ? 1.5 : 1.3,
  fontWeight: 700,

  transition: theme.transitions.create("color"),
  "&:hover": {
    color: theme.palette.text.secondary,
  },
}));

const icon: SxProps = {
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  height: "180px",
  overflow: "hidden",
  borderRadius: "4px",
  backgroundColor: "#C4C4C4",
  color: "text.secondary",
};

const eployeeIcon: SxProps = {
  height: "218px",
  width: "218px",
};

const eployeeWrapper: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "32px",
  width: "534px",
};

const styles = { icon, eployeeWrapper, eployeeIcon };
export default styles;
