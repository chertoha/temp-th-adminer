import { FC } from "react";
import { Typography } from "@mui/material";
import dayjs from "dayjs";

import { theme } from "@/styles/theme";

interface IMagazineInfoProps {
  date: string;
  created: string;
  publicationDate: string | null;
}

const MagazineInfo: FC<IMagazineInfoProps> = ({
  date,
  created,
  publicationDate,
}) => {
  return (
    <>
      <Typography>
        Рік:{" "}
        <Typography
          variant="body1"
          component="span"
          color={theme.palette.color.dark}
        >
          {date ? dayjs(date).format("YYYY") : ""}
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
export default MagazineInfo;
