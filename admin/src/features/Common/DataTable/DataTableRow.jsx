import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles((theme) => ({
  cell: {
    '&  span.status-cell': {
      borderRadius: 10,
      padding: theme.spacing(1),
      color: '#ffffff',
      fontWeight: 700,
      fontSize: 16,
    },
  },
  'status-cell1': {
    backgroundColor: '#00e676',
  },
  'status-cell2': {
    backgroundColor: '#ffeb3b',
  },
  'status-cell3': {
    backgroundColor: '#ff9800',
  },
  'status-cell4': {
    backgroundColor: '#dd2c00',
  },
  'status-cell5': {
    backgroundColor: '#03a9f4',
  },
  'status-cell6': {
    backgroundColor: '#689f38',
  },
  'status-cell7': {
    backgroundColor: '#ff8f00',
  },
  'status-cell8': {
    backgroundColor: '#e91e63',
  },
  'status-cell9': {
    backgroundColor: '#757575',
  },
  'status-cell10': {
    backgroundColor: '#795548',
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

        const className = column?.class
          ? classes[`status-cell${row.statusId}`]
          : '';

        return (
          <TableCell key={key} align={column?.align} className={classes.cell}>
            <span className={`${column?.class} ${className}`}>
              {column.format ? column.format(value) : value}
            </span>
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default memo(DataTableRow);
