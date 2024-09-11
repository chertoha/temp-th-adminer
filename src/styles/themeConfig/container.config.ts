import { Components, Theme } from "@mui/material";

const containerConfig: Components<Omit<Theme, "components">> | undefined = {
  MuiContainer: {
    styleOverrides: {
      root: ({ theme }: { theme: any }) => ({
        width: "100%",
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),

        [theme.breakpoints.up("sm")]: {
          maxWidth: theme.breakpoints.values.sm,
          paddingLeft: theme.spacing(10),
          paddingRight: theme.spacing(10),
        },

        [theme.breakpoints.up("md")]: {
          maxWidth: theme.breakpoints.values.md,
          paddingLeft: theme.spacing(16),
          paddingRight: theme.spacing(16),
        },

        [theme.breakpoints.up("xl")]: {
          maxWidth: theme.breakpoints.values.xl,
        },
      }),
    },
  },
};

export default containerConfig;
