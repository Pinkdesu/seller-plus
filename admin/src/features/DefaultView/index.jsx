import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from './components/Menu';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
});

const DefaultView = (props) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Menu />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default DefaultView;
