import styles from "./AuthorEditCard.styled";
import Avatar from "./Avatar";
import PersonEditConfirmationToolbar from "../PersonEditConfirmationToolbar";

import { FC } from "react";
import { Formik } from "formik";
import { Box, TextField } from "@mui/material";
import { ReactComponent as JohnDoeIcon } from "@/assets/images/icons/john-doe.svg";
import { input } from "@/styles/atomics";
import { AuthorEditFormValues } from "@/types/forms";
import { authorEditFormSchema } from "@/utils/validation/authors";

interface IAuthorEditCardProps {
  initialValues?: AuthorEditFormValues;
  onSubmit: (values: AuthorEditFormValues) => void;
  onClose: () => void;
}

const AuthorEditCard: FC<IAuthorEditCardProps> = ({
  initialValues = { avatar: null, name: "" },
  onSubmit,
  onClose,
}) => {
  const onSubmitHandler = (values: AuthorEditFormValues) => {
    onSubmit(values);
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={authorEditFormSchema}
    >
      {({ handleSubmit, getFieldProps, errors, touched }) => (
        <Box component="form" onSubmit={handleSubmit}>
          <Box position="relative" pb="48px">
            <Box sx={styles.wrapper}>
              <JohnDoeIcon width="90%" />

              <Avatar />
            </Box>

            <Box sx={styles.inputWrapper}>
              <TextField sx={{ ...input }} {...getFieldProps("name")} />

              {errors.name && touched.name && (
                <Box sx={styles.nameError}>{errors.name}</Box>
              )}
            </Box>
          </Box>

          <Box mt="8px">
            <PersonEditConfirmationToolbar onClose={onClose} />
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default AuthorEditCard;
