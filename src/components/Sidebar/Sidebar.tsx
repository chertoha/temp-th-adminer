import { FC } from "react";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";

import SidebarNav from "./SidebarNav";
import SidebarHeader from "./SidebarHeader";

import styles, { Drawer } from "./Sidebar.styled";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ReactComponent as LogoIcon } from "@/assets/images/icons/logo.svg";

interface ISidebarProps {
  open: boolean;
  toggleDrawer: () => void;
}

const Sidebar: FC<ISidebarProps> = ({ open, toggleDrawer }) => {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar sx={styles.tools}>
        <LogoIcon width="100" />

        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <SidebarHeader open={open} />

      <Divider />

      <SidebarNav open={open} />
    </Drawer>
  );
};

export default Sidebar;
