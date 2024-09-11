import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";

import DeleteButton from "../UIKit/DeleteButton";

import {
  char,
  charWrapper,
  emailText,
  infoWrapper,
} from "./EditorsCard.styled";
import { useDeleteEditorMutation } from "@/redux/editors/editorsApi";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

interface IEditorsCardProps {
  name: string;
  email: string;
  id: number;
}

const EditorsCard: FC<IEditorsCardProps> = ({ name, email, id }) => {
  const [deleteEditor] = useDeleteEditorMutation();

  const handleDelete = async (id: number) => {
    try {
      await deleteEditor(id).unwrap();
    } catch (error) {
      console.log(error);
      toast.error(DEFAULT_ERROR_NOTIFICATION);
    }
  };

  return (
    <Stack direction="row" spacing="8px">
      <Box sx={charWrapper}>
        <Typography variant="h6" component="span" sx={char}>
          {name ? name.charAt(0) : "Н"}
        </Typography>
      </Box>

      <Stack sx={infoWrapper}>
        <Typography
          variant="body1"
          component="p"
          noWrap
          sx={{ fontWeight: 600 }}
        >
          {name ? name : "Ноунейм"}
        </Typography>
        <Typography variant="body1" component="p" noWrap sx={emailText}>
          {email}
        </Typography>
      </Stack>

      <DeleteButton onDelete={() => handleDelete(id)} />
    </Stack>
  );
};
export default EditorsCard;
