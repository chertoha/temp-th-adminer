import { Components, Theme } from "@mui/material";

const buttonConfig: Components<Omit<Theme, "components">> | undefined = {
  MuiButton: {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },

    styleOverrides: {
      root: ({ ownerState, theme }: { ownerState: any; theme: any }) => ({
        ...{
          textTransform: "none",
          fontWeight: 700,
          fontSize: 16,
          lineHeight: 1.3,

          color: theme.palette.color.light,
          backgroundColor: theme.palette.color.accentYellow,

          "&:hover": {
            backgroundColor: theme.palette.color.accentRed,
          },

          "&:disabled ": {
            backgroundColor: theme.palette.color.disabled,
          },
        },

        ...(ownerState.variant === "contained" && {
          textTransform: "none",
          fontWeight: 700,
          fontSize: 16,
          lineHeight: 1.3,

          color: theme.palette.color.light,
          backgroundColor: theme.palette.color.error,

          "&:hover": {
            backgroundColor: theme.palette.color.accentRed,
          },
        }),

        ...(ownerState.variant === "outlined" && {
          textTransform: "none",
          fontWeight: 700,
          fontSize: 16,
          lineHeight: 1.3,

          color: theme.palette.color.dark,
          borderColor: theme.palette.color.dark,
          backgroundColor: "transparent",

          "&:hover": {
            color: theme.palette.color.light,
            backgroundColor: theme.palette.color.accentYellow,
            borderColor: theme.palette.color.accentYellow,
          },
        }),
      }),
    },
  },
};

export default buttonConfig;
