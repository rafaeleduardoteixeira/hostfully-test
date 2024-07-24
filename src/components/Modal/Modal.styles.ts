import styled from 'styled-components';
import { colors, media } from '../../themes';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div<{ width?: string }>`
  display: flex;
  background-color: white;
  padding: 45px 20px 20px 20px;
  border-radius: 10px;
  width: ${({ width }) => width || '60%'};
  overflow: auto;
  max-height: 600px;
  position: relative;

  @media ${media.tablet} {
    width: 90%;
  }

  @media ${media.mobile} {
    width: 80%;
    max-height: 60%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;

  width: 20px;
  height: 20px;

  &:before {
    color: ${colors.black};
    content: '×';
  }
`;
