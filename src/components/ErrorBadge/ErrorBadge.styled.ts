import { SxProps } from "@mui/material";

const wrapper: SxProps = { position: "relative" };

const badge: SxProps = {
  cursor: "pointer",

  "&:hover ~ ul": {
    display: "block",
  },
};

const icon: SxProps = {
  width: "32px",
  height: "32px",
};

const list: SxProps = {
  display: "none",
  width: {
    lg: "300px",
    xl: "500px",
  },
  padding: "20px",
  position: "absolute",
  top: "100%",
  left: 0,
  backgroundColor: "white",
  border: "1px solid",
  borderColor: "color.grey",
  borderRadius: "10px",
};

const item: SxProps = { mb: "15px", "&:last-child": { mb: 0 } };

const styles = { wrapper, badge, icon, list, item };
export default styles;
