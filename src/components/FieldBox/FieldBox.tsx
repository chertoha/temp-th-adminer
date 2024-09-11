import Box from "@mui/material/Box";
import InputField from "@/components/InputField";
import styles from "./FieldBox.styled";

import { FC } from "react";
import { useField } from "formik";
import { Typography } from "@mui/material";

interface IFieldBoxProps {
  label: string;
  maxSymbols?: number;
  [rest: string]: any;
}

const FieldBox: FC<IFieldBoxProps> = ({ label, maxSymbols = 200, ...rest }) => {
  const [{ value }] = useField(rest as any);

  const symbolsNum = value ? value.length : 0;
  return (
    <>
      <Typography variant="h6" component="h2">
        {label}
      </Typography>

      <Box>
        <InputField {...rest} />

        <Typography variant="body1" sx={styles.counter}>
          <Box
            component="span"
            color={symbolsNum > maxSymbols ? "color.error" : "color.grey"}
          >
            {symbolsNum}
          </Box>
          /{maxSymbols}
        </Typography>
      </Box>
    </>
  );
};

export default FieldBox;
