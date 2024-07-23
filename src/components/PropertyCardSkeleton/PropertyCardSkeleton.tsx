import React from 'react';
import { Container, PropertyCardDataSkeleton, PropertyCardImgSkeleton } from './PropertyCardSkeleton.styles';
import { Skeleton } from '../Skeleton/Skeleton';

export const PropertyCardSkeleton = () => {
  return (
    <Container>
      <PropertyCardImgSkeleton>
        <Skeleton />
      </PropertyCardImgSkeleton>
      <PropertyCardDataSkeleton>
        <Skeleton />
        <Skeleton width="80%" />
        <Skeleton width="40%" />
      </PropertyCardDataSkeleton>
    </Container>
  );
};
