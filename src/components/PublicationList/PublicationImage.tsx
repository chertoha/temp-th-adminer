import { createImagePreviewApiUrl } from "@/helpers/createImageApiUrl";
import { CardMedia } from "@mui/material";
import { FC } from "react";

interface IPublicationImageProps {
  banner: string;
  title: string;
}

const PublicationImage: FC<IPublicationImageProps> = ({ banner, title }) => {
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
export default PublicationImage;
