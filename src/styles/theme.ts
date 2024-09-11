import buttonConfig from "./themeConfig/button.config";
import containerConfig from "./themeConfig/container.config";
import typographyConfig from "./themeConfig/typography.config";
import { createTheme } from "@mui/material";

export const breakpoints = {
  laptop: 1024,
  desktop: 1440,
};

export const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 390,
      md: 768,
      lg: breakpoints.laptop,
      xl: breakpoints.desktop,
    },
  },

  spacing: 2,

  palette: {
    bg: {
      main: "#EDEDED",
      dark: "#171717",
      light: "#F7F8FF",
    },

    status: { published: "#64C17E", draft: "#FF8227" },

    tag: {
      history: "#FF3F3F",
      article: "#147CC0",
      review: "#FF720D",
      interview: "#0C931A",
      activity: "#6E00FD",
    },

    text: {
      primary: "#171717",
      secondary: "#747474",
    },

    color: {
      dark: "#171717",
      grey: "#747474",
      lightGray: "#EDEDED",
      light: "#F7F8FF",
      photoDwnld: "rgba(23, 23, 23, 0.7)",
      accentRed: "#DD1D4B",
      accentYellow: "#F3C319",
      piggy100: "#F3C319",
      disabled: "#C9C9C9",
      error: "#EF6B6B",
    },
  },

  components: {
    ...containerConfig,
    ...typographyConfig,
    ...buttonConfig,
  },
});
