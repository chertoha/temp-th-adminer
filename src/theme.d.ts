import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    // status: {
    //   danger: string;
    // };
    // palette: Palette;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    // status?: {
    //   danger?: string;
    // };
  }

  // interface PaletteText {
  //   light: string;
  // }

  // interface PaletteTextOptions {
  //   light: string;
  // }

  interface Palette {
    bg: Palette["primary"];

    status: { published: string; draft: string };

    tag: {
      history: string;
      article: string;
      review: string;
      interview: string;
      activity: string;
    };

    color: {
      dark: string;
      grey: string;
      lightGray: string;
      light: string;
      photoDwnld: string;
      accentRed: string;
      accentYellow: string;
      piggy100: string;
      disabled: string;
      error: string;
    };
  }

  interface PaletteOptions {
    bg: PaletteColorOptions["primary"];

    status?: { published?: string; draft?: string };

    tag?: {
      history?: string;
      article?: string;
      review?: string;
      interview?: string;
      activity?: string;
    };

    color?: {
      dark?: string;
      grey?: string;
      lightGray?: string;
      light?: string;
      photoDwnld?: string;
      accentRed?: string;
      accentYellow?: string;
      piggy100?: string;
      disabled?: string;
      error?: string;
    };
  }

  interface PaletteColor {
    // darker?: string;
  }

  interface SimplePaletteColorOptions {
    // darker?: string;
  }

  interface TypographyVariants {
    label: React.CSSProperties;
    body3: React.CSSProperties;
    buttonSec: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    label?: React.CSSProperties;
    body3?: React.CSSProperties;
    buttonSec?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {}

  interface TypographyPropsVariantOverrides {
    label: true;
    body3: true;
    buttonSec: true;
  }
}
