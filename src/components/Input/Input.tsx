import React, { ChangeEvent } from 'react';
import { Container, InputLabel, InputField } from './Input.styles';

interface InputProps {
  name?: string;
  label?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  width?: string;
  disabled?: boolean;
  error?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(event);
  };

  return (
    <Container>
      {props.label && <InputLabel htmlFor={props.name}>{props.label}</InputLabel>}
      <InputField data-testid="Input" {...props} onChange={handleChange} />
    </Container>
  );
};
