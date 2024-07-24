import React from 'react';
import { Container } from './Skeleton.styles';

interface SkeletonProps {
  width?: string;
  height?: string;
  padding?: string;
}

export const Skeleton = (props: SkeletonProps) => {
  return <Container {...props} />;
};
