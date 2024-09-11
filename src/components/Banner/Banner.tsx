import convertToBlob from "@/utils/files/convertToBlob";
import useUploadImage from "@/hooks/useUploadImage";
import DropZone from "../DropZone";
import ModalCropper from "../ModalCropper";
import Preview from "./Preview";
import styles from "./Banner.styled";
import FixedLoader from "../FixedLoader";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Box, Modal } from "@mui/material";
import { useField } from "formik";
import { extractFileFromInput } from "@/utils/files/extractFIles";

const portal = document.getElementById("portal") as HTMLElement;

const Banner = () => {
  const [{ value: imageName }, _, { setValue, setError }] = useField<
    string | null
  >("banner");

  const [file, setFile] = useState<File | null>(null);
  const closeCropper = () => setFile(null);
  const { upload, isLoading } = useUploadImage();

  const filesHandler = (files: File[] | null) => {
    const file = extractFileFromInput(files);
    if (!file) return;
    setFile(file);
  };

  const onCropped = async (url: string) => {
    const blob = await convertToBlob(url);
    upload(blob, setValue, { name: file?.name });
    closeCropper();
  };

  return (
    <>
      {!imageName ? (
        <DropZone filesHandler={filesHandler} />
      ) : (
        <Preview
          imageName={imageName}
          onRemove={() => {
            setValue("");
          }}
        />
      )}

      <FixedLoader isLoading={isLoading} position="absolute" />

      {file &&
        createPortal(
          <Modal open={!!file} onClose={closeCropper}>
            <Box sx={styles.cropper}>
              <ModalCropper
                imageUrl={URL.createObjectURL(file)}
                onError={setError}
                onSubmit={onCropped}
              />
            </Box>
          </Modal>,
          portal
        )}
    </>
  );
};

export default Banner;
