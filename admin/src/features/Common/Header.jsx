import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Header = (props) => {
  const classes = useStyles();

  const { title } = props;

  return (
    <Container className={classes.pageHeaderWrapper}>
      <Typography variant="h1" className={classes.pageHeader}>
        {title}
      </Typography>
    </Container>
  );
};

export default memo(Header);
