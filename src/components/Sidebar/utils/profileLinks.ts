import { ROUTES } from "@/config/routes";
import { ReactComponent as SettingsIcon } from "@/assets/images/icons/manufacturing.svg";

export const profileLinks = [
  {
    id: 9,
    label: "Налаштування",
    route: ROUTES.SETTINGS,
    Icon: SettingsIcon,
    rootOnly: true,
  },
];
