import { FC } from "react";
import { Box, List, ListItem } from "@mui/material";

import PublicationCard from "./PublicationCard";
import NotFound from "../UIKit/NotFound";

import { PublicationType } from "@/types/entities";

import { item } from "./PublicationsList.styled";
import SendNewsletterButton from "../UIKit/SendNewsletterButton";

interface IPublicationListProps {
  publications: PublicationType[] | undefined;
}

const PublicationList: FC<IPublicationListProps> = ({ publications }) => {
  return (
    <Box>
      {publications?.length === 0 && (
        <Box mt="44px">
          <NotFound />
        </Box>
      )}

      <Box mb="24px">
        <SendNewsletterButton />
      </Box>

      <List>
        {publications?.map(publication => (
          <ListItem key={publication.id} sx={item}>
            <PublicationCard publication={publication} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PublicationList;
