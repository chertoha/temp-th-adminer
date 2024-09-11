import Cropper, { Point, Area } from "react-easy-crop";

import Aspect from "./Aspect";
import Scale from "./Scale";
import Rotate from "./Rotate";
import styles from "./ModalCropper.styled";

import { FC, useState } from "react";
import { Box, Button } from "@mui/material";
import { getCroppedImg } from "@/utils/imageTransformUtils";

interface IModalCropperProps {
  imageUrl: string;
  onError: (err: string) => void;
  onSubmit: (url: string) => void;
}

const ModalCropper: FC<IModalCropperProps> = ({
  imageUrl,
  onError,
  onSubmit,
}) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [aspect, setAspect] = useState(() => 4 / 3);

  const onCropComplete = (_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onApply = async () => {
    try {
      if (!croppedAreaPixels) throw new Error("Cropped area is null");

      const croppedImage = await getCroppedImg(
        imageUrl,
        croppedAreaPixels,
        rotation
      );

      if (!croppedImage) throw new Error("Cropp image error");

      onSubmit(croppedImage);
    } catch (err) {
      console.warn(err);
      if (err instanceof Error) onError(err.message);
    }
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.cropper}>
        <Cropper
          image={imageUrl}
          crop={crop}
          rotation={rotation}
          zoom={zoom}
          aspect={aspect}
          onCropChange={setCrop}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </Box>

      <Box sx={styles.tools}>
        <Aspect value={aspect} onChange={setAspect} />

        <Scale value={zoom} onChange={setZoom} />

        <Rotate value={rotation} onChange={setRotation} />

        <Button
          sx={styles.submit}
          onClick={onApply}
          color="primary"
          size="large"
        >
          Підтвердити
        </Button>
      </Box>
    </Box>
  );
};

export default ModalCropper;
