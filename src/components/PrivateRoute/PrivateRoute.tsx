import useAuth from "@/hooks/useAuth";

import { ROUTES } from "@/config/routes";
import { ComponentType, FC } from "react";
import { Navigate } from "react-router";
import { toast } from "react-toastify";

interface IPrivateRouteProps {
  component: ComponentType;
  rootOnly?: boolean;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({
  component: Component,
  rootOnly = false,
}) => {
  const { isLoggedIn, user } = useAuth();

  if (rootOnly && !user?.roles.includes("ROOT")) {
    toast.error("Тільки для Root Адміністратора");
    return <Navigate to={ROUTES.ROOT} />;
  }

  return isLoggedIn ? <Component /> : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;
