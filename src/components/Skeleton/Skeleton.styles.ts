import styled from 'styled-components';

interface SkeletonProps {
  width?: string;
  height?: string;
  padding?: string;
}

export const Container = styled.div<SkeletonProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  border-radius: 10px;
  animation: skeleton-loading 1s linear infinite alternate;
  padding: ${(props) => props.padding || '0'};
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 10%, 90%);
    }
    100% {
      background-color: hsl(200, 10%, 95%);
    }
  }
`;
