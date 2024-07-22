import { createBrowserRouter } from 'react-router-dom';
import PropertyList from '../pages/PropertyList';

const createdRoutes = createBrowserRouter([
  {
    path: '/',
    element: <PropertyList />,
  },
]);

export default createdRoutes;
