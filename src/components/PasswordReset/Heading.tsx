import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as styles from "./PasswordReset.styled";

import { Typography } from "@mui/material";

const Heading = () => {
  return (
    <>
      <Avatar sx={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Оновлення паролю
      </Typography>
    </>
  );
};

export default Heading;
