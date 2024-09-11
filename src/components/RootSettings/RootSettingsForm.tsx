import SubmitButton from "./SubmitButton";
import Input from "./Input";
import * as Yup from "yup";

import { FC } from "react";
import { Typography } from "@mui/material";
import { Formik, FormikHelpers } from "formik";
import { RootFormValues } from "@/types/forms";

type Values = RootFormValues;

interface IRootSettingsFormProps {
  fieldName: string;
  submitHandler: (values: Values) => void;
  validationSchema: Yup.ObjectSchema<any>;
  label: string;
  type?: "text" | "email" | "password";
  popupTitle?: string;
}

const RootSettingsForm: FC<IRootSettingsFormProps> = ({
  fieldName,
  submitHandler,
  validationSchema,
  label,
  type = "text",
  popupTitle,
}) => {
  const initialValues = { [fieldName]: "" };

  const onSumbit = (values: Values, { resetForm }: FormikHelpers<Values>) => {
    submitHandler(values);
    resetForm({ values: initialValues });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSumbit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors, touched, values }) => (
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <Typography variant="h6" component="h3">
            {label}
          </Typography>

          <Input type={type} fieldName={fieldName} />

          {errors[fieldName] && touched[fieldName] && (
            <Typography color="color.error">{errors[fieldName]}</Typography>
          )}

          <SubmitButton
            submit={handleSubmit}
            popupTitle={popupTitle}
            popupDescription={
              type !== "password" ? `Нове значення "${values[fieldName]}"` : ""
            }
          />
        </form>
      )}
    </Formik>
  );
};

export default RootSettingsForm;
