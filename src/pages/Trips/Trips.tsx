import { useContext, useState } from 'react';
import { AppContext, AppContextType } from '../../Context/App.context';
import { Container, TripsCardContainer, TripsReturn, TripsTitle } from './Trips.styles';
import { PropertyCard } from '../../components/PropertyCard/PropertyCard';
import moment from 'moment';
import { RentedProperties } from '../../interfaces/rentedProperties';
import { Modal } from '../../components/Modal/Modal';
import { TripDetail } from './components/TripDetail/TripDetail';

export const Trips = () => {
  const { getRentedProperties, handleRemoveRentals, handleEditRentals } = useContext(AppContext) as AppContextType;
  const [clickedTrip, setClickedTrip] = useState<RentedProperties | null>(null);

  const handleTripPropertyClick = (rentedProperty: RentedProperties) => {
    setClickedTrip(rentedProperty);
  };

  const handleEditTrip = (rentedProperty: RentedProperties) => {
    handleEditRentals(rentedProperty);
    setClickedTrip(null);
  };

  const handleDeleteTrip = (rentedProperty: RentedProperties) => {
    handleRemoveRentals(rentedProperty.id);
    setClickedTrip(null);
  };

  const handleCancel = () => {
    setClickedTrip(null);
  };

  const handleReturn = () => {
    window.history.back();
  };

  return (
    <Container>
      <TripsReturn src="/icons/returnArrow.svg" onClick={handleReturn} />
      <TripsTitle>Trips</TripsTitle>
      <TripsCardContainer>
        {getRentedProperties().map((rentedProperty) => (
          <PropertyCard
            key={rentedProperty.id}
            card={{
              id: rentedProperty.id,
              title: rentedProperty.name,
              subTitle: rentedProperty.propertyName || '',
              description: `${moment(rentedProperty.checkIn, 'America/Los_Angeles').format('ll')} - ${moment(rentedProperty.checkOut, 'America/Los_Angeles').format('ll')}`,
              images: rentedProperty?.propertyImages || [],
            }}
            onClick={() => handleTripPropertyClick(rentedProperty)}
          />
        ))}
      </TripsCardContainer>
      {clickedTrip && (
        <Modal width="330px">
          <TripDetail
            rentedProperty={clickedTrip}
            handleEditTrip={handleEditTrip}
            handleDeleteTrip={handleDeleteTrip}
            handleCancel={handleCancel}
          />
        </Modal>
      )}
    </Container>
  );
};
