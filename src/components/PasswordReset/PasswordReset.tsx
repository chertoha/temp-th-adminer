import EmailField from "../UIKit/EmailField";
import Heading from "./Heading";
import BackLink from "./BackLink";
import FixedLoader from "../FixedLoader";
import * as styles from "./PasswordReset.styled";

import { FormEvent } from "react";
import { Box, Button, Container } from "@mui/material";
import { useResetPasswordMutation } from "@/redux/auth/authApi";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { SIGN_UP_EMAIL_RULES } from "@/utils/validation/rules";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

const PasswordReset = () => {
  const navigate = useNavigate();

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;

    if (!email) return;

    try {
      await SIGN_UP_EMAIL_RULES.validate(email);
    } catch (err: any) {
      toast.warning(err.errors.join(", "));
      return;
    }

    resetPassword({ email })
      .unwrap()
      .then(() => {
        toast.success("На вказану пошту відправлено листа");
        navigate(ROUTES.LOGIN, { replace: true });
      })
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };
  return (
    <div>
      <Container sx={styles.container}>
        <Box sx={styles.wrapper}>
          <Heading />
          <Box component="form" onSubmit={handleSubmit} noValidate mt={1}>
            <EmailField />

            <Button type="submit" fullWidth sx={styles.submit}>
              Відправити
            </Button>

            <BackLink />
          </Box>
          <FixedLoader isLoading={isLoading} />
        </Box>
      </Container>
    </div>
  );
};

export default PasswordReset;
