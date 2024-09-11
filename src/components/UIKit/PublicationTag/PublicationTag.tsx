import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import { SECTIONS } from "@/config/constants";
import { PublicationSections } from "@/types/entities";

interface IPublicationTagProps {
  tags: PublicationSections;
}

const PublicationTag: FC<IPublicationTagProps> = ({ tags }) => {
  return (
    <Stack direction="row" spacing={2}>
      {tags.map(tag => (
        <Typography
          key={SECTIONS[tag].LABEL}
          component="span"
          variant="body1"
          sx={{
            color: SECTIONS[tag].COLOR,
          }}
        >
          #{SECTIONS[tag].LABEL}
        </Typography>
      ))}
    </Stack>
  );
};
export default PublicationTag;
