import { SxProps, styled } from "@mui/material";

export const PreviewImage = styled("img")({
  display: "block",
  height: "100%",
  width: "100%",
  objectFit: "cover",
});

const cropper: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  maxHeight: "90%",
};

const remove: SxProps = {
  position: "absolute",
  top: "10px",
  right: "10px",
  bgcolor: "lightblue",
  "&:hover": {
    bgcolor: "lightblue",
    color: "red",
  },
};

const preview: SxProps = {
  border: "2px dashed",
  borderRadius: "4px",
  backgroundColor: "white",
};

const styles = { cropper, remove, preview };
export default styles;
