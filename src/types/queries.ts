import { PublicationStatusType } from "./entities";
import { PublicationFormValues } from "./forms";

export type UpdatePublicationQuery = Omit<PublicationFormValues, "content"> & {
  content: string;
};

export type UpdateStatusQuery = {
  id: string | number;
  status: PublicationStatusType;
};

export type OrderDirection = "UP" | "DOWN";
