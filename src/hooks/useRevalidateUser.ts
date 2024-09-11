import { DEFAULT_ERROR_NOTIFICATION } from "@/components/Notification/Notification";
import { useLazyRefreshUserQuery } from "@/redux/auth/authApi";
import { logoutUser, updateUser } from "@/redux/auth/slice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const useRevalidateUser = () => {
  const [refreshUser] = useLazyRefreshUserQuery();
  const dispatch = useDispatch();

  const revalidateUser = () => {
    refreshUser()
      .unwrap()
      .then(user => {
        if (!user.roles.includes("ADMIN")) {
          dispatch(logoutUser());
          throw new Error("Only for ADMIN role");
        }

        dispatch(updateUser(user));
      })
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };

  return revalidateUser;
};

export default useRevalidateUser;
