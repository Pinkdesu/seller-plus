import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles((theme) => ({
  cell: {
    '&  span.status-cell': {
      borderRadius: 10,
      padding: theme.spacing(1),
      backgroundColor: 'green',
      color: '#ffffff',
    },
  },
}));

const DataTableRow = (props) => {
  const { columns, row } = props;

  const classes = useStyles();

  return (
    <TableRow hover>
      {columns.map((column) => {
        const columnId = column.id;

        const key = `${row.id}-${columnId}`;
        const value = row[columnId];

        return (
          <TableCell key={key} align={column.align} className={classes.cell}>
            <span className={column.class}>
              {column.format ? column.format(value) : value}
            </span>
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default memo(DataTableRow);
