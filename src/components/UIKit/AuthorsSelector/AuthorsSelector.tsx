import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import useAuthors from "@/hooks/useAuthors";
import styles from "./AuthorsSelector.styled";

import { IoPersonSharp } from "react-icons/io5";
import { createImagePreviewApiUrl } from "@/helpers/createImageApiUrl";
import { useField } from "formik";

const AuthorSelector = () => {
  const { authors } = useAuthors();

  const [{ value: authorId }, _, { setValue }] = useField<
    number | undefined | null
  >("authorId");

  const value = authors.find(({ id }) => id === authorId);

  return (
    <Autocomplete
      value={value || null}
      size="medium"
      // multiple
      sx={styles.autocomplete}
      onChange={(_e, val) => setValue(val?.id)}
      disablePortal
      options={authors}
      getOptionLabel={option => option.name}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props as { key: string };

        return (
          <Box key={option.id} component="li" sx={styles.item} {...optionProps}>
            <Avatar
              sx={styles.avatar}
              variant="rounded"
              src={createImagePreviewApiUrl(option.avatar)}
            >
              <IoPersonSharp />
            </Avatar>
            {option.name}
          </Box>
        );
      }}
      renderInput={params => <TextField {...params} />}
    />
  );
};

export default AuthorSelector;
