import { PublicationType } from "@/types/entities";
import { PublicationFormValues } from "@/types/forms";
import { OutputData } from "@editorjs/editorjs";

const createPublicationInitialValues = ({
  title,
  banner,
  content,
  author,
  sections,
  gallery,
  description,
  shortDescription,
  quote,
  person,
  date,
  comment,
}: PublicationType): PublicationFormValues => {
  let convertedContent: OutputData;
  try {
    convertedContent = JSON.parse(content);
  } catch (_err) {
    convertedContent = { blocks: [] };
  }

  return {
    title,
    banner,
    content: convertedContent,
    authorId: author?.id,
    sections,
    gallery,
    description,
    shortDescription,
    quote,
    person,
    date,
    comment: comment || "",
  };
};

export default createPublicationInitialValues;
