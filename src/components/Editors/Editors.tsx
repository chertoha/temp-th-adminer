import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { toast } from "react-toastify";

import EditorsForm from "./EditorsForm";
import EditorsList from "./EditorsList";
import Paginator from "../UIKit/Paginator";

import { EDITORS_DEFAULT_LIMIT } from "@/config/paginationConfig";
import { useGetEditorsQuery } from "@/redux/editors/editorsApi";
import { DEFAULT_ERROR_NOTIFICATION } from "../Notification/Notification";

const Editors = () => {
  const [page, setPage] = useState(1);
  const onPageClick = (page: number) => setPage(page);

  const { data, error } = useGetEditorsQuery({ page });

  useEffect(() => {
    if (error) {
      console.error("Error fetching editors:", error);
      toast.error(DEFAULT_ERROR_NOTIFICATION);
    }
  }, [error]);

  if (!data) return null;

  const { content, totalElements } = data;

  return (
    <>
      <Stack spacing={20}>
        <EditorsForm />

        <EditorsList editors={content} />
      </Stack>

      <Box sx={{ mt: "40px" }}>
        <Paginator
          currentPage={page}
          onPageClick={onPageClick}
          perPage={EDITORS_DEFAULT_LIMIT}
          totalItems={totalElements}
        />
      </Box>
    </>
  );
};

export default Editors;
