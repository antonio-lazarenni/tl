import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import { Flex, Box } from 'theme-ui';

interface ModalProps {
  isVisible: boolean;
  children: React.ReactNode;
}

const Overlay = () => {
  return (
    <Flex
      sx={{
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '2',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'muted',
        opacity: '.5'
      }}
    />
  );
};

const Modal: FC<ModalProps> = ({ isVisible, children }) =>
  !isVisible
    ? null
    : ReactDOM.createPortal(
        <>
          <Overlay />
          <Box
            sx={{
              position: 'fixed',
              top: '0',
              left: '0',
              zIndex: '1050',
              width: '100vw',
              height: '100vh',
              overflowX: 'hidden',
              overflowY: 'auto',
              outline: '0',
              display: 'grid',
              placeItems: 'center',
              '> div': {
                zIndex: '100',
                bg: 'bgc',
                position: 'relative',
                borderRadius: '5px',
                width: '100%',
                maxWidth: '500px',
                padding: '2rem'
              }
            }}
          >
            <Box>{children}</Box>
          </Box>
        </>,
        document.body
      );

export const useModal = () => {
  const [isVisible, setVisible] = useState(false);

  function toggle() {
    setVisible(!isVisible);
  }

  return {
    isVisible,
    toggle,
    Modal
  };
};

export default Modal;
