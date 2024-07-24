import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { PropertyDetail } from '../components/PropertyDetail/PropertyDetail';
import { Home } from '../pages/Home/Home';
import { Trips } from '../pages/Trips/Trips';

const createdRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/property/:id',
        element: <PropertyDetail />,
      },
      {
        path: '/my-trips',
        element: <Trips />,
      },
    ],
  },
]);

export default createdRoutes;
