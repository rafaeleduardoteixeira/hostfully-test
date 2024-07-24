import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext, AppContextType } from '../../Context/App.context';
import {
  Container,
  PropertyImageContainer,
  PropertyImageBanner,
  PropertyNameBanner,
  PropertyImageButtonBanner,
  PropertyImage,
  PropertyImagemContainer,
  PropertyTopContent,
  PropertyReturn,
} from './PropertyDetail.styles';
import { Modal } from '../../components/Modal/Modal';
import { PropertyBookNow } from './components/PropertyBookNow/PropertyBookNow';
import { PropertyMap } from './components/PropertyMap/PropertyMap';
import { PropertyDescription } from './components/PropertyDescription/PropertyDescription';

export const PropertyDetail = () => {
  const { id } = useParams();
  const { getPropertyById } = useContext(AppContext) as AppContextType;
  const property = getPropertyById(id || '');
  const navigate = useNavigate();

  const [showAllImages, setShowAllImages] = useState(false);

  const handleShowAllImages = () => {
    setShowAllImages(true);
  };

  const handleCloseAllImages = () => {
    setShowAllImages(false);
  };

  const handleReturn = () => {
    navigate('/');
  };

  return (
    <Container data-testid="PropertyDetail">
      {property && (
        <>
          <PropertyReturn src="/icons/returnArrow.svg" onClick={handleReturn} />
          <PropertyImageContainer>
            <PropertyImageBanner src={property?.images[0]} onClick={handleShowAllImages} />
            <PropertyNameBanner>{property.name}</PropertyNameBanner>
            <PropertyImageButtonBanner onClick={handleShowAllImages} data-testid="ShowAllImages">
              See all photos
            </PropertyImageButtonBanner>
          </PropertyImageContainer>

          <PropertyTopContent>
            {property.position.longitude && property.position.latitude && <PropertyMap property={property} />}
            <PropertyBookNow property={property} />
          </PropertyTopContent>
          <PropertyDescription property={property} />
        </>
      )}
      {/* Created a modal to show all images from the property. It's a generic modal that can be used in different places. */}
      {showAllImages && (
        <Modal onClose={handleCloseAllImages}>
          <PropertyImagemContainer>
            {property?.images.map((image, index) => <PropertyImage src={image} key={index} />)}
          </PropertyImagemContainer>
        </Modal>
      )}
    </Container>
  );
};
