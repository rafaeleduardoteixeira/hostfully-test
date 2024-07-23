import styled from 'styled-components';

interface SkeletonProps {
  width?: string;
}

export const Container = styled.div<SkeletonProps>`
  width: ${(props) => props.width || '100%'};
  height: 100%;
  border-radius: 10px;
  animation: skeleton-loading 1s linear infinite alternate;
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 10%, 90%);
    }
    100% {
      background-color: hsl(200, 10%, 95%);
    }
  }
`;
