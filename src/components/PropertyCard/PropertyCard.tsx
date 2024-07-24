// Created a component called PropertyCard. It was created in a generic way to be used in different places.
import {
  PropertyCardContainer,
  PropertyCardData,
  PropertyCardImg,
  PropertyLocation,
  PropertyName,
  PropertyPrice,
} from './PropertyCard.styles';

interface PropertyCardProps {
  card: {
    id: string;
    images: string[];
    title: string;
    subTitle: string;
    description: string;
  };
  onClick: (id: string) => void;
}

export const PropertyCard = ({ onClick, card }: PropertyCardProps) => {
  return (
    <PropertyCardContainer key={card.id} onClick={() => onClick(card.id)}>
      <PropertyCardImg src={card.images[0]} alt={card.title} />
      <PropertyCardData>
        <PropertyLocation>{card.title}</PropertyLocation>
        <PropertyName>{card.subTitle}</PropertyName>
        <PropertyPrice>{card.description}</PropertyPrice>
      </PropertyCardData>
    </PropertyCardContainer>
  );
};
