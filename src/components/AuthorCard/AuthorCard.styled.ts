import { SxProps } from "@mui/material";

export const toolbar: SxProps = {
  flexDirection: "row",
  gap: "12px",
  // mt: "18px",
  justifyContent: "center",
  color: "text.secondary",
};

export const title: SxProps = {
  height: "50px",
  mt: "8px",
  fontSize: "18px",
  lineHeight: 1.33,
  fontWeight: 600,
  textAlign: "center",
};

export const avatar: SxProps = {
  height: "180px",
  overflow: "hidden",
  borderRadius: "4px",
};

export const image: SxProps = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export const edit: SxProps = {
  width: "48px",
  height: "48px",
  "&:hover": {
    color: "#171717",
  },
};

const styles = { toolbar, title, avatar, image, edit };
export default styles;
