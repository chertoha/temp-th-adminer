import { FC } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

interface IAspectProps {
  value: number;
  onChange: (value: number) => void;
}

const Aspect: FC<IAspectProps> = ({ value, onChange }) => {
  const onAspectChangeHandler = (e: SelectChangeEvent) => {
    onChange(Number(e.target.value));
  };

  return (
    <Box display="flex" columnGap={10}>
      <Typography variant="overline" fontSize={20}>
        Відношення
      </Typography>

      <FormControl size="medium">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value.toString()}
          onChange={onAspectChangeHandler}
        >
          <MenuItem value={4 / 3}>4:3</MenuItem>
          <MenuItem value={3 / 4}>3:4</MenuItem>
          <MenuItem value={3 / 2}>3:2</MenuItem>
          <MenuItem value={1 / 1}>1:1</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default Aspect;
