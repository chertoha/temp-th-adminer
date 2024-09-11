import { SxProps } from "@mui/material";

const dialog: SxProps = {
  maxWidth: "485px",
  width: "485px",
  height: "272px",
  padding: "55px 44px",
};

const content: SxProps = { padding: 0 };

const title: SxProps = {
  padding: 0,
  marginBottom: "8px",
  fontWeight: 700,
  textAlign: "center",
};

const actions: SxProps = { display: "flex", gap: "32px", marginX: "auto" };

const styles = { dialog, content, title, actions };
export default styles;
