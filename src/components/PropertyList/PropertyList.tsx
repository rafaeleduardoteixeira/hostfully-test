// Created a component called PropertyList that takes in isLoading and properties as props.
// It's the property list container that will display all the properties from props.
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Delimiter, PropertyListTitle, PropertyCardContainer } from './PropertyList.styles';
import { Property } from '../../interfaces/property';
import { PropertyCardSkeleton } from '../PropertyCardSkeleton/PropertyCardSkeleton';
import { PropertyCard } from '../PropertyCard/PropertyCard';

interface PropertyListProps {
  isLoading: boolean;
  properties: Property[] | null;
}

export const PropertyList = ({ isLoading, properties }: PropertyListProps): JSX.Element => {
  // This function is responsible to navigate to the property detail page. I created this in a generic way to use PropertyCard more times.
  const navigate = useNavigate();
  const handleCardClick = (id: string) => {
    navigate(`/property/${id}`);
  };

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
          properties?.map((property) => (
            <PropertyCard
              key={property.id}
              card={{
                id: property.id,
                images: property.images,
                title: `${property.city}, ${property.country}`,
                subTitle: property.name,
                description: `$${property.price.toString()}`,
              }}
              onClick={handleCardClick}
            />
          ))
        )}
      </PropertyCardContainer>
    </Container>
  );
};
