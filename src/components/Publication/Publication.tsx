import Box from "@mui/material/Box";
import EditorSection from "./EditorSection";
import createPublicationInitialValues from "@/helpers/createPublicationInitialValues";
import PublicationHotUpdate from "../HotUpdate";
import PublicationToolbar from "../PublicationToolbar";
import styles from "./Publication.styled";
import * as Field from "./Fields";

import { Formik } from "formik";
import { PublicationSections } from "@/types/entities";
import { useGetPublicationByIdQuery } from "../../redux/publications/publicationsApi";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import { SECTIONS_PUB } from "@/config/constants";
import { PublicationFormValues } from "@/types/forms";
import { publicationFormSchema } from "@/utils/validation/publication";
import Error404 from "../Error404";

const Publication = () => {
  const { id } = useParams();
  const { data: publication, error } = useGetPublicationByIdQuery(id, {
    skip: !id,
  });

  if ((error as any)?.status === 404) {
    return <Error404 />;
  }

  if (!publication) return null;

  const initialValues: PublicationFormValues =
    createPublicationInitialValues(publication);

  if (!id) return null;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={publicationFormSchema}
    >
      {({ values }) => (
        <Box pb="200px">
          <PublicationToolbar publication={publication} />

          <Box component="form">
            <PublicationHotUpdate id={id} publication={publication} />

            <Box sx={styles.topWrapper}>
              <Box width="600px">
                <Field.AuthorsField />

                <Field.CommentField />
              </Box>

              <Box sx={styles.leftWrapper}>
                <Box width={530}>
                  <Typography variant="body2">
                    *Поля обов’язкові для заповнення при публікаціїї
                  </Typography>

                  <Field.SectionsField />

                  {(values.sections as PublicationSections).includes(
                    SECTIONS_PUB.ACTIVITY.API_NAME
                  ) && <Field.DateField />}

                  <Field.TitleField />

                  <Field.BannerField />

                  <Field.ShortDescriptionField />
                </Box>
              </Box>
            </Box>

            <Box maxWidth="1000px">
              <Field.DescriptionField />

              {(values.sections as PublicationSections).includes(
                SECTIONS_PUB.INTERVIEW.API_NAME
              ) && (
                <>
                  <Field.PersonField />
                  <Field.QuoteField />
                </>
              )}
            </Box>

            <Box mt="20px">
              <EditorSection name="content" />
            </Box>

            <Box mt="50px">
              <Field.GalleryField />
            </Box>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default Publication;
