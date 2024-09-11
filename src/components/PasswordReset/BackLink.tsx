import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import { ROUTES } from "@/config/routes";

const BackLink = () => {
  return (
    <Grid container mt="20px">
      <Grid item xs>
        <Link href={ROUTES.LOGIN} variant="body2">
          Назад до входу
        </Link>
      </Grid>
    </Grid>
  );
};

export default BackLink;
