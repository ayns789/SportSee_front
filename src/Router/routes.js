import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';

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
  {
    path: '*',
    element: <Error />,
    title: 'error404',
  },
];

export default routes;
