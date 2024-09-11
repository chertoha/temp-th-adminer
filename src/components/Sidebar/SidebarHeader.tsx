import useAuth from "@/hooks/useAuth";
import {
  Box,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC } from "react";
import {
  char,
  closedCharWrapper,
  openedCharWrapper,
  text,
} from "./SidebarHeader.styled";

interface ISidebarHeaderProps {
  open: boolean;
}

const SidebarHeader: FC<ISidebarHeaderProps> = ({ open }) => {
  const { user } = useAuth();

  if (!user) return null;

  const name = user?.name || "Ноунейм";

  return (
    <Box sx={{ display: "flex", height: "84px", py: "18px", pl: "16px" }}>
      <ListItemIcon>
        {open ? (
          <Box sx={openedCharWrapper}>
            <Typography variant="h3" sx={char}>
              {name.charAt(0).toUpperCase()}
            </Typography>
          </Box>
        ) : (
          <Box sx={closedCharWrapper}>
            <Typography variant="h4" sx={char}>
              {name.charAt(0).toUpperCase()}
            </Typography>
          </Box>
        )}
      </ListItemIcon>

      <ListItemText>
        <Typography variant="body1" noWrap sx={text}>
          {name}
        </Typography>

        <Tooltip title={user.email}>
          <Typography variant="body3" noWrap sx={text}>
            {user.email}
          </Typography>
        </Tooltip>
      </ListItemText>
    </Box>
  );
};

export default SidebarHeader;
