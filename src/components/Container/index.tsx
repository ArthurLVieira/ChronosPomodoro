import type React from 'react';
import Styles from './styles.module.css';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children,
  ...props
}: ContainerProps) => {
  return (
    <div className={Styles.container} {...props}>
      <div className={Styles.content}>{children}</div>
    </div>
  );
};

export default Container;
