import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';

const createdRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default createdRoutes;
