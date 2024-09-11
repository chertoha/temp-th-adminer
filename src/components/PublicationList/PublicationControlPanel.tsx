import { FC, useRef, useState } from "react";
import { Badge, Box, Grow, IconButton, Link, Stack } from "@mui/material";

import DeleteButton from "../UIKit/DeleteButton";

import { useDeletePublicationMutation } from "@/redux/publications/publicationsApi";

import ChatIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  StyledTextarea,
  button,
  noteWrapper,
  note,
  link,
} from "./PublicationControlPanel.styled";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { ROUTES } from "@/config/routes";

interface IPublicationControlPanelProps {
  id: number;
  comment: string | null;
}

const PublicationControlPanel: FC<IPublicationControlPanelProps> = ({
  id,
  comment,
}) => {
  const [isOpenNote, setIsOpenNote] = useState(false);

  const [deletePublication] = useDeletePublicationMutation();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    setIsOpenNote(prevState => !prevState);
  };

  const handleDelete = async (id: number) => {
    try {
      await deletePublication(id).unwrap();
    } catch (error) {
      console.log(`error:`, error);
    }
  };

  return (
    <Stack direction="row">
      <IconButton aria-label="comment" onClick={handleClick} sx={button}>
        <Badge badgeContent={comment ? "!" : null} color="warning">
          <ChatIcon />
        </Badge>
      </IconButton>

      <Grow in={isOpenNote}>
        <Box sx={noteWrapper}>
          <StyledTextarea
            placeholder="Нотатка..."
            value={comment || undefined}
            ref={textareaRef}
            readOnly
            sx={note}
          />
        </Box>
      </Grow>

      <Link aria-label="edit" href={`${ROUTES.PUBLICATIONS}/${id}`} sx={link}>
        <EditOutlinedIcon />
      </Link>

      <DeleteButton onDelete={() => handleDelete(id)} />
    </Stack>
  );
};
export default PublicationControlPanel;
