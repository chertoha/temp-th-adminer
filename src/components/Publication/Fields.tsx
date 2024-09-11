import AuthorsSelector from "../UIKit/AuthorsSelector";
import Banner from "../Banner";
import DateSelector from "../UIKit/DateSelector";
import FieldBox from "../FieldBox";
import Gallery from "../Gallery";
import PublishingTimeSelector from "../PublishingTimeSelector";
import SectionsSelector from "../SectionsSelector";
import styles from "./Publication.styled";

import { Avatar, Box, Stack, Typography } from "@mui/material";
import { IoPersonSharp } from "react-icons/io5";
import {
  FIELDS_SYMBOLS_NUM,
  MAX_UPLOAD_FILES,
  MAX_UPLOAD_FILE_SIZE,
} from "@/config/constants";

export const BannerField = () => (
  <Box mt="16px">
    <Typography variant="h6" component="h2">
      Основне фото *
    </Typography>
    <Typography variant="body1" color="lightgray">
      {`Ви можете завантажити одне фото до ${MAX_UPLOAD_FILE_SIZE} МБ. Формат: JPG, PNG`}
    </Typography>

    <Box height="300px" position="relative">
      <Banner />
    </Box>
  </Box>
);

export const TitleField = () => (
  <Box sx={{ mt: "16px" }}>
    <FieldBox
      label="Заголовок *"
      placeholder="Напишить заголовок вашої статті"
      name="title"
      maxSymbols={FIELDS_SYMBOLS_NUM.TITLE_MAX}
    />
  </Box>
);

export const ShortDescriptionField = () => (
  <Box sx={{ mt: "16px" }}>
    <FieldBox
      label="Короткий опис *"
      placeholder="Напишить короткий опис вашої статті"
      name="shortDescription"
      maxSymbols={FIELDS_SYMBOLS_NUM.SHORT_DESCRIPTION_MAX}
    />
  </Box>
);

export const DescriptionField = () => (
  <Box>
    <FieldBox
      label="Опис *"
      placeholder="Напишить опис публікації"
      multiline
      rows={5}
      maxSymbols={FIELDS_SYMBOLS_NUM.DESCRIPTION_MAX}
      name="description"
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

export const PersonField = () => (
  <Box mt={8} width="530px">
    <FieldBox
      label="Персона *"
      placeholder="Напишить ім’я та призвіще"
      name="person"
      maxSymbols={FIELDS_SYMBOLS_NUM.PERSON_MAX}
    />
  </Box>
);

export const QuoteField = () => (
  <Box mt={8}>
    <FieldBox
      label="Цитата *"
      placeholder="Напишить цитату з інтерв'ю"
      multiline
      rows={5}
      maxSymbols={FIELDS_SYMBOLS_NUM.QUOTE_MAX}
      name="quote"
    />
  </Box>
);

export const AuthorsField = () => (
  <Box sx={styles.authors}>
    <Typography variant="h6" component="h2" mb={2}>
      Автор*
    </Typography>
    <Stack direction="row" spacing={4}>
      <Avatar variant="rounded" src="" sx={styles.authorsAvatar}>
        <IoPersonSharp />
      </Avatar>

      <AuthorsSelector />
    </Stack>
  </Box>
);

export const DateField = () => (
  <Box mt={8}>
    <Typography variant="h6" component="h2">
      Дата події*
    </Typography>

    <Typography variant="body2" mb={2}>
      Оберіть дату проведення події
    </Typography>

    <DateSelector name="date" />
  </Box>
);

export const GalleryField = () => (
  <>
    <Typography variant="h6" component="h2">
      Галерея
    </Typography>

    <Typography variant="body2">
      {`Ви можете завантажити до ${MAX_UPLOAD_FILES} фото розміром до ${MAX_UPLOAD_FILE_SIZE} МБ (кожне). Формат: JPG,
      PNG`}
    </Typography>

    <Box mt="8px">
      <Gallery />
    </Box>
  </>
);

export const PublishingTimeField = () => (
  <>
    <Typography variant="h6" component="h2" mb={2}>
      Запланована публікація
    </Typography>

    <PublishingTimeSelector />
  </>
);

export const SectionsField = () => (
  <Box mt="16px">
    <Typography variant="h6" component="h2">
      Розділ*
    </Typography>

    <Typography variant="body2">один або більше</Typography>

    <SectionsSelector name="sections" />
  </Box>
);
