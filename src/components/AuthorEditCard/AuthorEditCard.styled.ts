import { SxProps, Theme } from "@mui/material";

const wrapper: SxProps = {
  position: "relative",
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  height: "180px",
  overflow: "hidden",
  borderRadius: "4px",
  backgroundColor: "rgba(0,0,0,0.7)",
  color: "text.secondary",
};

const label: SxProps<Theme> = theme => ({
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  gap: "8px",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",

  fontSize: 14,
  lineHeight: 1.3,
  fontWeight: 600,
  color: "#EDEDED",

  transition: theme.transitions.create(["color"]),
  "&:hover": {
    color: "text.primary",
  },

  "&:hover span::after": {
    backgroundColor: "text.primary",
  },
});

const camera: SxProps = {
  display: "block",
  width: "32px",
  height: "32px",

  "&>svg": {
    display: "block",
    width: "100%",
    height: "100%",
  },
};

const text: SxProps<Theme> = theme => ({
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-4px",
    left: 0,
    width: "100%",
    height: "1px",
    backgroundColor: "#EDEDED",

    transition: theme.transitions.create(["background-color"]),
  },
});

const inputWrapper: SxProps = {
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "220px",
};

const input: SxProps = {
  fontSize: 16,
  lineHeight: 1.5,

  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    borderRadius: 1,
  },

  ".MuiOutlinedInput-root .MuiOutlinedInput-input": {
    boxSizing: "border-box",
    height: "40px",

    backgroundColor: "color.light",
    boxShadow:
      "0px 1px 5px 0px #0000001F, 0px 2px 2px 0px #00000024, 0px 1px 1px 0px #00000033",
  },
};

const preview: SxProps = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",

  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
};

const image: SxProps = {
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
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

const styles = {
  wrapper,
  label,
  camera,
  text,
  input,
  inputWrapper,
  preview,
  image,
  errorMessage,
  avatarError,
  nameError,
};
export default styles;
