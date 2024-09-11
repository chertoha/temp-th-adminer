import ListItemIcon from "@mui/material/ListItemIcon";

import { FC } from "react";
import { StyledLink } from "./Sidebar.styled";
import { ListItemButton, ListItemText, Tooltip } from "@mui/material";
import { To } from "react-router-dom";

interface INavItemProps {
  route: To;
  label: string;
  Icon: FC<React.SVGProps<SVGSVGElement>>;
}

const NavItem: FC<INavItemProps> = ({ route, Icon, label }) => {
  return (
    <StyledLink to={route}>
      <ListItemButton>
        <Tooltip title={label}>
          <ListItemIcon>{Icon && <Icon />}</ListItemIcon>
        </Tooltip>
        <ListItemText primary={label} />
      </ListItemButton>
    </StyledLink>
  );
};

export default NavItem;
