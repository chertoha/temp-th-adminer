import EmployeeEditCard from "../EmployeeEditCard";
import EmployeeRegularCard from "./EmployeeRegularCard";

import { EmployeeType } from "@/types/entities";
import { FC, useState } from "react";
import { EmployeeFormValues } from "@/types/forms";
import { useUpdateEmployeeMutation } from "@/redux/employees/employeesApi";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

interface IEmployeeCardProps {
  employee: EmployeeType;
  refetch: () => Promise<void>;
  isFirst: boolean;
  isLast: boolean;
}

const EmployeeCard: FC<IEmployeeCardProps> = ({
  employee,
  refetch,
  isFirst,
  isLast,
}) => {
  const { id, avatar, email, name, phone, role } = employee;

  const [shouldEdit, setShouldEdit] = useState<boolean>(false);
  const openEditor = () => setShouldEdit(true);
  const closeEditor = () => setShouldEdit(false);

  const [updateEmployee] = useUpdateEmployeeMutation();

  const onEditSubmit = ({
    avatar,
    name,
    email,
    phone,
    role,
  }: EmployeeFormValues) => {
    updateEmployee({
      id,
      data: {
        avatar,
        name,

        ...(email && { email }),
        ...(phone && { phone }),
        ...(role && { role }),
      },
    })
      .unwrap()
      .then(() => {
        closeEditor();
        refetch();
      })
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
        closeEditor();
      });
  };

  return shouldEdit ? (
    <EmployeeEditCard
      onClose={closeEditor}
      onSubmit={onEditSubmit}
      initialValues={{
        avatar,
        name: name || "",
        email: email || "",
        phone: phone || "",
        role: role || "",
      }}
    />
  ) : (
    <EmployeeRegularCard
      onEdit={openEditor}
      employee={employee}
      refetch={refetch}
      isFirst={isFirst}
      isLast={isLast}
    />
  );
};

export default EmployeeCard;
