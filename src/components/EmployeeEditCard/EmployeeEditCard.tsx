import Avatar from "../AuthorEditCard/Avatar";
import styles from "./EmployeeEditCard.styled";
import PersonEditConfirmationToolbar from "../PersonEditConfirmationToolbar";
import inputs from "@/utils/data/employeeInputList";

import { FC } from "react";
import { ReactComponent as JohnDoeIcon } from "@/assets/images/icons/john-doe.svg";
import { Box, TextField } from "@mui/material";
import { Formik } from "formik";
import { EmployeeFormValues } from "@/types/forms";
import { employeeEditFormSchema } from "@/utils/validation/employees";

interface IEmployeeEditCardProps {
  onClose: () => void;
  initialValues?: EmployeeFormValues;
  onSubmit: (values: EmployeeFormValues) => void;
}

const EmployeeEditCard: FC<IEmployeeEditCardProps> = ({
  onClose,
  initialValues = { name: "", role: "", phone: "", email: "", avatar: null },
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={employeeEditFormSchema}
    >
      {({ getFieldProps, errors, touched, handleSubmit }) => (
        <Box component="form" sx={styles.form} onSubmit={handleSubmit}>
          <Box sx={styles.avatar}>
            <JohnDoeIcon width="90%" />

            <Avatar />
          </Box>

          <Box sx={styles.inputs}>
            {inputs.map(({ fieldName, placeholder, type }) => (
              <Box key={fieldName} position="relative">
                <TextField
                  type={type}
                  sx={styles.field}
                  {...getFieldProps(fieldName)}
                  placeholder={placeholder}
                />

                {errors[fieldName] && touched[fieldName] && (
                  <Box sx={styles.nameError}>{errors.name}</Box>
                )}
              </Box>
            ))}
          </Box>

          <PersonEditConfirmationToolbar onClose={onClose} />
        </Box>
      )}
    </Formik>
  );
};

export default EmployeeEditCard;
