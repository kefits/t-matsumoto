import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type {paperType} from '../../types/PaperType'

type Props = {
  paperData: Array<paperType>,
};

const card = ({title, authors, year, publisher, url}: paperType) => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" sx={{ fontSize: 20 }} gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 18 }}>Authors: {authors.map((author) => author + ", ")}</Typography>
        <Typography sx={{ fontSize: 18 }}>Year: {year}</Typography>
        <Typography sx={{ fontSize: 18 }}>Publisher: {publisher}</Typography>
      </CardContent>
      <CardActions>
        <Button href={url} size="small">Download</Button>
      </CardActions>
    </React.Fragment>
  );
}

export default function PaperCard({ paperData }: Props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      {
        paperData.map((data: paperType) => {
          return (
            <Card key="paper" variant="outlined">{card(data)}</Card>
          );
        })
      }
    </Box>
  );
}