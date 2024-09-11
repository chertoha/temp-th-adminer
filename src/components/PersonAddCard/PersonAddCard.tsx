import styles, { AddButton } from "./PersonAddCard.styled";

import { FC } from "react";
import { Box } from "@mui/material";
import { ReactComponent as JohnDoeIcon } from "@/assets/images/icons/john-doe.svg";

interface IPersonAddCardProps {
  onCreate: () => void;
  label: string;
  isEmployee?: boolean;
}

const PersonAddCard: FC<IPersonAddCardProps> = ({
  onCreate,
  label,
  isEmployee = false,
}) => {
  return (
    <Box
      sx={{
        ...(isEmployee && {
          ...styles.eployeeWrapper,
        }),
      }}
    >
      <Box
        sx={{
          ...styles.icon,
          ...(isEmployee && { ...styles.eployeeIcon }),
        }}
      >
        <JohnDoeIcon width="90%" />
      </Box>

      <AddButton isEmployee={isEmployee} component="button" onClick={onCreate}>
        {label}
      </AddButton>
    </Box>
  );
};

export default PersonAddCard;
