import RootSettings from "@/components/RootSettings";
import { Typography } from "@mui/material";

const RootSettingsPage = () => {
  return (
    <>
      <Typography component="h2" variant="h2" mb="30px">
        Налаштування головного адміністратора
      </Typography>

      <RootSettings />
    </>
  );
};

export default RootSettingsPage;
