import { Chip } from "@mui/material";
import { FC } from "react";

import { STATUSES } from "@/config/constants";

import * as styles from "./PublicationStatus.styles";

interface IPublicationStatusProps {
  label: string;
}

const PublicationStatus: FC<IPublicationStatusProps> = ({ label }) => {
  return (
    <Chip
      label={STATUSES[label].LABEL}
      sx={{
        backgroundColor: STATUSES[label].COLOR,
        ...styles.chip,
      }}
    />
  );
};
export default PublicationStatus;
