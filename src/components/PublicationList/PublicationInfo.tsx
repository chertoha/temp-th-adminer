import { FC } from "react";
import { Typography } from "@mui/material";
import dayjs from "dayjs";

import { PublicationAuthorType } from "@/types/entities";
import { theme } from "@/styles/theme";

interface IPublicationInfoProps {
  author: PublicationAuthorType | null;
  created: string;
  publicationDate: string | null;
}

const PublicationInfo: FC<IPublicationInfoProps> = ({
  author,
  created,
  publicationDate,
}) => {
  return (
    <>
      <Typography>
        Автор:{" "}
        <Typography
          variant="body1"
          component="span"
          color={theme.palette.color.dark}
        >
          {author?.name || ""}
        </Typography>
      </Typography>

      <Typography>
        Дата створення:{" "}
        <Typography
          variant="body1"
          component="span"
          color={theme.palette.color.dark}
        >
          {dayjs(created).format("DD.MM.YYYY")}
        </Typography>
      </Typography>

      <Typography>
        Дата публікації:{" "}
        <Typography
          variant="body1"
          component="span"
          color={theme.palette.color.dark}
        >
          {publicationDate ? dayjs(publicationDate).format("DD.MM.YYYY") : ""}
        </Typography>
      </Typography>
    </>
  );
};
export default PublicationInfo;
