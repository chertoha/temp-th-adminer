import { ROUTES } from "@/config/routes";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const auth = true;
  // const auth = false;

  return auth ? <>{children}</> : <Navigate to={ROUTES.LOGIN} replace />;
};

export default AuthProvider;
