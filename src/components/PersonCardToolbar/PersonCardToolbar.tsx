import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteButton from "../UIKit/DeleteButton";
import styles from "./PersonCardToolbar.styled";

import { FC } from "react";
import { IconButton, Stack } from "@mui/material";

interface IPersonCardToolbarProps {
  onEdit: () => void;
  onDelete: () => void;
}

const PersonCardToolbar: FC<IPersonCardToolbarProps> = ({
  onDelete,
  onEdit,
}) => {
  return (
    <Stack sx={styles.toolbar}>
      <IconButton aria-label="delete" sx={styles.edit} onClick={onEdit}>
        <EditOutlinedIcon />
      </IconButton>

      <DeleteButton onDelete={onDelete} />
    </Stack>
  );
};

export default PersonCardToolbar;
