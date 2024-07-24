import styled from 'styled-components';
import { colors, media } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const HomeBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const TitleBanner = styled.h1`
  position: absolute;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;

  @media ${media.mobile} {
    font-size: 1%.8;
    text-align: center;
  }
`;

export const ImgBanner = styled.div`
  background-image: url('/images/banner.jpeg');
  border-radius: 10px;
  background-size: cover;
  height: 450px;
  width: 100%;

  @media ${media.mobile} {
    border-radius: 10px;
    height: 300px;
    background-image: url('/images/banner-mobile.jpeg');
  }
`;

export const SearchContainer = styled.div`
  position: absolute;
  bottom: -40px;
  width: 50%;
  height: 80px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  @media ${media.tablet} {
    width: 70%;
  }

  @media ${media.mobile} {
    height: 60px;
    width: 90%;
    padding: 0 10px;
    bottom: -30px;
  }
`;

export const SearchButton = styled.button`
  height: 45px;
  width: 45px;
  background-color: ${colors.hostfullyPrimaryColor};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  margin-left: 20px;

  @media ${media.mobile} {
    width: 50px;
    margin-left: 10px;
  }

  &:hover {
    background-color: ${colors.hostfullySecondaryColor};
    transition: 0.3s;
  }
`;

export const SearchIcon = styled.img`
  width: 22px;
  height: 22px;
`;
