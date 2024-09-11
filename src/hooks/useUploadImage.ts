import { DEFAULT_ERROR_NOTIFICATION } from "@/components/Notification/Notification";
import { useUploadImageMutation } from "@/redux/images/imagesApi";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

type Options = {
  name?: string;
};

const useUploadImage = () => {
  const [uploadImage, { isLoading }] = useUploadImageMutation();

  const upload = (
    file: File | Blob,
    handler: (imageName: string | null) => void,
    options?: Options
  ) => {
    const imageName = options?.name || "image";

    const formData = new FormData();
    formData.append("file", file, `${nanoid()}_${imageName}`);

    uploadImage(formData)
      .unwrap()
      .then(({ name }) => {
        handler(name);
      })
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };

  return { upload, isLoading };
};

export default useUploadImage;
