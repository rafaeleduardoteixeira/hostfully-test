import styled from 'styled-components';
import { colors } from '../../themes';

export const Container = styled.div`
  position: absolute;
  width: 150px;
  right: 80px;
  top: 50px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 10;
  color: ${colors.black};
  gap: 10px;
`;

export const Item = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    border-radius: 10px;
    background-color: #f5f5f5;
  }
`;
