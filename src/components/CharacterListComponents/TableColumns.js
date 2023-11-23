export const TableColumns = (cellinfo) => [
  {
    field: 'id',
    headerName: 'id',
    width: 150,
    maxWidth: 150,
    renderCell: (params) => <div className="id">{params.row.id}</div>,
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 0.3,
    renderCell: (params) => (
      <div className="id">{params.row.name}</div>
    ),
  },
  {
    field: 'race',
    headerName: 'Race',
    flex: 0.3,
    renderCell: (params) => (
      <div className="id">{params.row.race}</div>
    ),
  },
  {
    field: 'gender',
    headerName: 'Gender',
    flex: 0.3,
    renderCell: (params) => (
      <div className="id">{params.row.gender}</div>
    ),
  },
  {
    field: 'actions',
    headerName: 'Actions',
    flex: 0.3,
    renderCell: (params) => (
      <div className="actions">
        <span className="action_handler">{`Actions >>`}</span>
      </div>
    ),
  },
];
