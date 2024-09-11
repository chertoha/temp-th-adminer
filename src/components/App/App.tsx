import router from "@/config/router";
import useAuth from "@/hooks/useAuth";
import NotSupported from "../UIKit/NotSupported";

import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useWindowSize } from "@/hooks/useWindowSize";
import { logoutUser, updateUser } from "@/redux/auth/slice";
import { useLazyRefreshUserQuery } from "@/redux/auth/authApi";
import { useDispatch } from "react-redux";

const App = () => {
  const [refreshUser] = useLazyRefreshUserQuery();
  const dispatch = useDispatch();
  const { isLaptop } = useWindowSize();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) return;

    refreshUser()
      .unwrap()
      .then(user => {
        if (!user.roles.includes("ADMIN")) {
          dispatch(logoutUser());
          throw new Error("Only for ADMIN role");
        }

        dispatch(updateUser(user));
      });
  }, [isLoggedIn, refreshUser, dispatch]);

  return isLaptop ? <RouterProvider router={router} /> : <NotSupported />;
};

export default App;
