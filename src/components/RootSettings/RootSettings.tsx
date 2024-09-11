import NameForm from "./NameForm";
import EmailForm from "./EmailForm";
import PasswordForm from "./PasswordForm";

import { Box } from "@mui/material";

const RootSettings = () => {
  return (
    <Box sx={{ width: "427px" }}>
      <NameForm />

      <Box mt="60px">
        <EmailForm />
      </Box>

      <Box mt="60px">
        <PasswordForm />
      </Box>
    </Box>
  );
};

export default RootSettings;
