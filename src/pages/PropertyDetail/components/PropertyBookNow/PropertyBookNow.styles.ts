import styled, { css } from 'styled-components';
import { colors, media } from '../../../../themes';

export const PropertyBookNowContainer = styled.div`
  width: 30%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
  border: 1px solid rgb(221, 221, 221);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;

  @media ${media.tablet} {
    width: 40%;
  }

  @media ${media.mobile} {
    width: 100%;
  }
`;

export const PropertyBookNowPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.hostfullyPrimaryColor};
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  color: white;
  font-size: 2rem;
  height: 55px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const PropertyBookNowButton = styled.button<{ disabled: boolean }>`
  background-color: ${colors.hostfullyPrimaryColor};
  border: none;
  padding: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: white;
  width: 100%;
  height: 55px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.hostfullySecondaryColor};
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${colors.gray};
      cursor: not-allowed;

      &:hover {
        background-color: ${colors.gray};
      }
    `}
`;

export const PropertyBookNowFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  gap: 15px;

  @media ${media.notebook} {
    input {
      width: 250px;
    }
    .date-picker {
      width: 240px;
    }
  }

  @media ${media.tablet} {
    input {
      width: 300px;
    }
    .date-picker {
      width: 290px;
    }
  }

  @media ${media.mobile} {
    > div {
      width: 260px;
    }
    input {
      width: 250px;
    }
    .date-picker {
      width: 240px;
    }
  }
`;

export const PropertyBookNowSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const PropertyBookNowSuccessMessage = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.grayDark};
`;

export const PropertyBookNowSuccessButton = styled.button`
  background-color: ${colors.hostfullyPrimaryColor};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: white;
  border-radius: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.hostfullySecondaryColor};
  }
`;
