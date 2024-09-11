import { FC, useRef, useState } from "react";
import { Badge, Box, Grow, IconButton, Link, Stack } from "@mui/material";

import DeleteButton from "../UIKit/DeleteButton";
import { ROUTES } from "@/config/routes";
import { useDeleteMagazineMutation } from "@/redux/magazines/magazinesApi";

import ChatIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  StyledTextarea,
  button,
  noteWrapper,
  note,
  link,
} from "./MagazineControlPanel.styled";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

interface IMagazineControlPanelProps {
  id: number;
  comment: string | null;
}

const MagazineControlPanel: FC<IMagazineControlPanelProps> = ({
  id,
  comment,
}) => {
  const [isOpenNote, setIsOpenNote] = useState(false);

  const [deleteMagazine] = useDeleteMagazineMutation();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    setIsOpenNote(prevState => !prevState);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteMagazine(id).unwrap();
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

      <Link aria-label="edit" href={`${ROUTES.MAGAZINES}/${id}`} sx={link}>
        <EditOutlinedIcon />
      </Link>

      <DeleteButton onDelete={() => handleDelete(id)} />
    </Stack>
  );
};
export default MagazineControlPanel;
