import Loader from "../UIKit/Loader";

import { Box } from "@mui/material";
import { FC } from "react";
import styles from "./FixedLoader.styled";

interface IFixedLoaderProps {
  isLoading: boolean;
  position?: "fixed" | "absolute";
  size?: number;
  color?: string;
}

const FixedLoader: FC<IFixedLoaderProps> = ({
  isLoading,
  position = "fixed",
  size = 70,
  color,
}) => {
  return (
    isLoading && (
      <Box position={position} sx={styles.wrapper}>
        <Loader size={size} color={color} />
      </Box>
    )
  );
};

export default FixedLoader;
