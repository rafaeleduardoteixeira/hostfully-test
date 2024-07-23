// Created a component called PropertyList that takes in isLoading and properties as props.
// It's the property list container that will display all the properties from props.

import { useEffect, useState } from 'react';
import { Container, Delimiter, PropertyListTitle, PropertyCardContainer } from './PropertyList.styles';
import { Property } from '../../interfaces/property';
import { PropertyCardSkeleton } from '../PropertyCardSkeleton/PropertyCardSkeleton';
import { PropertyCard } from '../PropertyCard/PropertyCard';

interface PropertyListProps {
  isLoading: boolean;
  properties: Property[] | null;
}

export const PropertyList = ({ isLoading, properties }: PropertyListProps): JSX.Element => {
  return (
    <Container>
      <PropertyListTitle>Properties For Rent</PropertyListTitle>
      <Delimiter />
      <PropertyCardContainer>
        {isLoading ? (
          <>
            <PropertyCardSkeleton />
            <PropertyCardSkeleton />
            <PropertyCardSkeleton />
            <PropertyCardSkeleton />
          </>
        ) : (
          properties?.map((property) => <PropertyCard key={property.id} property={property} />)
        )}
      </PropertyCardContainer>
    </Container>
  );
};
