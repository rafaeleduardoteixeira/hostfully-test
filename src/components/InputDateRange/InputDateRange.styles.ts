import styled from 'styled-components';
import { colors } from '../../themes';

export const Container = styled.div<{ error?: string }>`
  .react-datepicker__input-container {
    display: flex;
    align-items: center;
    img {
      right: 10px;
    }
  }
  .react-datepicker__day--in-range {
    background-color: ${colors.hostfullyPrimaryColor} !important;
  }

  .react-datepicker {
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .react-datepicker__header {
    background-color: ${colors.hostfullySecondaryColor};
  }

  .react-datepicker__current-month {
    color: white;
  }

  .react-datepicker__day-name {
    color: white;
  }

  .react-datepicker__triangle {
    display: none !important;
  }

  .date-picker {
    height: 50px;
    border-radius: 10px;
    background-color: ${colors.grayInput};
    border: none;
    color: ${colors.gray};
    padding: 0 20px;
    width: 290px;
    font-size: 1rem;

    outline: ${(props) => (props.error ? `1px solid ${colors.red}` : 'none')};

    &::placeholder {
      color: ${colors.gray};
    }
    &:focus {
      outline: ${colors.grayLight} auto 1px;
    }
  }
`;
