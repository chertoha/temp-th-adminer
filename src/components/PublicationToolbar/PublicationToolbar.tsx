import PublicationStatus from "../UIKit/PublicationStatus";
import ErrorBadge from "../ErrorBadge";
import SetToDraftButton from "../SetToDraftButton";
import PublishButton from "../PublishButton";
import SavePublicationButton from "../SavePublicationButton";
import SaveMagazineButton from "../SaveMagazineButton";
import styles from "./PublicationToolbar.styled";

import { Box } from "@mui/material";
import { FC } from "react";
import { MagazineType, PublicationType } from "@/types/entities";
import { STATUSES } from "@/config/constants";

interface IPublicationToolbarProps {
  publication: PublicationType | MagazineType;
  isMagazine?: boolean;
}

const PublicationToolbar: FC<IPublicationToolbarProps> = ({
  publication,
  isMagazine = false,
}) => {
  const { id, status } = publication;

  const isPublished = status === STATUSES.PUBLISHED.API_NAME;

  const SaveButton = isMagazine ? SaveMagazineButton : SavePublicationButton;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.toolbar}>
          <Box display="flex" gap="50px" alignItems="center">
            {!isPublished && <PublishButton id={id} isMagazine={isMagazine} />}

            {isPublished && <SaveButton id={id} label="Зберігти зміни" />}

            <ErrorBadge publication={publication} isMagazine={isMagazine} />

            {isPublished && (
              <SetToDraftButton
                label="Перевести у чернетку"
                id={id}
                status={STATUSES.DRAFT.API_NAME}
                isMagazine={isMagazine}
              />
            )}
          </Box>

          <PublicationStatus label={status} />
        </Box>
      </Box>
    </Box>
  );
};

export default PublicationToolbar;
