import React, { useState } from 'react';
import TableHeader from '@components/TableHeader';
import CharacterTable from '@components/CharacterListComponents/Table';

const CahracterListPage = () => {
  const [filterValue, setFilterValue] = useState({});

  return (
    <>
      <TableHeader
        getFilterValues={(value) => setFilterValue(value)}
      />
      <CharacterTable filter={filterValue} />
    </>
  );
};

export default CahracterListPage;
