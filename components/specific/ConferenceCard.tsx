import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ConferenceType } from "../../types/ConferenceType";

type Props = {
  conferenceData: Array<ConferenceType>;
};

const card = ({ title, year, conference, url }: ConferenceType) => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" sx={{ fontSize: 20 }} gutterBottom>
          {title}
        </Typography>
        {/* <Typography sx={{ fontSize: 18 }}>
          Authors: {authors.map((author) => author + ", ")}
        </Typography> */}
        <Typography sx={{ fontSize: 18 }}>Year: {year}</Typography>
        <Typography sx={{ fontSize: 18 }}>Conference: {conference}</Typography>
      </CardContent>
      <CardActions>
        <Button href={url} size="small">
          Download
        </Button>
      </CardActions>
    </React.Fragment>
  );
};

export default function PaperCard({ conferenceData }: Props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      {conferenceData.map((data: ConferenceType) => {
        return <Card key="conference" variant="outlined">{card(data)}</Card>;
      })}
    </Box>
  );
}
