import { ROUTES } from "@/config/routes";
import { useLogoutMutation } from "@/redux/auth/authApi";
import { logoutUser } from "@/redux/auth/slice";
import { AppDispatch } from "@/redux/store";
import { styled } from "@mui/material";
import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const StyledButton = styled("button")(() => ({
  display: "block",
  width: "100%",
  backgroundColor: "transparent",
  border: "none",
}));

interface ILogoutButtonProps {
  children: ReactNode;
}

const LogoutButton: FC<ILogoutButtonProps> = ({ children }) => {
  const [logOut] = useLogoutMutation();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handler = () => {
    logOut()
      .unwrap()
      .then(() => {
        dispatch(logoutUser());
        navigate(ROUTES.LOGIN);
      });
  };

  return (
    <StyledButton type="button" onClick={handler}>
      {children}
    </StyledButton>
  );
};

export default LogoutButton;
