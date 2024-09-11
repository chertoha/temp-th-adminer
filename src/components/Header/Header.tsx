import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import CreatePublicationButton from "../CreatePublicationButton";
import styles, { AppBar, MenuButton } from "./Header.styled";

import { Typography } from "@mui/material";
import { FC } from "react";
import { mainLinks } from "../Sidebar/utils/mainLinks";
import { profileLinks } from "../Sidebar/utils/profileLinks";

interface IHeaderProps {
  open: boolean;
  toggleDrawer: () => void;
}

const Header: FC<IHeaderProps> = ({ open, toggleDrawer }) => {
  const location = useLocation();

  const allLinks = [...mainLinks, ...profileLinks];

  const currentTitle = allLinks.find(link => link.route === location.pathname);

  return (
    <AppBar
      elevation={0}
      position="absolute"
      open={open}
      sx={theme => ({ backgroundColor: theme.palette.bg.main })}
    >
      <Toolbar sx={styles.toolbar}>
        <MenuButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          open={open}
        >
          <MenuIcon />
        </MenuButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={styles.heading}
        >
          {currentTitle?.label}
        </Typography>

        <CreatePublicationButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
