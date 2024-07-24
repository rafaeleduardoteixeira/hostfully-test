//I created a context to manage the properties and rentals state, and I used the propertiesMock to simulate the data that would come from the API. I also created functions to add, remove, and edit rentals, and I used the useCallback hook to memoize the functions and avoid unnecessary re-renders.
//I use useCallback to memoize the functions and avoid unnecessary re-renders of the context provider.

import React, { createContext, useCallback, useState } from 'react';
import { Property } from '../interfaces/property';
import { propertiesMock } from '../constants/mocks/properties';
import { RentedProperties } from '../interfaces/rentedProperties';
import moment from 'moment';

interface IAppContext {
  children: React.ReactNode;
}

export type AppContextType = {
  isLoading: boolean;
  getProperties: (searchTerm?: string) => Property[];
  getPropertyById: (propertyId: string) => Property | undefined;
  getRentedProperties: () => RentedProperties[];
  getPropertyRentedDates: (propertyId: string) => { start: Date | null; end: Date | null }[] | undefined;
  handleAddRentals: (rentedProperty: RentedProperties) => Promise<boolean>;
  handleRemoveRentals: (rentalId: string) => void;
  handleEditRentals: (rentedProperty: RentedProperties) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }: IAppContext) => {
  const [rentedProperties, setRentedProperties] = useState<RentedProperties[]>([
    {
      id: '1',
      propertyId: '43d8045c-62e5-4426-9f28-f1dde15b97c7',
      checkIn: moment('2024-07-24', 'America/Los_Angeles').toDate(),
      checkOut: moment('2024-07-26', 'America/Los_Angeles').toDate(),
      name: 'Rafael Teixeira',
      email: 'rafael@gmail.com',
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Created to emulate an API
  const getProperties = useCallback((searchTerm?: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    if (!!searchTerm) {
      return propertiesMock.filter(
        (property) =>
          property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.city.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    return propertiesMock;
  }, []);

  // Created to emulate an API with id
  const getPropertyById = useCallback(
    (propertyId: string) => {
      return propertiesMock.find((propertiesMock) => propertiesMock.id === propertyId);
    },
    [propertiesMock],
  );

  // Created to emulate an API to get rented properties
  const getRentedProperties = useCallback(() => {
    return rentedProperties.map((rentedProperty) => {
      const property = getPropertyById(rentedProperty.propertyId);
      return {
        ...rentedProperty,
        propertyName: property?.name || '',
        propertyImages: property?.images || [],
      };
    });
  }, [rentedProperties]);

  // Created to emulate an API to get dates of rented properties
  const getPropertyRentedDates = useCallback(
    (propertyId: string) => {
      return (
        rentedProperties
          .filter((rentedProperty) => rentedProperty.propertyId === propertyId)
          .map((rentedProperty) => {
            return {
              start: rentedProperty.checkIn || null,
              end: rentedProperty.checkOut || null,
            };
          }) || undefined
      );
    },
    [rentedProperties],
  );

  // I created a promise only to emulate an API response
  const handleAddRentals = useCallback((rentedProperty: RentedProperties) => {
    setIsLoading(true);
    return new Promise<boolean>((resolve) => {
      setRentedProperties([...rentedProperties, rentedProperty]);
      setTimeout(() => {
        setIsLoading(false);
        resolve(true);
      }, 2000);
    });
  }, []);

  // I created a promise only to emulate an API response
  const handleRemoveRentals = useCallback((rentalId: string) => {
    setRentedProperties((prevRentedProperties) =>
      prevRentedProperties.filter((rentedItemMap) => rentedItemMap.id !== rentalId),
    );
  }, []);

  // I created a promise only to emulate an API response
  const handleEditRentals = useCallback((rentedProperty: RentedProperties) => {
    setRentedProperties((prevRentedProperties) =>
      prevRentedProperties.map((rentedItemMap) =>
        rentedItemMap.id === rentedProperty.id ? rentedProperty : rentedItemMap,
      ),
    );
  }, []);

  const values = {
    isLoading,
    getProperties,
    getPropertyById,
    getRentedProperties,
    getPropertyRentedDates,
    handleAddRentals,
    handleRemoveRentals,
    handleEditRentals,
  };

  return <AppContext.Provider value={{ ...values }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
