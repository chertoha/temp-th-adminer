import { MouseEvent, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";

import { useCreateEditorMutation } from "@/redux/editors/editorsApi";
import { EditorFormType } from "@/types/forms";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { errorMessage } from "./EditorsForm.styled";
import { editorFormSchema } from "@/utils/validation/editors";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const EditorsForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [createEditor] = useCreateEditorMutation();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onHandleSubmit = async (
    values: EditorFormType,
    { resetForm }: FormikHelpers<EditorFormType>
  ) => {
    createEditor(values)
      .unwrap()
      .then(() => {
        resetForm({ values: initialValues });
      })
      .catch(error => {
        console.log("This is ERROR", error);
        if (error.data && error.data.message.includes("already exists")) {
          toast.error("Користувач з такою поштою вже існує");
        } else {
          console.log(error);
          toast.error(DEFAULT_ERROR_NOTIFICATION);
        }
      });
  };

  // Need this for disabling button after adding a new Editor
  const isEmptyFields = (values: EditorFormType) =>
    Object.values(values).some(val => val === "");

  return (
    <Box width="405px">
      <Typography variant="h2" component="h2" mb="16px">
        Додати редактора
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={onHandleSubmit}
        validationSchema={editorFormSchema}
      >
        {({
          handleSubmit,
          isValid,
          getFieldProps,
          errors,
          touched,
          values,
        }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Stack spacing="16px">
              <TextField
                type="text"
                {...getFieldProps("name")}
                label="Ім'я"
                required
                autoComplete="new-name"
              />
              {errors.name && touched.name && (
                <Box sx={errorMessage}>{errors.name}</Box>
              )}

              <TextField
                type="email"
                {...getFieldProps("email")}
                label="Пошта"
                required
                autoComplete="new-email"
              />
              {errors.email && touched.email && (
                <Box sx={errorMessage}>{errors.email}</Box>
              )}

              <TextField
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                {...getFieldProps("password")}
                label="Пароль"
                required
                autoComplete="new-password"
              />
              {errors.password && touched.password && (
                <Box sx={errorMessage}>{errors.password}</Box>
              )}

              <Button
                type="submit"
                size="large"
                disabled={!isValid || isEmptyFields(values)}
                sx={{ width: "240px" }}
              >
                Створити
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default EditorsForm;
