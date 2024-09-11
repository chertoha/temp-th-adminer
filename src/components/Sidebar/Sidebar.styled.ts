import MuiDrawer from "@mui/material/Drawer";

import { SxProps, styled } from "@mui/material";
import { drawerWidth } from "@/config/constants";
import { NavLink } from "react-router-dom";

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    backgroundColor: theme.palette.bg.main,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

    boxSizing: "border-box",

    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(28),

      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(36),
      },
    }),
  },
}));

export const StyledLink = styled(NavLink)(() => ({
  display: "block",
  textDecoration: "none",
  color: "black",

  "&.active": {
    backgroundColor: "#999999",
    color: "white",

    "& svg": { fill: "white" },
  },
}));

const tools: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  px: [4],
  pl: [10],
};

const styles = { tools };
export default styles;
