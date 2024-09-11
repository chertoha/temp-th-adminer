import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styles, { PreviewImage } from "./Banner.styled";

import { FC } from "react";
import { Box, IconButton } from "@mui/material";
import { createImageApiUrl } from "@/helpers/createImageApiUrl";

interface IPreviewProps {
  imageName: string;
  onRemove: () => void;
}

const Preview: FC<IPreviewProps> = ({ imageName, onRemove }) => {
  return (
    <Box height="100%" position="relative" sx={styles.preview}>
      <PreviewImage src={createImageApiUrl(imageName)} alt="Передогляд" />

      <IconButton sx={styles.remove} onClick={onRemove}>
        <DeleteForeverIcon />
      </IconButton>
    </Box>
  );
};
export default Preview;
