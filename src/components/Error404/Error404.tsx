import styles from "./Error404.styled";

import { ROUTES } from "@/config/routes";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  const onBackToHomeClick = () => {
    navigate(ROUTES.ROOT, { replace: true });
  };

  return (
    <Box sx={styles.wrapper}>
      <Typography variant="h1" sx={styles.heading}>
        404
      </Typography>

      <Typography variant="h2">Сторінка не знайдена</Typography>

      <Button type="button" onClick={onBackToHomeClick} sx={styles.button}>
        Повернутись на головну
      </Button>
    </Box>
  );
};

export default Error404;
