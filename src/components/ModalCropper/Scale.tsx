import { Slider, Typography } from "@mui/material";
import { FC } from "react";

interface IScaleProps {
  value: number;
  onChange: (value: number) => void;
}

const Scale: FC<IScaleProps> = ({ value, onChange }) => {
  return (
    <div>
      <Typography variant="overline" fontSize={20}>
        Масштаб
      </Typography>

      <Slider
        value={value}
        min={1}
        max={3}
        step={0.1}
        aria-labelledby="Zoom"
        onChange={(_e, zoom) => onChange(zoom as number)}
      />
    </div>
  );
};

export default Scale;
