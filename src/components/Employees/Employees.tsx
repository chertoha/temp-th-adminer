import PersonAddCard from "../PersonAddCard";
import useEmployees from "@/hooks/useEmployees";
import EmployeeCard from "../EmployeeCard";
import EmployeeEditCard from "../EmployeeEditCard";
import styles from "./Employees.styles";

import { Box } from "@mui/material";
import { useState } from "react";
import { EmployeeFormValues } from "@/types/forms";
import { useCreateEmployeeMutation } from "@/redux/employees/employeesApi";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

const Employees = () => {
  const [shouldCreate, setShouldCreate] = useState<boolean>(false);
  const openCreation = () => setShouldCreate(true);
  const closeCreation = () => setShouldCreate(false);

  const { employees, refetchEmployees } = useEmployees();

  const [createEmployee] = useCreateEmployeeMutation();

  const onAddSubmit = ({
    avatar,
    name,
    email,
    phone,
    role,
  }: EmployeeFormValues) => {
    createEmployee({
      avatar,
      name,

      ...(email && { email }),
      ...(phone && { phone }),
      ...(role && { role }),
    })
      .unwrap()
      .then(() => {
        closeCreation();
        refetchEmployees();
      })
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };

  return (
    <>
      <Box component="ul" sx={styles.list}>
        {employees.map((employee, i, arr) => (
          <Box component="li" key={employee.id}>
            <EmployeeCard
              employee={employee}
              refetch={refetchEmployees}
              isFirst={i === 0}
              isLast={i === arr.length - 1}
            />
          </Box>
        ))}

        {shouldCreate && (
          <Box component="li">
            <EmployeeEditCard onClose={closeCreation} onSubmit={onAddSubmit} />
          </Box>
        )}

        <Box component="li">
          <PersonAddCard
            label="+ Додати контакт"
            onCreate={openCreation}
            isEmployee
          />
        </Box>
      </Box>
    </>
  );
};

export default Employees;
