import { FC } from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

import PublicationStatus from "../UIKit/PublicationStatus/PublicationStatus";
import PublicationTag from "../UIKit/PublicationTag";
import PublicationImage from "./PublicationImage";
import PublicationControlPanel from "./PublicationControlPanel";
import PublicationInfo from "./PublicationInfo";

import { PublicationType } from "@/types/entities";

import {
  card,
  cardContent,
  imageWrapper,
  infoWrapper,
  statusWrapper,
} from "./PublicationCard.styled";

interface IPublicationCardProps {
  publication: PublicationType;
}

const PublicationCard: FC<IPublicationCardProps> = ({ publication }) => {
  const {
    author,
    banner,
    comment,
    created,
    id,
    publicationDate,
    sections,
    status,
    title,
  } = publication;

  return (
    <Card elevation={0} sx={card}>
      <CardContent sx={cardContent}>
        <Typography variant="h4" component="h2" gutterBottom noWrap>
          {title}
        </Typography>

        <Stack direction="row">
          <Box sx={imageWrapper}>
            <PublicationImage banner={banner} title={title} />
          </Box>

          <Box sx={infoWrapper}>
            <PublicationInfo
              author={author}
              created={created}
              publicationDate={publicationDate}
            />
          </Box>

          <Box sx={statusWrapper}>
            <PublicationStatus label={status} />
          </Box>
        </Stack>
      </CardContent>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <PublicationTag tags={sections} />

        <PublicationControlPanel id={id} comment={comment} />
      </Stack>
    </Card>
  );
};
export default PublicationCard;
