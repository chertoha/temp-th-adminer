import { ReactComponent as PublicationsIcon } from "@/assets/images/icons/format_image_left.svg";
import { ReactComponent as MagazinesIcon } from "@/assets/images/icons/full_coverage.svg";
import { ReactComponent as AuthorsIcon } from "@/assets/images/icons/person_edit.svg";
import { ReactComponent as EditorsIcon } from "@/assets/images/icons/contract_edit.svg";
import { ReactComponent as UsersIcon } from "@/assets/images/icons/supervisor_account.svg";
import { ReactComponent as SubscribersIcon } from "@/assets/images/icons/mark_email_read.svg";
import { ReactComponent as AboutUsIcon } from "@/assets/images/icons/badge.svg";
import { ReactComponent as ContactsIcon } from "@/assets/images/icons/distance.svg";

import { ROUTES } from "@/config/routes";

export const mainLinks = [
  {
    id: 1,
    label: "Публікації",
    route: ROUTES.PUBLICATIONS,
    Icon: PublicationsIcon,
  },

  {
    id: 2,
    label: "Журнали",
    route: ROUTES.MAGAZINES,
    Icon: MagazinesIcon,
  },

  {
    id: 3,
    label: "Автори",
    route: ROUTES.AUTHORS,
    Icon: AuthorsIcon,
  },

  {
    id: 4,
    label: "Редактори",
    route: ROUTES.EDITORS,
    Icon: EditorsIcon,
    rootOnly: true,
  },

  {
    id: 5,
    label: "Користувачі",
    route: ROUTES.USERS,
    Icon: UsersIcon,
    rootOnly: true,
  },

  {
    id: 6,
    label: "Підписники",
    route: ROUTES.SUBSCRIBERS,
    Icon: SubscribersIcon,
    rootOnly: true,
  },

  {
    id: 7,
    label: "Про нас",
    route: ROUTES.ABOUT,
    Icon: AboutUsIcon,
    rootOnly: true,
  },

  {
    id: 8,
    label: "Контакти",
    route: ROUTES.CONTACTS,
    Icon: ContactsIcon,
    rootOnly: true,
  },
];
