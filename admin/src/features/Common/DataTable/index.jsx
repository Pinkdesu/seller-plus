import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import DataTableRow from './DataTableRow';
import DataTableCeil from './DataTableCeil';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  container: {
    height: 550,
  },
}));

const DataTable = (props) => {
  const { columns, onScroll, data } = props;

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container} onScroll={onScroll}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <DataTableCeil key={column.id} {...column} />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <DataTableRow columns={columns} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default memo(DataTable);
