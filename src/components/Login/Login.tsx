import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FixedLoader from "../FixedLoader";
import EmailField from "../UIKit/EmailField";
import PasswordField from "./PasswordField";
import ResetLink from "./ResetLink";
import Heading from "./Heading";
import * as styles from "./Login.styled";

import { FormEvent } from "react";
import { useLoginMutation } from "@/redux/auth/authApi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { loginUser } from "@/redux/auth/slice";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

const Login = () => {
  const [logIn, { isLoading }] = useLoginMutation();
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    if (!email || !password) return;

    logIn({ email, password })
      .unwrap()
      .then(user => {
        if (!user.roles.includes("ADMIN")) {
          throw new Error("Only for ADMIN role");
        }

        dispatch(loginUser(user));
      })
      .catch(error => {
        if (error.status === 401) {
          toast.error("Ви ввели невірну пошту або пароль");
        } else {
          console.log(error);
          toast.error(DEFAULT_ERROR_NOTIFICATION);
        }
      });
  };

  return (
    <div>
      <Container sx={styles.container}>
        <Box sx={styles.wrapper}>
          <Heading />

          <Box component="form" onSubmit={handleSubmit} noValidate mt={1}>
            <EmailField />

            <PasswordField />

            <Button type="submit" fullWidth sx={styles.submit}>
              Sign In
            </Button>

            <ResetLink />
          </Box>

          <FixedLoader isLoading={isLoading} />
        </Box>
      </Container>
    </div>
  );
};

export default Login;
