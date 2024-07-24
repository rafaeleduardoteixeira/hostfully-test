import React from 'react';
import { RouterProvider } from 'react-router-dom';
import createdRoutes from './constants/router';
import { AppContainer } from './App.styles';
import AppContextProvider from './Context/App.context';

function App() {
  return (
    <AppContainer>
      <AppContextProvider>
        <RouterProvider router={createdRoutes} />
      </AppContextProvider>
    </AppContainer>
  );
}

export default App;
