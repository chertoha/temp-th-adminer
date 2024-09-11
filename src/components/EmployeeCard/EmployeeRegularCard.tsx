import PersonCardToolbar from "../PersonCardToolbar";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styles from "./EmployeeCard.styled";

import { FC } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
  useChangeOrderMutation,
  useRemoveEmployeeMutation,
} from "@/redux/employees/employeesApi";
import { EmployeeType } from "@/types/entities";
import { createImagePreviewApiUrl } from "@/helpers/createImageApiUrl";
import { OrderDirection } from "@/types/queries";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

interface IEmployeeRegularCardProps {
  employee: EmployeeType;
  onEdit: () => void;
  refetch: () => Promise<void>;
  isFirst: boolean;
  isLast: boolean;
}

const EmployeeRegularCard: FC<IEmployeeRegularCardProps> = ({
  employee: { avatar, id, name, email, phone, role },
  onEdit,
  refetch,
  isFirst,
  isLast,
}) => {
  const [removeEmployee] = useRemoveEmployeeMutation();

  const [changeOrder] = useChangeOrderMutation();

  const onDelete = () => {
    removeEmployee(id)
      .unwrap()
      .then(() => {
        refetch();
      })
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };

  const onChangeOrderHandler = (direction: OrderDirection) => {
    changeOrder({ id, direction })
      .unwrap()
      .then(() => {
        refetch();
      })
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };

  return (
    <Box sx={styles.card}>
      <Box sx={styles.thumb}>
        <Box
          component="img"
          src={createImagePreviewApiUrl(avatar)}
          alt={name}
          sx={styles.avatar}
        />
      </Box>

      <Box sx={styles.meta}>
        {name && <Typography variant="h2">{name}</Typography>}
        {role && <Typography variant="body1">{role}</Typography>}
        {phone && <Typography variant="body1">{phone}</Typography>}
        {email && <Typography variant="body1">{email}</Typography>}
      </Box>

      <PersonCardToolbar onDelete={onDelete} onEdit={onEdit} />

      <Box sx={styles.order}>
        <IconButton
          aria-label="order up"
          sx={styles.arrow}
          onClick={() => onChangeOrderHandler("UP")}
          disabled={isFirst}
        >
          <ArrowUpwardIcon />
        </IconButton>

        <IconButton
          aria-label="order down"
          sx={styles.arrow}
          onClick={() => onChangeOrderHandler("DOWN")}
          disabled={isLast}
        >
          <ArrowDownwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default EmployeeRegularCard;
