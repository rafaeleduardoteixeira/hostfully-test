import React, { useContext, useState } from 'react';
import { Property } from '../../../../interfaces/property';
import {
  PropertyBookNowButton,
  PropertyBookNowContainer,
  PropertyBookNowPrice,
  PropertyBookNowFields,
  PropertyBookNowSuccessContainer,
  PropertyBookNowSuccessMessage,
  PropertyBookNowSuccessButton,
} from './PropertyBookNow.styles';
import { Input } from '../../../../components/Input/Input';
import { AppContext, AppContextType } from '../../../../Context/App.context';
import { Skeleton } from '../../../../components/Skeleton/Skeleton';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { InputDateRange } from '../../../../components/InputDateRange/InputDateRange';
import moment from 'moment';

interface PropertyBookNowProps {
  property: Property;
}

type FormDataType = {
  name: string;
  email: string;
  checkIn: Date | null;
  checkOut: Date | null;
};

export const PropertyBookNow = ({ property }: PropertyBookNowProps) => {
  const navigate = useNavigate();
  const { isLoading, handleAddRentals, getPropertyRentedDates } = useContext(AppContext) as AppContextType;
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const rentedDates = getPropertyRentedDates(property.id);

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    checkIn: null,
    checkOut: null,
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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

  const handleChangeDate = (value: Date[]) => {
    if (handleCheckRentedDates(value[0], value[1])) {
      setFormData({
        ...formData,
        checkIn: null,
        checkOut: null,
      });
      return;
    }
    if (value) {
      setFormData({
        ...formData,
        checkIn: value[0],
        checkOut: value[1],
      });
      return;
    }
    setFormData({
      ...formData,
      checkIn: null,
      checkOut: null,
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.checkIn || !formData.checkOut) {
      setFormErrors({
        ...formErrors,
        name: !formData.name ? 'Name is required' : '',
        email: !formData.email ? 'Email is required' : '',
        checkIn: !formData.checkIn ? 'Invalid date' : '',
        checkOut: !formData.checkOut ? 'Invalid date' : '',
      });
      return false;
    }
    return true;
  };

  const handleAddRental = async () => {
    if (!validateForm()) return;
    setIsSuccess(
      await handleAddRentals({
        ...formData,
        id: uuidv4(),
        propertyId: property.id,
      }),
    );
  };

  const handleSeeMyTrips = () => {
    navigate('/my-trips');
  };

  return (
    <PropertyBookNowContainer data-testid="PropertyBookNow">
      <PropertyBookNowPrice>${property.price}</PropertyBookNowPrice>
      <PropertyBookNowFields>
        {isLoading ? (
          <>
            <Skeleton width="300px" height="50px" padding="0 10px 0 20px" />
            <Skeleton width="300px" height="50px" padding="0 10px 0 20px" />
            <Skeleton width="300px" height="50px" padding="0 10px 0 20px" />
          </>
        ) : isSuccess ? (
          <PropertyBookNowSuccessContainer>
            <PropertyBookNowSuccessMessage>Rental added successfully!</PropertyBookNowSuccessMessage>
            <PropertyBookNowSuccessButton onClick={handleSeeMyTrips}>See my trips!</PropertyBookNowSuccessButton>
          </PropertyBookNowSuccessContainer>
        ) : (
          <>
            <Input
              name="name"
              placeholder="Name"
              type="text"
              onChange={handleChange}
              width="300px"
              error={formErrors.name}
            />
            <Input
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
              width="300px"
              error={formErrors.email}
            />
            <InputDateRange
              bookedDates={rentedDates}
              dateStart={formData.checkIn ? moment(formData.checkIn, 'America/Los Angeles').toDate() : undefined}
              dateEnd={formData.checkOut ? moment(formData.checkOut, 'America/Los Angeles').toDate() : undefined}
              onChange={handleChangeDate}
              error={formErrors.checkIn || formErrors.checkOut}
            />
          </>
        )}
      </PropertyBookNowFields>
      <PropertyBookNowButton onClick={handleAddRental} disabled={isSuccess || isLoading}>
        Book now
      </PropertyBookNowButton>
    </PropertyBookNowContainer>
  );
};
