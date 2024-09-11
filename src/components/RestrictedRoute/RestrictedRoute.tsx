import useAuth from "@/hooks/useAuth";

import { ComponentType, FC } from "react";
import { Navigate } from "react-router";
import { ROUTES } from "@/config/routes";

interface IRestrictedRouteProps {
  component: ComponentType;
}

const RestrictedRoute: FC<IRestrictedRouteProps> = ({
  component: Component,
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={ROUTES.ROOT} /> : <Component />;
};

export default RestrictedRoute;
