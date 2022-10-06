import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { DragEvent, useContext } from 'react';
import { UIContext } from '../../context/ui';
import { Entry } from '../../interfaces';
import { dateFunctions } from '../../utils';

interface Props {
  entry: Entry;
}
export const EntryCard: React.FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);

  const router = useRouter();

  const onDragStart = (e: DragEvent) => {
    // console.log(e);
    e.dataTransfer.setData('text', entry._id);

    startDragging(); // Notify State to indicate that I am doing drag
  };

  const onDragEnd = () => {
    endDragging();
  };

  const onClick = () => {
    router.push(`/entries/${entry._id}`)
  };

  return (
    <Card
      onClick={onClick}
      sx={{ marginBottom: 1 }}
      // drag events
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'>{dateFunctions.getFormatDistanceToNow(entry.createdAt)}</Typography>
          {/* <Typography variant='body2'>30min ago</Typography> */}
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
