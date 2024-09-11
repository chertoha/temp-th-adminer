import { theme } from "@/styles/theme";
import { SxProps } from "@mui/material";

const wrapper: SxProps = { display: "flex" };

const main: SxProps = {
  backgroundColor: theme.palette.color.light,
  flexGrow: 1,
  height: "100vh",
  overflow: "auto",
};

const container: SxProps = {
  mt: 16,
  mb: 16,
  mx: "auto",
  px: "40px",
  position: "relative",
};

const styles = { main, wrapper, container };

export default styles;
