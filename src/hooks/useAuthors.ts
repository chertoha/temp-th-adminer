import { DEFAULT_ERROR_NOTIFICATION } from "@/components/Notification/Notification";
import { useLazyGetAuthorsQuery } from "@/redux/authors/authorsApi";
import { PublicationAuthorType } from "@/types/entities";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useAuthors = () => {
  const [authors, setAuthors] = useState<PublicationAuthorType[]>([]);
  const [getAuthors] = useLazyGetAuthorsQuery();

  useEffect(() => {
    const getAllAuthors = async () => {
      try {
        const { totalElements } = await getAuthors({}).unwrap();

        const { content: authors } = await getAuthors({
          size: totalElements,
        }).unwrap();

        setAuthors(authors);
      } catch (err) {
        console.log(err);
        toast.error(DEFAULT_ERROR_NOTIFICATION);
      }
    };

    getAllAuthors();
  }, [getAuthors]);

  return { authors };
};

export default useAuthors;
