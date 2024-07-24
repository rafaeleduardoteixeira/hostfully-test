import { ChangeEvent, useContext, useState } from 'react';
import { Input } from '../../../../components/Input/Input';
import { RentedProperties } from '../../../../interfaces/rentedProperties';
import { colors } from '../../../../themes';
import { Container, TripDetailTitle, DataContainer, ButtonContainer, TripDetalButton } from './TripDetail.styles';
import { InputDateRange } from '../../../../components/InputDateRange/InputDateRange';
import moment from 'moment';
import { AppContext, AppContextType } from '../../../../Context/App.context';
import { set } from 'react-datepicker/dist/date_utils';

interface TripDetailProps {
  rentedProperty: RentedProperties;
  handleEditTrip: (rentedProperty: RentedProperties) => void;
  handleDeleteTrip: (rentedProperty: RentedProperties) => void;
  handleCancel: () => void;
}

export const TripDetail = ({ handleEditTrip, handleDeleteTrip, handleCancel, rentedProperty }: TripDetailProps) => {
  const [checkIn, setCheckIn] = useState(rentedProperty.checkIn);
  const [checkOut, setCheckOut] = useState(rentedProperty.checkOut);
  const [error, setError] = useState<string>('');

  const { getPropertyRentedDates } = useContext(AppContext) as AppContextType;
  const rentedDates = getPropertyRentedDates(rentedProperty.propertyId);

  const handleCheckRentedDates = (checkIn: Date, checkOut: Date) => {
    // Create to prevent that user select a date that is already rented. For instance if the user select 23/07/2024 to 27/07/2024 and the property is already rented from 24/07/2024 to 26/07/2024, the user can't select this date. I set the checkIn date the value of checkOut date.
    if (checkIn && checkOut) {
      return rentedDates?.some((date) => {
        if (date.start && date.end) {
          if (
            (checkIn >= date.start && checkIn <= date.end) ||
            (checkOut >= date.start && checkOut <= date.end) ||
            (checkIn <= date.start && checkOut >= date.end)
          )
            return true;
        }
        return false;
      });
    }
    return false;
  };

  const handleChange = (value: Date[] | null) => {
    if (value) {
      if (handleCheckRentedDates(value[0], value[1])) {
        setCheckIn(null);
        setCheckOut(null);
        return;
      }
      setCheckIn(value[0]);
      setCheckOut(value[1]);
      return;
    }
    setCheckIn(null);
    setCheckOut(null);
  };

  const validateDates = () => {
    if (!checkIn || !checkOut) {
      setError('Invalid date');
      return true;
    }
    setError('');
    return false;
  };

  const handleEdit = (rentedProperty: RentedProperties) => {
    if (validateDates()) return;

    handleEditTrip({
      ...rentedProperty,
      checkIn,
      checkOut,
    });
  };

  return (
    <Container>
      <TripDetailTitle>Trip Detail</TripDetailTitle>
      <Input label="Name" value={rentedProperty.name} disabled={true} />
      <Input label="Property" value={rentedProperty.propertyName} disabled={true} />
      <DataContainer>
        <InputDateRange
          bookedDates={rentedDates}
          dateStart={checkIn ? moment(checkIn, 'America/Los_Angeles').toDate() : undefined}
          dateEnd={checkOut ? moment(checkOut, 'America/Los_Angeles').toDate() : undefined}
          error={error}
          onChange={handleChange}
        />
      </DataContainer>
      <ButtonContainer>
        <TripDetalButton
          onClick={() => handleEdit(rentedProperty)}
          $backgroundColor={colors.hostfullyPrimaryColor}
          $backgroundColorHover={colors.hostfullyPrimaryColorHover}
          color="white"
        >
          Edit
        </TripDetalButton>
      </ButtonContainer>
      <ButtonContainer>
        <TripDetalButton
          onClick={() => handleDeleteTrip(rentedProperty)}
          $backgroundColor={colors.red}
          $backgroundColorHover={colors.redDarker}
          color="white"
        >
          Delete
        </TripDetalButton>
        <TripDetalButton onClick={handleCancel}>Cancel</TripDetalButton>
      </ButtonContainer>
    </Container>
  );
};
