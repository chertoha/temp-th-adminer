import { SxProps } from "@mui/material";
import { input } from "@/styles/atomics";

const form: SxProps = { display: "flex", gap: "32px", alignItems: "center" };

const avatar: SxProps = {
  position: "relative",
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  height: "218px",
  width: "218px",
  overflow: "hidden",
  borderRadius: "4px",
  backgroundColor: "rgba(0,0,0,0.7)",
  color: "text.secondary",
};

const errorMessage: SxProps = {
  position: "absolute",
  top: "100%",
  left: 0,
  textAlign: "center",
  width: "100%",
  color: "red",
  fontSize: 9,
};

const avatarError: SxProps = {
  ...errorMessage,
  top: "20px",
};

const nameError: SxProps = {
  ...errorMessage,
};

const field: SxProps = {
  ...input,

  width: "100%",
};

const inputs: SxProps = {
  display: "flex",
  alignSelf: "stretch",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "331px",
};

const styles = {
  errorMessage,
  avatarError,
  nameError,
  avatar,
  form,
  inputs,
  field,
};

export default styles;
