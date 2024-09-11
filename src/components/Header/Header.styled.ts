import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";

import { drawerWidth } from "@/config/constants";
import { SxProps, styled } from "@mui/material";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,

  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,

    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const MenuButton = styled(IconButton, {
  shouldForwardProp: prop => prop !== "open",
})<{ open: boolean }>(({ open }) => ({
  marginRight: "36px",
  ...(open && { display: "none" }),
}));

const toolbar: SxProps = { px: [12], pr: "24px" };

const heading: SxProps = { flexGrow: 1, color: "text.primary" };

const styles = { toolbar, heading };
export default styles;
