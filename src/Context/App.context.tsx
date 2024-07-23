//I created a context to manage the properties and rentals state, and I used the propertiesMock to simulate the data that would come from the API. I also created functions to add, remove, and edit rentals, and I used the useCallback hook to memoize the functions and avoid unnecessary re-renders.
//I use useCallback to memoize the functions and avoid unnecessary re-renders of the context provider.

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Property } from '../interfaces/property';
import { propertiesMock } from '../constants/mocks/properties';

interface IAppContext {
  children: React.ReactNode;
}

export type AppContextType = {
  isLoading: boolean;
  getProperties: () => Property[];
  handleAddRentals: (propertyId: string, rentals: Property['rentals']) => void;
  handleRemoveRentals: (propertyId: string) => void;
  handleEditRentals: (propertyId: string, rentals: Property['rentals']) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }: IAppContext) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      // Only to emulate a delay in the API response
      setIsLoading(false);
    }, 2000);
    setProperties(propertiesMock);
    return () => clearTimeout(timeOut);
  }, []);

  const getProperties = useCallback(() => {
    return properties;
  }, [properties]);

  const handleAddRentals = useCallback((propertyId: string, rentals: Property['rentals']) => {
    setProperties((prevProperties) =>
      prevProperties.map((property) => {
        if (property.id === propertyId) {
          return { ...property, rentals };
        }
        return property;
      }),
    );
  }, []);

  const handleRemoveRentals = useCallback((propertyId: string) => {
    setProperties((prevProperties) =>
      prevProperties.map((property) => {
        if (property.id === propertyId) {
          return { ...property, rentals: [] };
        }
        return property;
      }),
    );
  }, []);

  const handleEditRentals = useCallback((propertyId: string, rentals: Property['rentals']) => {
    setProperties((prevProperties) =>
      prevProperties.map((property) => {
        if (property.id === propertyId) {
          return { ...property, rentals };
        }
        return property;
      }),
    );
  }, []);

  const values = {
    isLoading,
    getProperties,
    handleAddRentals,
    handleRemoveRentals,
    handleEditRentals,
  };

  return <AppContext.Provider value={{ ...values }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
