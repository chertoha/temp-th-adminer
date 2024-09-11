import useUploadImage from "@/hooks/useUploadImage";
import hasErrors from "@/helpers/checkImageErrors";
import styles from "./AuthorEditCard.styled";

import { ChangeEvent } from "react";
import { Box } from "@mui/material";
import { useField } from "formik";
import { IoCameraOutline } from "react-icons/io5";
import { imageAllowedMIMETypes } from "@/utils/imageAllowedMIMETypes";
import { createImageApiUrl } from "@/helpers/createImageApiUrl";
import { extractFileFromInput } from "@/utils/files/extractFIles";

const Avatar = () => {
  const [{ value: imageName }, { error }, { setValue, setError }] = useField<
    string | null
  >("avatar");

  const { upload } = useUploadImage();

  const onInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files && [...e.target.files];
    if (hasErrors(files, setError)) return;

    const file = extractFileFromInput(files);
    if (!file) return;
    upload(file, setValue, { name: file.name });
  };

  return (
    <Box component="label" sx={styles.label}>
      {imageName && (
        <Box sx={styles.preview}>
          <Box
            component="img"
            alt="avatar"
            sx={styles.image}
            src={createImageApiUrl(imageName)}
          />
        </Box>
      )}

      <Box component="span" sx={styles.camera}>
        <IoCameraOutline />
      </Box>

      <Box component="span" sx={styles.text}>
        Завантажити фото
      </Box>

      <input
        type="file"
        onChange={onInput}
        hidden
        accept={imageAllowedMIMETypes.join(",")}
      />

      {error && <Box sx={styles.avatarError}>{error}</Box>}
    </Box>
  );
};

export default Avatar;
