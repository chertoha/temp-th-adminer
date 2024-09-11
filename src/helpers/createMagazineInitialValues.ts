import { MagazineType } from "@/types/entities";

const createMagazineInitialValues = ({
  banner,
  content,
  comment,
  date,
  description,
  gallery,
  title,
}: MagazineType) => ({
  banner,
  content,
  date,
  description,
  gallery,
  title,
  comment: comment || "",
});

export default createMagazineInitialValues;
