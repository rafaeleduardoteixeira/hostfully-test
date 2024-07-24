import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const TripsTitle = styled.h1`
  font-size: 2rem;
  margin: 20px 0;
`;

export const TripsCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const TripsReturn = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
  z-index: 2;
`;
