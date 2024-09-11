import { FC } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { infoForDeletePopup } from "@/config/constants";

import {
  innerPaper,
  dialogTitle,
  dialogContent,
  dialogActions,
} from "./DeletePopup.styled";

export interface IDeletePopupProps {
  isOpen: boolean;
  handleClose: () => void;
  onDelete: () => void;
}

const DeletePopup: FC<IDeletePopupProps> = ({
  handleClose,
  isOpen,
  onDelete,
}) => {
  const location = useLocation().pathname;
  const title = infoForDeletePopup[location].title || "";
  const descr = infoForDeletePopup[location].descr || "";

  const handleDelete = () => {
    onDelete();
    handleClose();
  };

  return (
    <Dialog
      open={isOpen}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert dialog slide description"
      PaperProps={{
        sx: innerPaper,
      }}
    >
      <DialogTitle textAlign="center" sx={dialogTitle}>
        Бажаєте видалити {title}?
      </DialogTitle>

      <DialogContent sx={dialogContent}>
        <DialogContentText
          textAlign="center"
          id="alert dialog slide description"
        >
          {descr}
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={dialogActions}>
        <Box width="140px">
          <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={handleClose}
          >
            Відмінити
          </Button>
        </Box>

        <Box width="140px">
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleDelete}
          >
            Видалити
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default DeletePopup;
