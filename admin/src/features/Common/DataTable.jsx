import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ROWS_PER_PAGE } from './constants';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  container: {
    height: 550,
  },
  cell: {
    '&  span.status-cell': {
      borderRadius: 10,
      padding: theme.spacing(1),
      backgroundColor: 'green',
      color: '#ffffff',
    },
  },
}));

const DataTable = (props) => {
  const { columns, pagesCount, data } = props;

  const classes = useStyles();

  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow hover key={row.id}>
                {columns.map((column) => {
                  const columnId = column.id;

                  const key = `${row.id}-${columnId}`;
                  const value = row[columnId];

                  return (
                    <TableCell
                      key={key}
                      align={column.align}
                      className={classes.cell}
                    >
                      <span className={column.class}>
                        {column.format ? column.format(value) : value}
                      </span>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={pagesCount}
        rowsPerPage={ROWS_PER_PAGE}
        rowsPerPageOptions={[ROWS_PER_PAGE]}
        page={page}
        onChangePage={handleChangePage}
      />
    </Paper>
  );
};

export default DataTable;
