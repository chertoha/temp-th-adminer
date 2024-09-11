import { SxProps } from "@mui/material";

const wrapper: SxProps = {
  bgcolor: "white",
  padding: "50px",
};

const cropper: SxProps = {
  height: "400px",
  position: "relative",
  bgcolor: "white",
  overflow: "auto",
};

const tools: SxProps = {
  width: "80%",
  mx: "auto",
  py: "40px",
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
};

const submit: SxProps = { fontSize: 20, width: "50%", margin: "20px auto 0" };

const styles = { wrapper, cropper, tools, submit };
export default styles;
