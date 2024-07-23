// Created a component called PropertyCard that takes in property as a prop.

import { Property } from '../../interfaces/property';
import {
  PropertyCardContainer,
  PropertyCardData,
  PropertyCardImg,
  PropertyLocation,
  PropertyName,
  PropertyPrice,
} from './PropertyCard.styles';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => (
  <PropertyCardContainer key={property.id}>
    <PropertyCardImg src={property.images[0]} alt={property.name} />
    <PropertyCardData>
      <PropertyLocation>
        {property.city}, {property.country}
      </PropertyLocation>
      <PropertyName>{property.name}</PropertyName>
      <PropertyPrice>${property.price}</PropertyPrice>
    </PropertyCardData>
  </PropertyCardContainer>
);
