import styles from "./AuthorCard.styled";
import PersonCardToolbar from "../PersonCardToolbar";

import { FC } from "react";
import { useRemoveAuthorMutation } from "@/redux/authors/authorsApi";
import { Box, Typography } from "@mui/material";
import { createImagePreviewApiUrl } from "@/helpers/createImageApiUrl";
import { PublicationAuthorType } from "@/types/entities";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

interface IAuthorRegularCardProps {
  author: PublicationAuthorType;
  onEdit: () => void;
}

const AuthorRegularCard: FC<IAuthorRegularCardProps> = ({
  author: { id, name, avatar },
  onEdit,
}) => {
  const [removeAuthor] = useRemoveAuthorMutation();

  const onDelete = () => {
    removeAuthor(id)
      .unwrap()
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };

  return (
    <Box>
      <Box sx={styles.avatar}>
        <Box
          component="img"
          src={createImagePreviewApiUrl(avatar)}
          alt={name}
          sx={styles.image}
        />
      </Box>

      <Typography sx={styles.title} className="trim-text-two-row">
        {name}
      </Typography>

      <PersonCardToolbar onEdit={onEdit} onDelete={onDelete} />
    </Box>
  );
};

export default AuthorRegularCard;
