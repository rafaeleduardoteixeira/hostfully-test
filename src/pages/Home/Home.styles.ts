import styled from 'styled-components';
import { media } from '../../themes';

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
  bottom: -30px;
  width: 50%;
  height: 60px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  @media ${media.mobile} {
    width: 90%;
  }
`;
