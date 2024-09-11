import Employees from "@/components/Employees";
import { Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <>
      <Typography component="h2" variant="h2" mb="30px">
        Контакти співробітників
      </Typography>

      <Employees />
    </>
  );
};

export default AboutPage;
