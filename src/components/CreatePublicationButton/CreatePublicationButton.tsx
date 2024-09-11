import { FC } from "react";
import { ROUTES } from "@/config/routes";
import { useCreatePublicationMutation } from "@/redux/publications/publicationsApi";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useCreateMagazineMutation } from "@/redux/magazines/magazinesApi";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

interface ICreatePublicationButtonProps {
  label?: string;
  isMagazine?: boolean;
}

const CreatePublicationButton: FC<ICreatePublicationButtonProps> = ({
  label = "Створити публікацію",
  isMagazine = false,
}) => {
  const [createPublication] = useCreatePublicationMutation();
  const [createMagazine] = useCreateMagazineMutation();

  const navigate = useNavigate();

  const mutation = isMagazine ? createMagazine : createPublication;
  const redirectTo = isMagazine ? ROUTES.MAGAZINES : ROUTES.PUBLICATIONS;

  const onCreate = () => {
    mutation({
      title: `Нова чернетка ${nanoid(6)} [ ${new Date().toISOString()} ]`,
    })
      .unwrap()
      .then(data => {
        navigate(`${redirectTo}/${data.id}`);
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      });
  };

  return (
    <Button size="large" onClick={onCreate}>
      {label}
    </Button>
  );
};

export default CreatePublicationButton;
