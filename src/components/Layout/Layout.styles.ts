import styled from 'styled-components';
import { media } from '../../themes';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  width: 100%;
`;

export const Logo = styled.img`
  width: 180px;
  height: auto;
  cursor: pointer;

  @media ${media.tablet} {
    width: 220px;
  }

  @media ${media.mobile} {
    width: 150px;
  }
`;
