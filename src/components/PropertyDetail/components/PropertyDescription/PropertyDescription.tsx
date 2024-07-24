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
    <PropertyDescriptionContainer>
      <PropertyDescriptionTitle>Description</PropertyDescriptionTitle>
      <LineBottom />
      <PropertyDescriptionText>{property.description}</PropertyDescriptionText>
    </PropertyDescriptionContainer>
  );
};
