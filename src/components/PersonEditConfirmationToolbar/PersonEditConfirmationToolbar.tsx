import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { FC } from "react";
import { IconButton, Stack } from "@mui/material";
import styles from "./PersonEditConfirmationToolbar.styled";

interface IPersonEditConfirmationToolbarProps {
  onClose: () => void;
}

const PersonEditConfirmationToolbar: FC<
  IPersonEditConfirmationToolbarProps
> = ({ onClose }) => {
  return (
    <Stack sx={styles.toolbar}>
      <IconButton sx={styles.icon} color="success" type="submit">
        <CheckOutlinedIcon />
      </IconButton>

      <IconButton
        sx={styles.icon}
        color="error"
        type="button"
        onClick={onClose}
      >
        <CloseOutlinedIcon />
      </IconButton>
    </Stack>
  );
};

export default PersonEditConfirmationToolbar;
