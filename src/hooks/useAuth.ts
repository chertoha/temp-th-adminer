import { selectAuth } from "@/redux/auth/selectors";
import { RootState } from "@/redux/store";
import { UserData } from "@/types/entities";
import { useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector<RootState, UserData | null>(selectAuth);

  return { isLoggedIn: !!user, user };
};

export default useAuth;
