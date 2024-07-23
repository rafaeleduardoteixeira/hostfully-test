import styled from 'styled-components';
import { media } from '../../themes';

export const Container = styled.div`
  width: 300px;
  height: 330px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;

  @media ${media.tablet} {
    width: 400px;
  }

  @media ${media.mobile} {
    width: 330px;
  }
`;

export const PropertyCardImgSkeleton = styled.div`
  height: 200px;
  width: 100%;
`;

export const PropertyCardDataSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px 20px;
  height: 100px;
`;
