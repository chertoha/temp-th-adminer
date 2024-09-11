import dayjs from "dayjs";
import "dayjs/locale/uk";
import styles from "./DateSelector.styled";

import { FC } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormikContext } from "formik";
import { FieldChangeHandlerContext } from "@mui/x-date-pickers/internals";
import { PublicationFormValues } from "@/types/forms";

interface IDateSelectorProps {
  name: string;
  prohibitFutureDates?: boolean;
}

const DateSelector: FC<IDateSelectorProps> = ({
  name: fieldName,
  prohibitFutureDates = false,
}) => {
  const { setFieldValue, values } = useFormikContext<PublicationFormValues>();

  const onDatePick = (
    value: any,
    _validation: FieldChangeHandlerContext<any>
  ) => {
    if (value?.$d) {
      const date = new Date(
        value.$d - value.$d.getTimezoneOffset() * 60 * 1000
      );

      setFieldValue(fieldName, date);
    }
  };

  const onDateClear = () => {
    setFieldValue(fieldName, "");
  };

  return (
    <DatePicker
      value={dayjs(values.date)}
      maxDate={prohibitFutureDates ? dayjs() : undefined}
      onChange={onDatePick}
      sx={styles.picker}
      slotProps={{
        field: {
          clearable: true,
          onClear: onDateClear,
        },
      }}
    />
  );
};

export default DateSelector;
