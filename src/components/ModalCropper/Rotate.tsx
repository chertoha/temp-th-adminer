import { Slider, Typography } from "@mui/material";
import { FC } from "react";

interface IRotateProps {
  value: number;
  onChange: (value: number) => void;
}

const Rotate: FC<IRotateProps> = ({ value, onChange }) => {
  return (
    <div>
      <Typography variant="overline" fontSize={20}>
        Поворот
      </Typography>

      <Slider
        value={value}
        min={0}
        max={360}
        step={1}
        aria-labelledby="Rotation"
        onChange={(_e, rotation) => onChange(rotation as number)}
      />
    </div>
  );
};

export default Rotate;
