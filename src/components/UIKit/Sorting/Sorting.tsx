import { FC } from "react";
import { Box, IconButton, Typography } from "@mui/material";

import SwapVertIcon from "@mui/icons-material/SwapVert";

interface IFilterSortingProps {
  isNewerOrder: boolean;
  handler: () => void;
  label?: string;
}

const Sorting: FC<IFilterSortingProps> = ({
  isNewerOrder,
  handler,
  label = "за датою",
}) => {
  return (
    <Box display="flex" alignItems="center">
      <Typography noWrap>
        {!isNewerOrder ? `від нових (${label})` : `від старих (${label})`}
      </Typography>
      <IconButton onClick={handler} sx={{ color: "color.dark" }}>
        <SwapVertIcon />
      </IconButton>
    </Box>
  );
};

export default Sorting;
