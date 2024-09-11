import { DEFAULT_ERROR_NOTIFICATION } from "@/components/Notification/Notification";
import { useLazyGetEmployeesQuery } from "@/redux/employees/employeesApi";
import { EmployeeType } from "@/types/entities";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const useEmployees = () => {
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [getEmployees] = useLazyGetEmployeesQuery();

  const getAllEmployees = useCallback(async () => {
    try {
      const { totalElements } = await getEmployees({}).unwrap();

      const { content: employees } = await getEmployees({
        size: totalElements,
      }).unwrap();

      setEmployees(employees);
    } catch (err) {
      console.log(err);
      toast.error(DEFAULT_ERROR_NOTIFICATION);
    }
  }, [getEmployees]);

  const refetchEmployees = () => getAllEmployees();

  useEffect(() => {
    getAllEmployees();
  }, [getAllEmployees]);

  return { employees, refetchEmployees };
};

export default useEmployees;
