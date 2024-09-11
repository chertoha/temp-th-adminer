import { SxProps } from "@mui/material";

const wrapper: SxProps = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
};

const gallery: SxProps = {
  position: "relative",
  border: "2px solid",
  borderColor: "color.grey",
  borderRadius: "4px",
  maxHeight: "700px",
  overflow: "auto",
  backgroundColor: "white",
};

const item: SxProps = {
  position: "relative",
  borderRadius: "10px",
  overflow: "hidden",
};

const icon: SxProps = {
  position: "absolute",
  top: 8,
  right: 8,
  backgroundColor: "bg.main",

  "&:hover": {
    backgroundColor: "red",
  },
};

const styles = { wrapper, gallery, item, icon };
export default styles;
