import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import createdRoutes from './constants/router';

function App() {
  return (
    <>
      <RouterProvider router={createdRoutes} />
    </>
  );
}

export default App;
