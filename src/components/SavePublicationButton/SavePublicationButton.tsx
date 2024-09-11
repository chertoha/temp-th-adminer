import Loader from "../UIKit/Loader";
import styles from "./SavePublicationButton.styled";

import { FC } from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import {
  usePutPublicationMutation,
  useUpdatePublicationStatusMutation,
} from "@/redux/publications/publicationsApi";
import { PublicationFormValues } from "@/types/forms";
import { STATUSES } from "@/config/constants";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

interface ISavePublicationButtonProps {
  id: number | string;
  label: string;
}

const SavePublicationButton: FC<ISavePublicationButtonProps> = ({
  id,
  label,
}) => {
  const [updateStatus, { isLoading: isLoadingStatus }] =
    useUpdatePublicationStatusMutation();

  const [putPublication, { isLoading }] = usePutPublicationMutation();
  const { values, isValid } = useFormikContext<PublicationFormValues>();

  const save = async () => {
    try {
      await updateStatus({ id, status: STATUSES.DRAFT.API_NAME });

      await putPublication({
        id,
        data: { ...values, content: JSON.stringify(values.content) },
      }).unwrap();

      await updateStatus({ id, status: STATUSES.PUBLISHED.API_NAME });
    } catch (err: any) {
      console.log(err);

      if (err.data && err.data.message.includes("already exists")) {
        toast.error("Публікація з таким заголовком вже існує");
      } else {
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      }
    }
  };

  return (
    <Button
      variant="outlined"
      onClick={save}
      disabled={!isValid || isLoading || isLoadingStatus}
      sx={styles.button}
    >
      {label}
      {(isLoading || isLoadingStatus) && <Loader />}
    </Button>
  );
};

export default SavePublicationButton;
