import { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import DeleteButton from "../UIKit/DeleteButton";
import Paginator from "../UIKit/Paginator";
import Sorting from "../UIKit/Sorting/Sorting";

import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "@/redux/users/usersApi";
import { USERS_DEFAULT_LIMIT } from "@/config/paginationConfig";

import { sortWrapper, tableRow } from "./UsersList.styled";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

const UsersList = () => {
  const [page, setPage] = useState(1);
  const [isNewerOrder, setIsNewerOrder] = useState(false);

  const { data, error } = useGetUsersQuery({
    page,
    sort: isNewerOrder ? "id,asc" : "id,desc",
  });
  const [deleteUser] = useDeleteUserMutation();

  useEffect(() => {
    if (error) {
      console.error("Error fetching users:", error);
      toast.error(DEFAULT_ERROR_NOTIFICATION);
    }
  }, [error]);

  if (!data) return null;

  const { content, totalElements } = data;

  const onPageClick = (page: number) => setPage(page);

  const toggle = () => {
    setIsNewerOrder(prevState => !prevState);
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id)
      .unwrap()
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };

  return (
    <>
      <Box sx={sortWrapper}>
        <Typography variant="body1" component="span" color="color.grey">
          Знайдено користувачів:{" "}
          <Typography variant="inherit" component="span" color="color.dark">
            {totalElements}
          </Typography>
        </Typography>

        <Sorting isNewerOrder={isNewerOrder} handler={toggle} />
      </Box>

      <TableContainer sx={{ mb: "40px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="body2">№</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body2">Ім’я</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body2">Пошта</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body2">Збережені</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body2">Вподобайки</Typography>
              </TableCell>
              <TableCell align="center">{""}</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {content.map(({ id, name, email, likesCount, bookmarksCount }) => (
              <TableRow key={id} sx={tableRow}>
                <TableCell align="center">{id}</TableCell>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">{email}</TableCell>
                <TableCell align="center">{bookmarksCount}</TableCell>
                <TableCell align="center">{likesCount}</TableCell>
                <TableCell align="center">
                  <DeleteButton onDelete={() => handleDelete(id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Paginator
        totalItems={totalElements}
        onPageClick={onPageClick}
        perPage={USERS_DEFAULT_LIMIT}
        currentPage={page}
      />
    </>
  );
};

export default UsersList;
