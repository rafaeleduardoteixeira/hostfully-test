import styled from 'styled-components';
import { colors, media } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
`;

export const SearchInputField = styled.input`
  height: 50px;
  border: none;
  outline: none;
  padding: 0 20px;
  font-size: 1rem;
  color: hsl(200, 5%, 40%);
  background-color: hsl(200, 5%, 95%);
  border-radius: 10px;

  &::placeholder {
    color: hsl(200, 5%, 80%);
  }

  &:focus {
    outline: ${colors.grayLight} auto 1px;
  }

  @media (${media.mobile}) {
    font-size: 0.9rem;
    height: 40px;
  }
`;
