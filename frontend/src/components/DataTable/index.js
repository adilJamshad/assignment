import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Box } from '@material-ui/core';

const DataTable = (props) => {
  let { columns } = props;
  columns = columns.map((col) => ({
    ...col,
    editable: false,
    sortable: false,
  }));
  return (
    <Box width="100%" height="auto">
      <DataGrid
        autoHeight
        rowsPerPageOptions={[]}
        disableColumnSelector
        disableColumnFilter
        disableColumnMenu
        disableSelectionOnClick
        style={{
          border: 'none',
        }}
        {...props}
        columns={columns}
      />
    </Box>
  );
};

export default DataTable;
