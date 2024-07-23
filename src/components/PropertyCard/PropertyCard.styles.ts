import styled from 'styled-components';
import { colors, media } from '../../themes';

export const PropertyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  height: 310px;
  width: 300px;

  cursor: pointer;
  transition: box-shadow 0.2s cubic-bezier(0.2, 0, 0, 1);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.28);
  }

  @media ${media.tablet} {
    width: 400px;
  }

  @media ${media.mobile} {
    width: 330px;
  }
`;

export const PropertyCardImg = styled.img`
  border-radius: 10px 10px 0 0;
  height: 200px;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

export const PropertyCardData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
`;

export const PropertyLocation = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.grayDark};
`;

export const PropertyName = styled.h3`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${colors.gray};
`;

export const PropertyPrice = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${colors.grayDark};
`;
