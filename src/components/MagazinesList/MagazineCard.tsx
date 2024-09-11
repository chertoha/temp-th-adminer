import { FC } from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

import MagazineImage from "./MagazineImage";
import MagazineInfo from "./MagazineInfo";
import PublicationStatus from "../UIKit/PublicationStatus";

import { MagazineType } from "@/types/entities";

import {
  card,
  cardContent,
  imageWrapper,
  infoWrapper,
  statusWrapper,
} from "./MagazineCard.styled";
import MagazineControlPanel from "./MagazineControlPanel";

interface IMagazineCardProps {
  magazine: MagazineType;
}

const MagazineCard: FC<IMagazineCardProps> = ({ magazine }) => {
  const { banner, comment, date, created, id, publicationDate, status, title } =
    magazine;

  return (
    <Card elevation={0} sx={card}>
      <CardContent sx={cardContent}>
        <Typography variant="h4" component="h2" gutterBottom noWrap>
          {title}
        </Typography>

        <Stack direction="row">
          <Box sx={imageWrapper}>
            <MagazineImage banner={banner} title={title} />
          </Box>

          <Box sx={infoWrapper}>
            <MagazineInfo
              date={date}
              created={created}
              publicationDate={publicationDate}
            />
          </Box>

          <Box sx={statusWrapper}>
            <PublicationStatus label={status} />

            <MagazineControlPanel id={id} comment={comment} />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
export default MagazineCard;
