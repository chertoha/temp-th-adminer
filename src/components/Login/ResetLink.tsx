import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import { ROUTES } from "@/config/routes";

const ResetLink = () => {
  return (
    <Grid container mt="20px">
      <Grid item xs>
        <Link href={ROUTES.RESET_PASSWORD} variant="body2">
          Забули пароль?
        </Link>
      </Grid>
    </Grid>
  );
};

export default ResetLink;
