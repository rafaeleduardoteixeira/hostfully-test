import styled from 'styled-components';
import { media } from '../../../../themes';

export const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  width: 100%;
`;

export const TripDetailTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;

  text-align: center;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media ${media.mobile} {
    flex-direction: column;
  }
`;

interface TripDetalButtonProps {
  $backgroundColor?: string;
  $backgroundColorHover?: string;
  color?: string;
}

export const TripDetalButton = styled.button<TripDetalButtonProps>`
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'hsl(200, 10%, 90%)'};
  color: ${({ color }) => color || 'hsl(200, 10%, 20%)'};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $backgroundColorHover }) => $backgroundColorHover || 'hsl(200, 10%, 95%)'};
  }
`;
