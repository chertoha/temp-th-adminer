import { Button } from "@mui/material";
import { FC } from "react";

interface IResetFilterButtonProps {
  handler: () => void;
}

const ResetFilterButton: FC<IResetFilterButtonProps> = ({ handler }) => {
  return (
    <Button variant="outlined" onClick={handler}>
      Оновити фільтр
    </Button>
  );
};

export default ResetFilterButton;
