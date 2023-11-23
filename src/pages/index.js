import React from 'react';
import MainLayout from '@layout/MainLayout';
import { Outlet } from 'react-router-dom';

const Pages = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

export default Pages;
