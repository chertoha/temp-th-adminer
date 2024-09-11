import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styles from "./Gallery.styled";

import { FC } from "react";
import { IconButton, ImageList, ImageListItem } from "@mui/material";
import { createImagePreviewApiUrl } from "@/helpers/createImageApiUrl";

interface IGalleryListProps {
  images: string[];
  remove: (image: string) => void;
}

const GalleryList: FC<IGalleryListProps> = ({ images, remove }) => {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {images.map(imageName => (
        <ImageListItem key={imageName} sx={styles.item}>
          <img
            src={`${createImagePreviewApiUrl(imageName)}`}
            alt={imageName}
            loading="lazy"
          />

          <IconButton
            sx={styles.icon}
            onClick={() => {
              remove(imageName);
            }}
          >
            <DeleteForeverIcon />
          </IconButton>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GalleryList;
