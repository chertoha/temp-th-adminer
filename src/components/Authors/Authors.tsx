import AuthorEditCard from "../AuthorEditCard";
import AuthorCard from "../AuthorCard";
import styles from "./Authors.styled";
import Paginator from "../UIKit/Paginator";
import PersonAddCard from "../PersonAddCard";

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  AuthorCreationDataType,
  useCreateAuthorMutation,
  useGetAuthorsQuery,
} from "@/redux/authors/authorsApi";

import { AUTHORS_DEFAULT_LIMIT } from "@/config/paginationConfig";
import { AuthorEditFormValues } from "@/types/forms";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

const Authors = () => {
  const [shouldCreate, setShouldCreate] = useState<boolean>(false);
  const openCreation = () => setShouldCreate(true);
  const closeCreation = () => setShouldCreate(false);

  const [page, setPage] = useState<number>(1);
  const onPageClick = (page: number) => setPage(page);

  const { data, error } = useGetAuthorsQuery({ page });
  const [createAuthor] = useCreateAuthorMutation();

  useEffect(() => {
    if (error) {
      console.error("Error fetching authors:", error);
      toast.error(DEFAULT_ERROR_NOTIFICATION);
    }
  }, [error]);

  const onAddSubmit = (values: AuthorEditFormValues) => {
    createAuthor(values as AuthorCreationDataType)
      .unwrap()
      .then(() => {
        closeCreation();
      })
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };

  if (!data) return null;

  return (
    <>
      <Typography>Кількість авторів: {data.totalElements}</Typography>

      <Box component="ul" sx={styles.list}>
        <Box component="li" sx={styles.item}>
          <PersonAddCard onCreate={openCreation} label="+ Додати автора" />
        </Box>

        {shouldCreate && (
          <Box sx={styles.item} component="li">
            <AuthorEditCard onSubmit={onAddSubmit} onClose={closeCreation} />
          </Box>
        )}

        {data.content.map(author => (
          <Box key={author.id} sx={styles.item} component="li">
            <AuthorCard author={author} />
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: "40px" }}>
        <Paginator
          currentPage={page}
          onPageClick={onPageClick}
          perPage={AUTHORS_DEFAULT_LIMIT}
          totalItems={data.totalElements}
        />
      </Box>
    </>
  );
};

export default Authors;
