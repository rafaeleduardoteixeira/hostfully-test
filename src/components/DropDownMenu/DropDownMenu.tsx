import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Item } from './DropDownMenu.styles';

export const DropDownMenu = (): JSX.Element => {
  const navigate = useNavigate();

  const handleTrips = () => {
    navigate('/my-trips');
  };

  return (
    <Container>
      <Item onClick={handleTrips}>Trips</Item>
    </Container>
  );
};
