import styled from 'styled-components';
import { colors } from '../../../../themes';

export const PropertyDescriptionContainer = styled.div`
  margin-top: 20px;
`;

export const PropertyDescriptionTitle = styled.h2`
  color: ${colors.hostfullySecondaryColor};
  font-size: 24px;
  font-weight: 700;
`;

export const LineBottom = styled.div`
  border-bottom: 2px solid ${colors.hostfullyPrimaryColor};
  width: 300px;
  margin: 5px 0px 20px 0px;
`;

export const PropertyDescriptionText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.grayDark};
`;
