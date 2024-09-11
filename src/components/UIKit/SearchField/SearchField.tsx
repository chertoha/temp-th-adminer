import { ChangeEvent, FC } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchFieldProps {
  query: string | null;
  handler: (e: string) => void;
}

const SearchField: FC<SearchFieldProps> = ({ query, handler }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handler(e.target.value);
  };

  return (
    <TextField
      variant="outlined"
      fullWidth
      size="small"
      placeholder="Пошук..."
      value={query}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      // sx={{
      //   "& .MuiOutlinedInput-root": {
      //     "& fieldset": {
      //       borderColor: "#dcdcdc",
      //     },
      //     "&:hover fieldset": {
      //       borderColor: "#aaaaaa",
      //     },
      //     "&.Mui-focused fieldset": {
      //       borderColor: "#000000",
      //     },
      //   },
      // }}
    />
  );
};

export default SearchField;
