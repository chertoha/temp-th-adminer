import { SxProps } from "@mui/material";

const list: SxProps = {
  mt: "64px",
  display: "grid",
  gridTemplateColumns: {
    lg: "repeat(3, 1fr)",
    xl: "repeat(4, 1fr)",
  },
  columnGap: {
    lg: "70px",
    xl: "96px",
  },
  rowGap: "60px",
};

const item: SxProps = { width: "180px" };

const styles = { list, item };
export default styles;
