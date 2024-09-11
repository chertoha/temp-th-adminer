import styles from "./PublishingTimeSelector.styled";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const PublishingTimeSelector = () => {
  return (
    <DateTimePicker
      onChange={(value, _validation) => {
        console.log(value);
      }}
      sx={styles.picker}
      slotProps={{
        field: {
          clearable: true,
          // onClear: () => setCleared(true),
        },
      }}
    />
  );
};

export default PublishingTimeSelector;
