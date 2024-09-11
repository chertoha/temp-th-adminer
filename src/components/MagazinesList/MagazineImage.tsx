import { createImagePreviewApiUrl } from "@/helpers/createImageApiUrl";
import { CardMedia } from "@mui/material";
import { FC } from "react";

interface IMagazineImageProps {
  banner: string;
  title: string;
}

const MagazineImage: FC<IMagazineImageProps> = ({ banner, title }) => {
  return (
    <CardMedia
      component="img"
      alt={title}
      image={createImagePreviewApiUrl(banner)}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );
};
export default MagazineImage;
