import DropZone from "../DropZone/DropZone";
import GalleryList from "./GalleryList";
import styles from "./Gallery.styled";
import FixedLoader from "../FixedLoader";

import { Box, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useUploadImagesMutation } from "@/redux/images/imagesApi";
import { nanoid } from "nanoid";
import { useField } from "formik";
import { MAX_UPLOAD_FILES } from "@/config/constants";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

interface IGalleryProps {
  maxFiles?: number;
}

const Gallery: FC<IGalleryProps> = ({ maxFiles = MAX_UPLOAD_FILES }) => {
  const [{ value: images }, _, { setValue }] = useField<string[]>("gallery");

  const [files, setFiles] = useState<File[] | null>(null);
  const [uploadImages, { isLoading }] = useUploadImagesMutation();

  useEffect(() => {
    if (!files || files.length === 0) return;

    const formData = new FormData();

    files.forEach(file =>
      formData.append("files", file, `${nanoid()}_${file.name}`)
    );

    uploadImages(formData)
      .unwrap()
      .then(response => {
        setFiles(null);
        const convertedResponse = response.map(({ name }) => name);
        setValue([...images, ...convertedResponse]);
      })
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  }, [files, uploadImages, setValue, images]);

  const removeImage = (imageName: string) => {
    setValue(images.filter(name => name !== imageName));
  };

  return (
    <>
      <Typography mb="8px" variant="body1">
        <Box
          component="span"
          color={images.length > maxFiles ? "color.error" : "color.grey"}
        >
          Обрано картинок {images.length}
        </Box>
        /{maxFiles}
      </Typography>

      <Box sx={styles.wrapper}>
        <Box minHeight="400px">
          <DropZone multiple filesHandler={setFiles} maxFiles={maxFiles} />
        </Box>

        <Box sx={styles.gallery}>
          {images ? (
            <GalleryList images={images} remove={removeImage} />
          ) : (
            <div>No images</div>
          )}

          <FixedLoader isLoading={isLoading} position="absolute" />
        </Box>
      </Box>
    </>
  );
};

export default Gallery;
