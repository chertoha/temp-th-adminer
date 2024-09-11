import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = theme => ({
  maxWidth: {
    md: theme.breakpoints.values.sm,
  },
});

export const wrapper: SxProps = {
  position: "relative",
  marginTop: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const avatar: SxProps = {
  m: 1,
  bgcolor: "secondary.main",
};

export const submit: SxProps = { mt: "30px", mb: 2, fontSize: "20px" };
