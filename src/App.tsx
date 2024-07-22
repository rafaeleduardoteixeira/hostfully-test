import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import createdRoutes from './constants/router';
import { Header } from './components/Header/Header';
import { AppContainer } from './App.styles';

function App() {
  return (
    <AppContainer>
      <Header />
      <RouterProvider router={createdRoutes} />
    </AppContainer>
  );
}

export default App;
