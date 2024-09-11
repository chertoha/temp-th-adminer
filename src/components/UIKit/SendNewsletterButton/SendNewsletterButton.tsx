import { Button } from "@mui/material";
import { toast } from "react-toastify";

import ConfirmationPopup from "../ConfirmationPopup";
import Loader from "../Loader";
import styles from "./SendNewsletterButton.styled";

import { useLazySendWeeklyPublicationsQuery } from "@/redux/publications/publicationsApi";
import { DEFAULT_ERROR_NOTIFICATION } from "@/components/Notification/Notification";
import { useState } from "react";

const SendNewsletterButton = () => {
  const [sendNewsletter, { isLoading }] = useLazySendWeeklyPublicationsQuery();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const handleSend = () => {
    sendNewsletter()
      .unwrap()
      .then(() => {
        toast.success("Розсилка відправлена");
      })
      .catch(err => {
        if (err.status === 404) {
          toast.info("За останній тиждень не з'явилось нових публікацій");
          return;
        }

        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };

  const onConfirm = () => {
    handleSend();
    close();
  };

  return (
    <>
      <Button
        variant="outlined"
        size="large"
        sx={styles.button}
        onClick={open}
        disabled={isLoading}
      >
        Створити тижневу розсилку
        {isLoading && <Loader />}
      </Button>

      <ConfirmationPopup
        isOpen={isOpen}
        onConfirm={onConfirm}
        onReject={close}
        title="Бажаєте зробити розсилку?"
        description="Розсилка буде сформована з публікацій, створених за останні 7 днів"
      />
    </>
  );
};
export default SendNewsletterButton;
