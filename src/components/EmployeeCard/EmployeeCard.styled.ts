import { SxProps } from "@mui/material";

const card: SxProps = { display: "flex", alignItems: "center", gap: "32px" };

const thumb: SxProps = {
  height: "218px",
  width: "218px",
  overflow: "hidden",
  borderRadius: "4px",
};

const avatar: SxProps = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const meta: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "331px",
};

const order: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
};

const arrow: SxProps = {
  width: "48px",
  height: "48px",
  "& > svg": { width: "28px", height: "28px" },
};

const styles = {
  card,
  thumb,
  avatar,
  meta,
  order,
  arrow,
};

export default styles;
