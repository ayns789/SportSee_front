import Profil from '../../pages/profil';
import Error from '../../pages/error';

const routes = [
  {
    path: '/',
    element: <Profil />,
    title: 'profil',
  },
  {
    path: '/user/:id',
    element: <Profil />,
    title: 'profil',
  },
  //   {
  //     path: '/user/:id/activity',
  //     element: <Profil />,
  //     title: 'profil/activites',
  //   },
  //   {
  //     path: '/user/:id/average-sessions',
  //     element: <Profil />,
  //     title: 'profil/sessions-moyennes',
  //   },
  //   {
  //     path: '/user/:id/performance',
  //     element: <Profil />,
  //     title: 'profil/performances',
  //   },
  {
    path: '*',
    element: <Error />,
    title: 'error404',
  },
];

export default routes;
