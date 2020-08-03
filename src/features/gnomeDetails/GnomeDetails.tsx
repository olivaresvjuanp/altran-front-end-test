import React from 'react';
import {
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Gnome } from '../gnomeList/gnomeListSlice';

const useStyles = makeStyles({
});

interface GnomeDetailsProps {
}

export const GnomeDetails: React.FunctionComponent<GnomeDetailsProps> = props => {
  const classes = useStyles();

  return (
    <p>Details</p>
  );
};
