import React from 'react';
import CahracterListPage from './CharacterList';
import CahracterDetails from './CahracterDetails';
import ErrorPage from './404';

const pagesData = [
  {
    path: '',
    element: <CahracterListPage />,
    title: 'Lord OF Rings | CharacterList',
  },
  {
    path: '/details',
    element: <CahracterDetails />,
    title: 'Lord OF Rings | CharacterList',
  },

  {
    path: '*',
    element: <ErrorPage />,
    title: 'Lord OF Rings | 404',
    restrcited: false,
  },
];

export default pagesData;
