import { Box, Typography } from "@mui/material";

import { wrapper } from "./NotFound.styled";

const NotFound = () => {
  return (
    <div>
      <Box sx={wrapper}>
        <Typography variant="h3">
          За вашим запитом нічого не знайдено
        </Typography>
      </Box>
    </div>
  );
};
export default NotFound;
