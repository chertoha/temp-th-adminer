import RootSettingsForm from "./RootSettingsForm";

import { useUpdateRootEmailMutation } from "@/redux/rootAdmin/rootAdminApi";
import { RootFormValues } from "@/types/forms";
import { logoutUser } from "@/redux/auth/slice";
import { rootEmailFormSchema } from "@/utils/validation/settings";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

const EmailForm = () => {
  const dispatch = useDispatch();
  const [updateEmail] = useUpdateRootEmailMutation();

  const onEmailSumbit = (values: RootFormValues) => {
    updateEmail(values)
      .unwrap()
      .then(() => {
        dispatch(logoutUser());
      })
      .catch(err => {
        console.log(err);
        if (err.data && err.data.message.includes("already exists")) {
          toast.error("Користувач з таким імейлом вже існує");
        } else {
          console.log(err);
          toast.error(DEFAULT_ERROR_NOTIFICATION);
        }
      });
  };

  return (
    <RootSettingsForm
      fieldName="email"
      label="Електронна пошта"
      submitHandler={onEmailSumbit}
      validationSchema={rootEmailFormSchema}
      type="email"
      popupTitle="Бажаєте змінити електронну пошту?"
    />
  );
};

export default EmailForm;
