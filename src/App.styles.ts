import styled from 'styled-components';
import { media } from './themes';

export const AppContainer = styled.main`
  margin: 0 auto;
  max-width: 1300px;

  @media ${media.notebook} {
    max-width: 1100px;
  }

  @media ${media.tablet} {
    max-width: 950px;
  }

  @media ${media.miniTablet} {
    max-width: 700px;
  }

  @media ${media.mobile} {
    max-width: 330px;
  }
`;
