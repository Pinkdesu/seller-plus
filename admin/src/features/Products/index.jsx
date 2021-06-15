import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import Container from '@material-ui/core/Container';
//import DataTable from '~/features/Common/DataTable';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    gap: 30,
    height: '100%',
  },
  topSide: {
    padding: 0,
    textAlign: 'right',
  },
}));

const Products = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push('/product');
  };

  return (
    <div className={classes.root}>
      <Container className={classes.topSide} maxWidth={false}>
        <Button onClick={handleClick} variant="contained" color="primary">
          Добавить товар
        </Button>
      </Container>
      {/*<DataTable columns={columns} pagesCount={2} data={rows} />*/}
    </div>
  );
};

export default Products;