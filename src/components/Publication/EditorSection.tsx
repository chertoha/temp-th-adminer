import Editor from "@/components/Editor";

import { FC } from "react";
import { useFormikContext } from "formik";
import { OutputData } from "@editorjs/editorjs";
import { Box, Typography } from "@mui/material";
import { PublicationFormValues } from "@/types/forms";
import styles from "./Publication.styled";

interface IEditorSectionProps {
  name: string;
}

const EditorSection: FC<IEditorSectionProps> = ({ name: fieldName }) => {
  const { setFieldValue, values } = useFormikContext<PublicationFormValues>();

  const setContent = (value: OutputData) => {
    setFieldValue(fieldName, value);
  };

  return (
    <>
      <Typography variant="h6" component="h2">
        Редактор публікації *
      </Typography>

      <Box sx={styles.editorWrapper}>
        <Editor data={values.content} setData={setContent} />
      </Box>
    </>
  );
};

export default EditorSection;
