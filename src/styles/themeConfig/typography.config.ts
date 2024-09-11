import { Components, Theme } from "@mui/material/styles";

const typographyConfig: Components<Omit<Theme, "components">> | undefined = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        label: "span",
        body3: "p",
        buttonSec: "span",
      },
    },

    styleOverrides: {
      root: ({ ownerState }: { ownerState: any }) => ({
        ...(ownerState.variant === "h2" && {
          fontWeight: 700,
          fontSize: 24,
          lineHeight: 1.3,
        }),
        ...(ownerState.variant === "h3" && {
          fontWeight: 700,
          fontSize: 20,
          lineHeight: 1.3,
        }),
        ...(ownerState.variant === "h4" && {
          fontWeight: 600,
          fontSize: 18,
          lineHeight: 1.3,
        }),
        ...(ownerState.variant === "label" && {
          fontWeight: 400,
          fontSize: 20,
          lineHeight: 1.3,
        }),
        ...(ownerState.variant === "body1" && {
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.5,
        }),
        ...(ownerState.variant === "body2" && {
          fontWeight: 600,
          fontSize: 16,
          lineHeight: 1,
        }),
        ...(ownerState.variant === "body3" && {
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.5,
        }),
        ...(ownerState.variant === "buttonSec" && {
          fontWeight: 700,
          fontSize: 16,
          lineHeight: 1.3,
        }),
      }),
    },
  },
};

export default typographyConfig;
