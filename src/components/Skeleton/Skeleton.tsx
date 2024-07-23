import React from 'react';
import { Container } from './Skeleton.styles';

interface SkeletonProps {
  width?: string;
}

export const Skeleton = (props: SkeletonProps) => {
  return <Container {...props} />;
};
