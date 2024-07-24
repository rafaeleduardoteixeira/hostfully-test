import { ReactElement } from 'react';
import { CloseButton, Container, ModalContent } from './Modal.styles';

interface ModalProps {
  width?: string;
  children: ReactElement;
  onClose?: () => void;
}

export const Modal = ({ children, width, onClose }: ModalProps) => {
  return (
    <Container>
      <ModalContent width={width}>
        {onClose && <CloseButton onClick={onClose} />}
        {children}
      </ModalContent>
    </Container>
  );
};
