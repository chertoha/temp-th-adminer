import RootSettingsForm from "./RootSettingsForm";

import { useDispatch } from "react-redux";
import { useUpdateRootPasswordMutation } from "@/redux/rootAdmin/rootAdminApi";
import { RootFormValues } from "@/types/forms";
import { logoutUser } from "@/redux/auth/slice";
import { rootPasswordFormSchema } from "@/utils/validation/settings";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

const PasswordForm = () => {
  const dispatch = useDispatch();
  const [updatePassword] = useUpdateRootPasswordMutation();

  const onPasswordSumbit = (values: RootFormValues) => {
    updatePassword(values)
      .unwrap()
      .then(() => {
        dispatch(logoutUser());
      })
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };

  return (
    <RootSettingsForm
      fieldName="password"
      label="Пароль"
      submitHandler={onPasswordSumbit}
      validationSchema={rootPasswordFormSchema}
      type="password"
      popupTitle="Бажаєте змінити пароль"
    />
  );
};

export default PasswordForm;
