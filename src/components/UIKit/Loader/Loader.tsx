import { theme } from "@/styles/theme";
import { FC } from "react";
import { ClipLoader } from "react-spinners";

interface ILoaderProps {
  size?: number;
  color?: string;
}

const Loader: FC<ILoaderProps> = ({
  size = 16,
  color = theme.palette.color.accentYellow,
}) => {
  return (
    <ClipLoader
      size={size}
      color={color}
      cssOverride={{ borderWidth: "4px" }}
    />
  );
};

export default Loader;
