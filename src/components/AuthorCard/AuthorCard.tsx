import AuthorEditCard from "../AuthorEditCard";
import AuthorRegularCard from "./AuthorRegularCard";

import { FC, useState } from "react";
import { PublicationAuthorType } from "@/types/entities";
import {
  AuthorCreationDataType,
  useUpdateAuthorMutation,
} from "@/redux/authors/authorsApi";
import { AuthorEditFormValues } from "@/types/forms";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

interface IAuthorCardProps {
  author: PublicationAuthorType;
}

const AuthorCard: FC<IAuthorCardProps> = ({ author }) => {
  const { id, avatar, name } = author;

  const [shouldEdit, setShouldEdit] = useState<boolean>(false);
  const openEditor = () => setShouldEdit(true);
  const closeEditor = () => setShouldEdit(false);

  const [updateAuthor] = useUpdateAuthorMutation();

  const onEditSubmit = (values: AuthorEditFormValues) => {
    updateAuthor({ id, ...(values as AuthorCreationDataType) })
      .unwrap()
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
        closeEditor();
      });
  };

  return shouldEdit ? (
    <AuthorEditCard
      initialValues={{ avatar, name }}
      onSubmit={onEditSubmit}
      onClose={closeEditor}
    />
  ) : (
    <AuthorRegularCard author={author} onEdit={openEditor} />
  );
};

export default AuthorCard;
