import Loader from "../UIKit/Loader";
import styles from "./PublishButton.styled";

import { FC } from "react";
import { useFormikContext } from "formik";
import { STATUSES } from "@/config/constants";
import { useUpdatePublicationStatusMutation } from "@/redux/publications/publicationsApi";
import { PublicationFormValues } from "@/types/forms";
import { Button } from "@mui/material";
import { useUpdateMagazineStatusMutation } from "@/redux/magazines/magazinesApi";
import { UpdateStatusQuery } from "@/types/queries";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

interface IPublishButtonProps {
  id: string | number | undefined;
  isMagazine?: boolean;
  label?: string;
}

const PublishButton: FC<IPublishButtonProps> = ({
  id,
  isMagazine = false,
  label = "Опублікувати",
}) => {
  const { validateForm, isValid } = useFormikContext<PublicationFormValues>();

  const [updatePublicationStatus, { isLoading: isLoadingPub }] =
    useUpdatePublicationStatusMutation();
  const [updateMagazineStatus, { isLoading: isLoadingMag }] =
    useUpdateMagazineStatusMutation();

  const publish = async () => {
    if (!id) return;

    const errors = await validateForm();
    const isValid = Object.keys(errors).length === 0;

    if (!isValid) {
      return;
    }

    const query: UpdateStatusQuery = {
      id,
      status: STATUSES.PUBLISHED.API_NAME,
    };

    let response: Promise<void>;
    if (isMagazine) {
      response = updateMagazineStatus(query).unwrap();
    } else {
      response = updatePublicationStatus(query).unwrap();
    }

    response
      .then(() => {})
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };

  return (
    <Button
      variant="contained"
      type="button"
      size="large"
      onClick={publish}
      disabled={!isValid || isLoadingPub || isLoadingMag}
      sx={styles.button}
    >
      {label}
      {(isLoadingPub || isLoadingMag) && <Loader />}
    </Button>
  );
};

export default PublishButton;
