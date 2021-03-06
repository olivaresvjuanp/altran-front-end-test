import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Grow,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Gnome } from './gnomeListSlice';

const useStyles = makeStyles({
  card: {
    width: 240
  },
  button: {
    margin: '0 auto'
  }
});

const Component: React.FunctionComponent<Gnome> = props => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid item>
      <Grow in={true}>
        <Card className={classes.card} elevation={2}>
          <CardActionArea
            onClick={() => {
              history.push('/');
            }}
          >
            <CardMedia
              alt={props.name}
              component='img'
              image={props.thumbnail}
              onDragStart={(event: React.DragEvent<HTMLImageElement>): void => {
                event.preventDefault();
              }}
              title={props.name}
            />
          </CardActionArea>
          <CardContent>
            <Typography align='center'>{props.name}</Typography>
          </CardContent>
          <CardActions>
            <Button
              className={classes.button}
              color='secondary'
              onClick={() => {
                history.push('/');
              }}
            >
              VIEW
            </Button>
          </CardActions>
        </Card>
      </Grow>
    </Grid>
  );
};

export const GnomeListItem = React.memo(Component, (prevProps, nextProps) => {
  return prevProps.name === nextProps.name;
});
