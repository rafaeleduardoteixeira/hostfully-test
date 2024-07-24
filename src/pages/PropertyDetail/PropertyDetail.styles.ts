import styled from 'styled-components';
import { colors, media } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-bottom: 20%;
`;

export const PropertyImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${colors.black};
  position: relative;

  @media ${media.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const PropertyImageBanner = styled.img`
  opacity: 0.8;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

export const PropertyNameBanner = styled.h1`
  display: flex;
  color: white;
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  bottom: 20px;
  position: absolute;
  padding: 0 20px;

  @media ${media.mobile} {
    z-index: 2;
    position: unset;
  }
`;

export const PropertyImageButtonBanner = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.black};

  @media ${media.mobile} {
    z-index: 2;
    align-self: center;
    position: unset;
  }
`;

export const PropertyImagemContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-y: scroll;

  @media ${media.mobile} {
    flex-direction: column;
  }
`;

export const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const PropertyTopContent = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media ${media.mobile} {
    flex-direction: column-reverse;
  }
`;

export const PropertyReturn = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
  z-index: 2;
`;
