import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DEFAULT_ERROR_NOTIFICATION = "Вибачте, щось пішло не так";

const Notification = () => (
  <ToastContainer
    position="top-right"
    autoClose={5000}
    closeOnClick
    theme="colored"
    hideProgressBar
    limit={1}
  />
);

export default Notification;
