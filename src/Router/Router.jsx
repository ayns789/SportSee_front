import { Route, Routes } from 'react-router-dom';
import routes from './routes';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

const Router = () => {
  // const params = useParams();
  // useEffect(() => {
  //   localStorage.setItem('userId', params.id);
  // }, [params.id]);
  const pageRoutes = routes.map(({ path, title, element }) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
