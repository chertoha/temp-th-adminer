import { FC, useState } from "react";
import { IconButton } from "@mui/material";

import DeleteIcon from "@mui/icons-material/DeleteOutline";
import { button } from "./DeleteButton.styled";
import DeletePopup from "../DeletePopup";

interface IDeleteButtonProps {
  onDelete: () => void;
}

const DeleteButton: FC<IDeleteButtonProps> = ({ onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <IconButton aria-label="delete" sx={button} onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>

      <DeletePopup
        isOpen={isOpen}
        handleClose={handleClose}
        onDelete={onDelete}
      />
    </>
  );
};
export default DeleteButton;
