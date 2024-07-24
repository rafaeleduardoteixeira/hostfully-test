import styled from 'styled-components';
import { colors, media } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${colors.grayDark};
`;

export const InputField = styled.input<{ width?: string; error?: string }>`
  height: 50px;
  border: none;
  outline: none;
  padding: 0 10px 0 20px;
  font-size: 1rem;
  color: ${colors.black};
  background-color: ${colors.grayInput};
  border-radius: 10px;
  width: ${(props) => props.width || '90%'};

  outline: ${(props) => (props.error ? `1px solid ${colors.red}` : 'none')};

  &::placeholder {
    color: ${colors.gray};
  }

  &:focus {
    outline: ${colors.grayLight} auto 1px;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (${media.mobile}) {
    font-size: 0.9rem;
    height: 40px;
  }
`;
