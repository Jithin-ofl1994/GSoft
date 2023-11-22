import React from 'react';
import { Route, Routes } from 'react-router-dom';
import pagesData from '@pages/PagesRoute';
import Pages from '@pages';

function Router() {
  const routes = pagesData.map(({ path, title, element }) => (
    <Route key={title} path={`/${path}`} element={element} />
  ));

  return (
    <Routes>
      <Route path="/" element={<Pages />}>
        {routes}
      </Route>
    </Routes>
  );
}

export default Router;
