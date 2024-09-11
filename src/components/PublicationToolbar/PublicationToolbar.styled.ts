import { SxProps } from "@mui/material";

const wrapper: SxProps = {
  pt: "10px",
  pb: "20px",
  zIndex: "99",
  position: "sticky",
  top: 64,
  width: "100%",
  backgroundColor: "color.light",
};

const container: SxProps = {
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "4px",
};

const toolbar: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const styles = { toolbar, wrapper, container };

export default styles;
