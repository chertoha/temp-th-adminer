import Banner from "../Banner";
import DateSelector from "../UIKit/DateSelector";
import FieldBox from "../FieldBox";
import Gallery from "../Gallery";
import styles from "./Magazine.styled";

import { Box, Chip, Typography } from "@mui/material";
import {
  FIELDS_SYMBOLS_NUM,
  MAX_MAGAZINE_UPLOAD_FILES,
  MAX_UPLOAD_FILE_SIZE,
} from "@/config/constants";

export const SectionField = () => (
  <Box mt="16px">
    <Typography variant="h6" component="h2">
      Розділ*
    </Typography>

    <Chip label="Журнали" sx={styles.section} />
  </Box>
);

export const BannerField = () => (
  <Box mt="16px">
    <Typography variant="h6" component="h2">
      Основне фото* (Фото обкладинки)
    </Typography>
    <Typography variant="body1" color="lightgray">
      {`Ви можете завантажити одне фото до ${MAX_UPLOAD_FILE_SIZE} МБ. Формат: JPG, PNG`}
    </Typography>

    <Box height="700px" position="relative">
      <Banner />
    </Box>
  </Box>
);

export const TitleField = () => (
  <Box sx={{ mt: "16px" }}>
    <FieldBox
      label="Заголовок* (Назва випуску/ номер випуску)"
      placeholder="Заголовок"
      name="title"
      maxSymbols={FIELDS_SYMBOLS_NUM.TITLE_MAX}
    />
  </Box>
);

export const NumberOfPagesField = () => (
  <Box sx={{ mt: "16px" }}>
    <FieldBox
      label="Кількість сторінок *"
      placeholder="Кількість сторінок"
      name="description"
      maxSymbols={FIELDS_SYMBOLS_NUM.MAGAZINE_PAGES_MAX}
    />
  </Box>
);

export const DescriptionField = () => (
  <Box>
    <FieldBox
      label="Опис *"
      placeholder="Напишить опис публікації"
      multiline
      rows={30}
      maxSymbols={FIELDS_SYMBOLS_NUM.MAGAZINE_DESCRIPTION_MAX}
      name="content"
    />
  </Box>
);

export const CommentField = () => (
  <Box sx={styles.commentWrapper}>
    <FieldBox
      label="Нотатка"
      placeholder="Додати нотатку..."
      name="comment"
      multiline
      rows={6}
      maxSymbols={FIELDS_SYMBOLS_NUM.COMMENT_MAX}
    />
  </Box>
);

export const DateField = () => (
  <Box mt={8}>
    <Typography variant="h6" component="h2">
      Дата випуску *
    </Typography>

    <DateSelector name="date" prohibitFutureDates />
  </Box>
);

export const GalleryField = () => (
  <>
    <Typography variant="h6" component="h2">
      Галерея
    </Typography>

    <Typography variant="body2">
      {`Ви можете завантажити до ${MAX_MAGAZINE_UPLOAD_FILES} фото розміром до ${MAX_UPLOAD_FILE_SIZE} МБ (кожне). Формат: JPG,
      PNG`}
    </Typography>

    <Box mt="8px">
      <Gallery maxFiles={3} />
    </Box>
  </>
);
