import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import LogoutButton from "../UIKit/LogoutButton";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import useAuth from "@/hooks/useAuth";
import NavItem from "./NavItem";

import { FC } from "react";
import { ListItem, Tooltip, Typography } from "@mui/material";
import { mainLinks } from "./utils/mainLinks";
import { profileLinks } from "./utils/profileLinks";

interface ISidebarNavProps {
  open: boolean;
}

const SidebarNav: FC<ISidebarNavProps> = ({ open }) => {
  const { user } = useAuth();

  const isRootAdmin = user?.roles.includes("ROOT");

  return (
    <>
      <List component="nav">
        {mainLinks.map(
          ({ id, label, route, Icon, rootOnly }) =>
            (!rootOnly || isRootAdmin) && (
              <NavItem key={id} Icon={Icon} label={label} route={route} />
            )
        )}

        <Divider sx={{ my: 10 }} />

        <ListItem>
          <Typography component="h2" variant="h6">
            {open ? "Профіль" : <PermIdentityIcon />}
          </Typography>
        </ListItem>

        <Divider sx={{ my: 4 }} />

        {profileLinks.map(
          ({ id, label, route, Icon, rootOnly }) =>
            (!rootOnly || isRootAdmin) && (
              <NavItem key={id} Icon={Icon} label={label} route={route} />
            )
        )}

        <LogoutButton>
          <ListItemButton>
            <Tooltip title="Вийти">
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary="Вийти" />
          </ListItemButton>
        </LogoutButton>
      </List>
    </>
  );
};

export default SidebarNav;
