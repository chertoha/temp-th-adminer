import useDragAndDrop from "@/hooks/useDragAndDrop";
import styles, { MainLabel } from "./DropZone.styled";

import { imageAllowedMIMETypes } from "@/utils/imageAllowedMIMETypes";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IoCameraOutline } from "react-icons/io5";

interface IDropZoneProps {
  multiple?: boolean;
  filesHandler: (files: File[] | null) => void;
  maxFiles?: number;
}

const DropZone: FC<IDropZoneProps> = ({
  multiple = false,
  filesHandler,
  maxFiles = 1,
}) => {
  const { dragIsOver, onInput, error, ...dragHandlers } = useDragAndDrop(
    filesHandler,
    { limit: maxFiles }
  );

  return (
    <MainLabel {...dragHandlers} component="label" dragisover={dragIsOver}>
      <Box sx={styles.inner}>
        <IoCameraOutline size={54} color="#ABABAB" />
        <Typography variant="h6" sx={styles.text}>
          Завантажити фото
        </Typography>
      </Box>

      <input
        multiple={multiple}
        type="file"
        onChange={onInput}
        hidden
        accept={imageAllowedMIMETypes.join(",")}
      />

      {error && (
        <Typography variant="body1" sx={styles.error}>
          {error}
        </Typography>
      )}
    </MainLabel>
  );
};

export default DropZone;
