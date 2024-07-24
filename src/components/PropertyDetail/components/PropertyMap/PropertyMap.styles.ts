import styled from 'styled-components';
import { colors, media } from '../../../../themes';

export const PropertyMapContainer = styled.div`
  width: 70%;
  height: 400px;
  background-color: ${colors.black};
  position: relative;

  .MapStyles {
    height: 400px;
    z-index: 1;
  }

  @media ${media.mobile} {
    width: 100%;
  }
`;
