import useRevalidateUser from "@/hooks/useRevalidateUser";
import RootSettingsForm from "./RootSettingsForm";

import { useUpdateRootNameMutation } from "@/redux/rootAdmin/rootAdminApi";
import { rootNameFormSchema } from "@/utils/validation/settings";
import { RootFormValues } from "@/types/forms";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

const NameForm = () => {
  const [updateName] = useUpdateRootNameMutation();

  const revalidateUser = useRevalidateUser();

  const onNameSumbit = (values: RootFormValues) => {
    updateName(values)
      .unwrap()
      .then(() => revalidateUser())
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };

  return (
    <RootSettingsForm
      fieldName="name"
      label="Ім’я"
      submitHandler={onNameSumbit}
      validationSchema={rootNameFormSchema}
      popupTitle="Бажаєте змінити ім'я?"
    />
  );
};

export default NameForm;
