import { FC } from "react";
import { Box, List, ListItem } from "@mui/material";

import NotFound from "../UIKit/NotFound";
import MagazineCard from "./MagazineCard";

import { MagazineType } from "@/types/entities";

import { item } from "./MagazinesList.styled";

interface IMagazinesListProps {
  magazines: MagazineType[];
}

const MagazinesList: FC<IMagazinesListProps> = ({ magazines }) => {
  return (
    <Box>
      {magazines?.length === 0 && (
        <Box mt="44px">
          <NotFound />
        </Box>
      )}

      <List>
        {magazines?.map(magazine => (
          <ListItem key={magazine.id} sx={item}>
            <MagazineCard magazine={magazine} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default MagazinesList;
