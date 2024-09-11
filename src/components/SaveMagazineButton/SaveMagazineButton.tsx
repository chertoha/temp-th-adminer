import Loader from "../UIKit/Loader";
import styles from "./SaveMagazineButton.styled";

import { FC } from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import { MagazineFormValues } from "@/types/forms";
import { STATUSES } from "@/config/constants";
import {
  usePutMagazineMutation,
  useUpdateMagazineStatusMutation,
} from "@/redux/magazines/magazinesApi";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

interface ISaveMagazineButtonProps {
  id: number | string;
  label: string;
}

const SaveMagazineButton: FC<ISaveMagazineButtonProps> = ({ id, label }) => {
  const [updateStatus, { isLoading: isLoadingStatus }] =
    useUpdateMagazineStatusMutation();

  const [putMagazine, { isLoading }] = usePutMagazineMutation();
  const { values, isValid } = useFormikContext<MagazineFormValues>();

  const save = async () => {
    try {
      await updateStatus({ id, status: STATUSES.DRAFT.API_NAME });

      await putMagazine({
        id,
        data: values,
      }).unwrap();

      await updateStatus({ id, status: STATUSES.PUBLISHED.API_NAME });
    } catch (err: any) {
      console.log(err);

      if (err.data && err.data.message.includes("already exists")) {
        toast.error("Журнал з таким заголовком вже існує");
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

export default SaveMagazineButton;
