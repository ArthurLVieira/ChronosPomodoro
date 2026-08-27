import type React from 'react';
import Styles from './styles.module.css';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>{children}</div>
    </div>
  );
};

export default Container;
