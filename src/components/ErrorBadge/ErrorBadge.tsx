import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import styles from "./ErrorBadge.styled";

import { FC } from "react";
import { Badge, Box, Typography } from "@mui/material";
import { useFormikContext, FormikErrors } from "formik";
import { MagazineType, PublicationType } from "@/types/entities";
import {
  MAGAZINE_FORM_FIELDS,
  PUBLICATION_FORM_FIELDS,
  STATUSES,
} from "@/config/constants";
import { MagazineFormValues, PublicationFormValues } from "@/types/forms";

interface IErrorBadgeProps {
  publication: PublicationType | MagazineType;
  isMagazine?: boolean;
}

type ErrorKey = keyof FormikErrors<PublicationFormValues | MagazineFormValues>;

const ErrorBadge: FC<IErrorBadgeProps> = ({
  publication: { status },
  isMagazine = false,
}) => {
  const { errors } = useFormikContext<
    PublicationFormValues | MagazineFormValues
  >();

  const errorKeys = Object.keys(errors);
  const hasErrors = errorKeys.length > 0;
  const errorColor = status === STATUSES.DRAFT.API_NAME ? "warning" : "error";
  const fields = isMagazine ? MAGAZINE_FORM_FIELDS : PUBLICATION_FORM_FIELDS;

  return (
    <Box sx={styles.wrapper}>
      <Badge badgeContent={errorKeys.length} color="info" sx={styles.badge}>
        <ErrorOutlinedIcon
          color={hasErrors ? errorColor : "success"}
          sx={styles.icon}
        />
      </Badge>

      <Box component="ul" sx={styles.list}>
        {hasErrors ? (
          errorKeys.map(key => (
            <Box key={key} component="li" sx={styles.item}>
              <Typography variant="body1">
                <Typography component="span" variant="body2">
                  {fields[key]}
                </Typography>{" "}
                : {errors[key as ErrorKey]}
              </Typography>
            </Box>
          ))
        ) : (
          <Box component="li">
            <Typography variant="h4">Помилки відсутні</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ErrorBadge;
