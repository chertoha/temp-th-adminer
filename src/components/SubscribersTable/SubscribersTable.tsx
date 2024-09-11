import { useEffect, useState } from "react";
import dayjs from "dayjs";
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
import DownloadSubscribersButton from "./DownloadSubscribersButton";

import { USERS_DEFAULT_LIMIT } from "@/config/paginationConfig";
import {
  useDeleteSubscriberMutation,
  useGetSubscribersQuery,
} from "@/redux/subscribers/subscribersApi";
import {
  buttonWrapper,
  sortWrapper,
  tableRow,
} from "./SubscribersTable.styled";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

const SubscribersTable = () => {
  const [page, setPage] = useState(1);
  const [isNewerOrder, setIsNewerOrder] = useState(false);

  const { data, error } = useGetSubscribersQuery({
    page,
    sort: isNewerOrder ? "id,asc" : "id,desc",
  });
  const [deleteSubscriber] = useDeleteSubscriberMutation();

  useEffect(() => {
    if (error) {
      console.error("Error fetching subscribers:", error);
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
    await deleteSubscriber(id)
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
          Знайдено підписників:{" "}
          <Typography variant="inherit" component="span" color="color.dark">
            {totalElements}
          </Typography>
        </Typography>

        <Sorting isNewerOrder={isNewerOrder} handler={toggle} />
      </Box>

      <Box sx={buttonWrapper}>
        <DownloadSubscribersButton />
      </Box>

      <TableContainer sx={{ mb: "40px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="body2">№</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body2">Дата підписки</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body2">Пошта</Typography>
              </TableCell>
              <TableCell align="center">{""}</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {content.map(({ id, email, created }) => (
              <TableRow key={id} sx={tableRow}>
                <TableCell align="center">{id}</TableCell>
                <TableCell align="center">
                  {dayjs(created).format("DD.MM.YYYY")}
                </TableCell>
                <TableCell align="center">{email}</TableCell>
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
export default SubscribersTable;
