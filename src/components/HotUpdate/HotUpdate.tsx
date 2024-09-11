import FixedLoader from "../FixedLoader";

import { FC, useEffect } from "react";
import { useFormikContext } from "formik";
import { useDebouncedCallback } from "use-debounce";
import { MagazineFormValues, PublicationFormValues } from "@/types/forms";
import { usePutPublicationMutation } from "@/redux/publications/publicationsApi";
import { STATUSES } from "@/config/constants";
import { MagazineType, PublicationType } from "@/types/entities";
import { usePutMagazineMutation } from "@/redux/magazines/magazinesApi";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";


interface IHotUpdateProps {
  id: string | number;
  publication: PublicationType | MagazineType;
  isMagazine?: boolean;
}

const HotUpdate: FC<IHotUpdateProps> = ({
  id,
  publication: { status },
  isMagazine = false,
}) => {
  const { values, validateForm } = useFormikContext<
    PublicationFormValues | MagazineType
  >();

  const [putPublication, { isLoading: isPublicationUpdating }] =
    usePutPublicationMutation();
  const [putMagazine, { isLoading: isMagazineUpdating }] =
    usePutMagazineMutation();

  const update = (values: PublicationFormValues | MagazineFormValues) => {
    const isDraft = STATUSES.DRAFT.API_NAME === status;

    if (!isDraft) return;

    let response: Promise<PublicationType | MagazineType>;

    const queryMagazine = {
      id,
      data: values as MagazineFormValues,
    };

    const queryPublication = {
      id,
      data: {
        ...(values as PublicationFormValues),
        content: JSON.stringify(values.content),
      },
    };

    if (isMagazine) {
      response = putMagazine(queryMagazine).unwrap();
    } else {
      response = putPublication(queryPublication).unwrap();
    }

    response.catch(err => {
      if (err.data && err.data.message.includes("already exists")) {
        toast.error("Публікація з таким заголовком вже існує");
      } else {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      }
    });

    validateForm();
  };
  const debouncedPutPublication = useDebouncedCallback(update, 700);

  useEffect(() => {
    debouncedPutPublication(values);
  }, [values, debouncedPutPublication]);

  return (
    <FixedLoader
      isLoading={isPublicationUpdating || isMagazineUpdating}
      size={50}
    />
  );
};

export default HotUpdate;
