import { FC } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import styles from "./ConfirmationPopup.styled";

interface IConfirmationPopupProps {
  isOpen: boolean;
  onConfirm: () => void;
  onReject: () => void;
  title: string;
  description?: string;
}

const ConfirmationPopup: FC<IConfirmationPopupProps> = ({
  isOpen,
  onConfirm,
  onReject,
  title,
  description = "",
}) => {
  return (
    <Dialog
      open={isOpen}
      keepMounted
      onClose={onReject}
      PaperProps={{
        sx: styles.dialog,
      }}
    >
      <DialogTitle sx={styles.title}>{title}</DialogTitle>

      <DialogContent sx={styles.content}>
        <DialogContentText textAlign="center">{description}</DialogContentText>
      </DialogContent>

      <DialogActions sx={styles.actions}>
        <Box width="140px">
          <Button variant="outlined" size="large" fullWidth onClick={onReject}>
            Відмінити
          </Button>
        </Box>

        <Box width="140px">
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={onConfirm}
          >
            Підтвердити
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationPopup;
