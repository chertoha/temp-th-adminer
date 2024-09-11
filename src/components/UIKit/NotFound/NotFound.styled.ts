import { SxProps } from "@mui/material";

const backgroundImage = "svg/icon-search-not-found.svg";

export const wrapper: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "415px",
  height: "277px",
  marginX: "auto",

  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};
