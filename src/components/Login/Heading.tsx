import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as styles from "./Login.styled";

import { Typography } from "@mui/material";

const Heading = () => {
  return (
    <>
      <Avatar sx={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Увійти
      </Typography>
    </>
  );
};

export default Heading;
