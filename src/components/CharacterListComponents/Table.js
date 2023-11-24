import React, { useEffect, useState, useCallback, useMemo, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';

import { getCaharacter, getCaharacterById } from '@slices/character';
import Alert from './Alert';
import { LoadData } from '../../utils';
import { TableContainer } from './StyledComponents';

const CharacterTable = ({ filter }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);

  const data = useSelector((state) => state.character.data);
  const PageSizeOptions = useMemo(() => [10, 20, 50], []);

  const memoizedCharacterData = useMemo(() => data.map(({ _id, ...rest }) => ({ id: _id, ...rest })), [data]);

  const error = useSelector((state) => state.character.error);

  const handlePagination = useCallback((params) => {
    if (offset < tottalCount && page < params.page) {
      dispatch(getCaharacter({ data, offset, count: Math.max(...PageSizeOptions), page: params.page, filter }));
    }

    setPaginationModel({
      page: params.page,
      pageSize: params.pageSize,
    });
  }, [dispatch, data, offset, tottalCount, page, filter, PageSizeOptions]);

  const handleClose = useCallback((reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    dispatch(getCaharacter({ data, offset: 0, count: Math.max(...PageSizeOptions), page: paginationModel.page, filter }));
  }, [dispatch, data, PageSizeOptions, paginationModel.page, filter]);

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  useEffect(() => {
    const updateData = memoizedCharacterData.map(({ _id, ...rest }) => ({ id: _id, ...rest }));
    setTableData(updateData);
  }, [memoizedCharacterData]);

  useEffect(() => {
    (async () => {
      const newRows = await LoadData(paginationModel.page, paginationModel.pageSize, tableData);
      setRows(newRows);
    })();
  }, [paginationModel.page, paginationModel.pageSize, tableData]);

  const getDetails = useCallback(async (id) => {
    await dispatch(getCaharacterById({ id }));
    navigate('/details');
  }, [dispatch, navigate]);

  const TableColumns = useMemo(() => [
    {
      field: 'id',
      headerName: 'Id',
      flex: 0.2,
      sortable: false,
      renderCell: (params) => (
        <div className="id">{params.row.id}</div>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 0.2,
      sortable: false,
      renderCell: (params) => (
        <div className="id">{params.row.name}</div>
      ),
    },
    {
      field: 'race',
      headerName: 'Race',
      flex: 0.2,
      sortable: false,
      renderCell: (params) => (
        <div className="id">{params.row.race}</div>
      ),
    },
    {
      field: 'gender',
      headerName: 'Gender',
      flex: 0.2,
      sortable: false,
      renderCell: (params) => (
        <div className="id">{params.row.gender}</div>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 0.2,
      sortable: false,
      renderCell: (params) => (
        <div className="actions">
          <span
            className="action_handler"
            onClick={() => getDetails(params.row.id)}
          >{`Details >>`}</span>
        </div>
      ),
    },
  ], []);

  return (
    <>
      <TableContainer>
        <DataGrid
          {...tableData}
          rows={rows}
          pagination
          disableRowSelectionOnClick
          autoHeight
          sortingMode="server"
          paginationMode="server"
          pageSizeOptions={PageSizeOptions}
          rowCount={tottalCount}
          paginationModel={paginationModel}
          onPaginationModelChange={handlePagination}
          columns={TableColumns}
          disableColumnMenu
          slotProps={{
            pagination: { labelRowsPerPage: 'Limit' },
          }}
        />
      </TableContainer>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Something went wrong!
        </Alert>
      </Snackbar>
    </>
  );
};

export default memo(CharacterTable);
