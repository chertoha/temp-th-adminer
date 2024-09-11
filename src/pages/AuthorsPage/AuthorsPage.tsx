import Authors from "@/components/Authors";
import { Typography } from "@mui/material";

const AuthorsPage = () => {
  return (
    <>
      <Typography component="h2" variant="h2" mb="30px">
        Автори
      </Typography>

      <Authors />
    </>
  );
};

export default AuthorsPage;
