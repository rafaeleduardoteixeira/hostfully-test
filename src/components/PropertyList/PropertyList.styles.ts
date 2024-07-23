import styled from 'styled-components';
import { colors, media } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 70px 0;
`;

export const PropertyListTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 400;
  color: ${colors.black};

  @media ${media.mobile} {
    font-size: 2rem;
  }
`;

export const Delimiter = styled.div`
  margin: 20px auto;
  background-position: center;
  background-image: url('/images/delimiter.png');
  height: 70px;
  width: 500px;

  @media ${media.mobile} {
    width: 100%;
    height: 50px;
  }
`;

export const PropertyCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;

  @media ${media.notebook} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${media.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;
