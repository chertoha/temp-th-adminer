import { FC } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import EditorsCard from "./EditorsCard";

import { EditorType } from "@/types/entities";
import { theme } from "@/styles/theme";

interface IEditorsListProps {
  editors: EditorType[];
}

const EditorsList: FC<IEditorsListProps> = ({ editors }) => {
  return (
    <Grid container rowSpacing={20} columnSpacing={30}>
      {editors.map(({ name, email, id }) => (
        <Grid key={id} border={`1px solid ${theme.palette.color.lightGray}`}>
          <EditorsCard name={name} email={email} id={id} />
        </Grid>
      ))}
    </Grid>
  );
};
export default EditorsList;
