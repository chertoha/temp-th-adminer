import { SxProps } from "@mui/material";

const commentWrapper: SxProps = {
  mt: "32px",
  padding: "40px",
  backgroundColor: "#EDEDED",
  borderRadius: "10px",
};

const authors: SxProps = {
  padding: "40px",
  backgroundColor: "#F7F8FF",
  borderRadius: "10px",
};

const authorsAvatar: SxProps = { flexShrink: 0, width: "56px", height: "56px" };

const editorWrapper: SxProps = {
  padding: "20px",
  minHeight: "800px",
  border: "2px solid",
  borderColor: "color.grey",
  borderRadius: "4px",
  backgroundColor: "white",
};

const topWrapper: SxProps = {
  display: {
    lg: "block",
    xl: "flex",
  },
  flexDirection: {
    xl: "row-reverse",
  },

  justifyContent: "space-between",
  gap: "20px",
};

const leftWrapper: SxProps = {
  mt: {
    lg: "50px",
    xl: 0,
  },
};

const styles = {
  commentWrapper,
  authors,
  authorsAvatar,
  editorWrapper,
  topWrapper,
  leftWrapper,
};

export default styles;
