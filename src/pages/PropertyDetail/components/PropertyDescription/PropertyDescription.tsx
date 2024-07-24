import React from 'react';
import { Property } from '../../../../interfaces/property';
import {
  LineBottom,
  PropertyDescriptionContainer,
  PropertyDescriptionText,
  PropertyDescriptionTitle,
} from './PropertyDescription.styles';

interface PropertyDescriptionProps {
  property: Property;
}

export const PropertyDescription = ({ property }: PropertyDescriptionProps) => {
  return (
    <PropertyDescriptionContainer data-testid="PropertyDescription">
      <PropertyDescriptionTitle>Description</PropertyDescriptionTitle>
      <LineBottom />
      <PropertyDescriptionText>{property.description}</PropertyDescriptionText>
    </PropertyDescriptionContainer>
  );
};
