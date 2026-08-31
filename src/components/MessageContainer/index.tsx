import type React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

interface MessageContainerProps {
  children: React.ReactNode;
}

export const MessageContainer: React.FC<MessageContainerProps> = ({
  children,
}) => {
  return (
    <>
      {children}

      <ToastContainer
        position='top-right'
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </>
  );
};
