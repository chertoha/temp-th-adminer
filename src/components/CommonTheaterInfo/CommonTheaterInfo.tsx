import styles from "./CommonTheaterInfo.styled";
import * as Fields from "./Fields";
import FixedLoader from "../FixedLoader";

import {
  useGetTheaterInfoQuery,
  useUpdateTheaterInfoMutation,
} from "@/redux/contacts/contactsApi";
import { TheaterContactsFromValues } from "@/types/forms";
import { Box, Button, Typography } from "@mui/material";
import { Formik } from "formik";
import { commonTheaterInfoFormSchema } from "@/utils/validation/contacts";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";
import { useEffect } from "react";

const CommonTheaterInfo = () => {
  const { data: info } = useGetTheaterInfoQuery();

  const [updateTheaterInfo, { isLoading: isUpdating, error }] =
    useUpdateTheaterInfoMutation();

  useEffect(() => {
    if (error) {
      console.error("Error fetching contacts:", error);
      toast.error(DEFAULT_ERROR_NOTIFICATION);
    }
  }, [error]);

  const onSubmit = (values: TheaterContactsFromValues) => {
    updateTheaterInfo(values)
      .unwrap()
      .then(() => {
        toast.success("Збережено");
      })
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };
  if (!info) return null;

  return (
    <Formik
      initialValues={info}
      onSubmit={onSubmit}
      validationSchema={commonTheaterInfoFormSchema}
    >
      {({ handleSubmit }) => (
        <Box component="form" onSubmit={handleSubmit} width="568px">
          <Box mb="60px">
            <Typography variant="h2" component="h2">
              Інформація для замовлення
            </Typography>

            <Fields.MagazinePriceField />
          </Box>

          <Typography variant="h2" component="h2">
            Контакти
          </Typography>

          <Typography variant="body1" color="lightgray">
            Контакти та посилання на соцмережі, що використовуються у хедері,
            футері та блоці “Де купити журнал”.
          </Typography>

          <Fields.PhoneField />
          <Fields.AdminEmailField />
          <Fields.PolicyEmailField />
          <Fields.LegalAddressField />

          <Box mt="60px">
            <Typography variant="h2" component="h2" pl="48px">
              Соцмережі
            </Typography>

            <Fields.InstagramField />
            <Fields.YoutubeField />
            <Fields.FacebookField />
          </Box>

          <Button
            type="submit"
            size="large"
            sx={styles.submit}
            disabled={isUpdating}
          >
            Зберегти зміни
          </Button>

          <FixedLoader isLoading={isUpdating} />
        </Box>
      )}
    </Formik>
  );
};

export default CommonTheaterInfo;
