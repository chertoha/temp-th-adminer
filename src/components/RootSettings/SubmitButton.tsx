import ConfirmationPopup from "../UIKit/ConfirmationPopup";

import { RootFormValues } from "@/types/forms";
import { Box, Button } from "@mui/material";
import { useFormikContext } from "formik";
import { FC, useState } from "react";

interface ISubmitButtonProps {
  submit: () => void;
  popupTitle?: string;
  popupDescription?: string;
}

const SubmitButton: FC<ISubmitButtonProps> = ({
  submit,
  popupTitle = "Підтверджуєте операцію?",
  popupDescription,
}) => {
  const { validateForm } = useFormikContext<RootFormValues>();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = async () => {
    const errors = await validateForm();
    if (Object.keys(errors).length === 0) setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const onConfirm = () => {
    submit();
    close();
  };

  return (
    <>
      <Box width="202px" mt="16px">
        <Button type="button" size="large" onClick={open} fullWidth>
          Змінити
        </Button>
      </Box>

      <ConfirmationPopup
        isOpen={isOpen}
        onConfirm={onConfirm}
        onReject={close}
        title={popupTitle}
        description={popupDescription}
      />
    </>
  );
};

export default SubmitButton;
