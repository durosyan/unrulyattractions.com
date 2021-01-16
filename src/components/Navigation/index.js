import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    backgroundColor: "#212121",
    opacity: "0.5",
    zIndex: theme.zIndex.appBar
  },
  link: { fontFamily: "BigNoodle" },
}));

// TODO: styles for active section
export default function Navigation({ activePage, onNavigation }) {
  const classes = useStyles();
  const variant = "h5";

  const navigate = (e) => onNavigation ? onNavigation(e) : console.error('onNavigation has no callback');

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Button onClick={() => navigate(0)}>
          <Typography variant={variant} className={classes.link}>Home</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={() => navigate(1)}>
          <Typography variant={variant} className={classes.link}>Contract</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={() => navigate(2)}>
          <Typography variant={variant} className={classes.link}>Game</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={() => navigate(3)}>
          <Typography variant={variant} className={classes.link}>Blog</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={() => navigate(4)}>
          <Typography variant={variant} className={classes.link}>Team</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
