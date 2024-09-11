import createMagazineInitialValues from "@/helpers/createMagazineInitialValues";
import PublicationHotUpdate from "../HotUpdate";
import PublicationToolbar from "../PublicationToolbar";
import * as Field from "./Fields";

import { useGetMagazineByIdQuery } from "@/redux/magazines/magazinesApi";
import { Box, Grid, Typography } from "@mui/material";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import { MagazineFormValues } from "@/types/forms";
import { magazineFormSchema } from "@/utils/validation/publication";

const Magazine = () => {
  const { id } = useParams();

  const { data: magazine } = useGetMagazineByIdQuery(id, {
    skip: !id,
  });

  if (!magazine) return null;
  if (!id) return null;

  const initialValues: MagazineFormValues =
    createMagazineInitialValues(magazine);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={magazineFormSchema}
    >
      {() => (
        <Box>
          <PublicationToolbar publication={magazine} isMagazine />

          <Box component="form">
            <PublicationHotUpdate id={id} publication={magazine} isMagazine />

            <Grid container spacing={6}>
              <Grid item xs={12} xl={7}>
                <Box width={530}>
                  <Typography variant="body2">
                    *Поля обов’язкові для заповнення при публікаціїї
                  </Typography>

                  <Field.SectionField />

                  <Field.TitleField />

                  <Field.BannerField />

                  <Field.DateField />

                  <Field.NumberOfPagesField />
                </Box>
              </Grid>

              <Grid item xs={12} xl={5}>
                <Field.CommentField />
              </Grid>

              <Grid item xs={12} xl={8}>
                <Field.DescriptionField />
              </Grid>

              <Grid item xs={12} mt={8}>
                <Field.GalleryField />
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default Magazine;
