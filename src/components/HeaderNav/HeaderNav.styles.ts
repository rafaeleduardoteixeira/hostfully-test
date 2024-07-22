import styled from 'styled-components';
import { colors, media } from '../../themes';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid ${colors.grayLight};
  border-radius: 30px;
  padding: 0 15px;
  cursor: pointer;
  height: 45px;

  transition: box-shadow 0.2s cubic-bezier(0.2, 0, 0, 1);

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  }

  @media ${media.tablet} {
    padding: 0 25px;
    height: 60px;
  }

  @media ${media.mobile} {
    padding: 0 15px;
    height: 45px;
  }
`;

export const HeaderNavIcon = styled.img`
  width: 18px;
`;

export const HeaderNavAvatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 32px;
  height: 32px;
`;
