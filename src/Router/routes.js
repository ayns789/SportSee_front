import Dashboard from '../pages/Dashboard';
// import Error from '../../pages/error';

const routes = [
  {
    path: '/',
    element: <Dashboard />,
    title: 'profil',
  },
  {
    path: '/user/:id',
    element: <Dashboard />,
    title: 'profil',
  },
  // {
  //   path: '/user/:id/activity',
  //   element: <Dashboard />,
  //   title: 'profil/activites',
  // },
  // {
  //   path: '/user/:id/average-sessions',
  //   element: <Dashboard />,
  //   title: 'profil/sessions-moyennes',
  // },
  // {
  //   path: '/user/:id/performance',
  //   element: <Dashboard />,
  //   title: 'profil/performances',
  // },
  // {
  //   path: '*',
  //   element: <Error />,
  //   title: 'error404',
  // },
];

export default routes;
