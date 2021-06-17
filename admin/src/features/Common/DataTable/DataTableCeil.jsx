import React, { memo } from 'react';
import TableCell from '@material-ui/core/TableCell';

const DataTable = (props) => {
  const { align, minWidth, label } = props;

  return (
    <TableCell align={align} style={{ minWidth: minWidth }}>
      {label}
    </TableCell>
  );
};

export default memo(DataTable);
