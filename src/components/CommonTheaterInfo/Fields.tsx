import InfoInput from "./InfoInput";
import styles from "./CommonTheaterInfo.styled";

import { ReactComponent as InstagramIcon } from "@/assets/images/icons/icon-instagram.svg";
import { ReactComponent as YouTubeIcon } from "@/assets/images/icons/icon-youtube.svg";
import { ReactComponent as FacebookIcon } from "@/assets/images/icons/icon-facebook.svg";

import { Box, Typography } from "@mui/material";

export const MagazinePriceField = () => (
  <Box mt="32px">
    <Typography variant="h6" component="h3">
      Ціна за журнал
    </Typography>

    <InfoInput name="purchaseInfo" />
  </Box>
);

export const PhoneField = () => (
  <Box mt="24px">
    <Typography variant="h6" component="h3">
      Телефон
    </Typography>

    <InfoInput name="phone" type="tel" />
  </Box>
);

export const AdminEmailField = () => (
  <Box mt="32px">
    <Typography variant="h6" component="h3">
      Електронна пошта 1
    </Typography>

    <Typography variant="body1" color="lightgray">
      Ця пошта для повідомлень через зворотню форму зв’язку.
    </Typography>

    <InfoInput name="adminEmail" type="email" />
  </Box>
);

export const PolicyEmailField = () => (
  <Box mt="32px">
    <Typography variant="h6" component="h3">
      Електронна пошта 2
    </Typography>

    <Typography variant="body1" color="lightgray">
      Ця пошта вказується в умовах політики конфіденційності.
    </Typography>

    <InfoInput name="privacyPolicyEmail" type="email" />
  </Box>
);

export const LegalAddressField = () => (
  <Box mt="32px">
    <Typography variant="h6" component="h3">
      Юридична адреса
    </Typography>

    <InfoInput name="legalAddress" />
  </Box>
);

export const InstagramField = () => (
  <Box mt="24px">
    <Typography variant="h6" component="h3" pl="48px">
      Instagram
    </Typography>

    <Box sx={styles.input}>
      <InstagramIcon width="32" height="32" />

      <Box position="relative" width="100%">
        <InfoInput
          name="instagramLink"
          placeholder="https://www.instagram.com/"
        />
      </Box>
    </Box>
  </Box>
);

export const YoutubeField = () => (
  <Box mt="32px">
    <Typography variant="h6" component="h3" pl="48px">
      YouTube
    </Typography>

    <Box sx={styles.input}>
      <YouTubeIcon width="32" height="32" />

      <Box position="relative" width="100%">
        <InfoInput name="youtubeLink" placeholder="https://www.youtube.com/" />
      </Box>
    </Box>
  </Box>
);

export const FacebookField = () => (
  <Box mt="32px">
    <Typography variant="h6" component="h3" pl="48px">
      Facebook
    </Typography>

    <Box sx={styles.input}>
      <FacebookIcon width="32" height="32" />

      <Box position="relative" width="100%">
        <InfoInput
          name="facebookLink"
          placeholder="https://www.facebook.com/"
        />
      </Box>
    </Box>
  </Box>
);
