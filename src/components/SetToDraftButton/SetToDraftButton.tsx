import Loader from "../UIKit/Loader";

import { FC } from "react";
import { Button } from "@mui/material";
import { useUpdateMagazineStatusMutation } from "@/redux/magazines/magazinesApi";
import { useUpdatePublicationStatusMutation } from "@/redux/publications/publicationsApi";
import { PublicationStatusType } from "@/types/entities";
import { UpdateStatusQuery } from "@/types/queries";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";
import { toast } from "react-toastify";

interface ISetToDraftButtonProps {
  id: number | string;
  isMagazine?: boolean;
  status: PublicationStatusType;
  label: string;
}

const SetToDraftButton: FC<ISetToDraftButtonProps> = ({
  id,
  isMagazine = false,
  status,
  label,
}) => {
  const [updatePublicationStatus, { isLoading: isPublicationLoading }] =
    useUpdatePublicationStatusMutation();

  const [updateMagazineStatus, { isLoading: isMagazineLoading }] =
    useUpdateMagazineStatusMutation();

  const update = () => {
    const query: UpdateStatusQuery = {
      id,
      status,
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
      size="large"
      onClick={update}
      disabled={isPublicationLoading || isMagazineLoading}
      sx={{ display: "flex", alignItems: "center", gap: "4px" }}
    >
      {label} {(isPublicationLoading || isMagazineLoading) && <Loader />}
    </Button>
  );
};

export default SetToDraftButton;
