import React from 'react';
import Styles from './styles.module.css';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode,
  onClick?: (e) => void,
}

export const Link: React.FC<LinkProps> = ({
  children,
  href,
  onClick,
  ...rest
}) => {
  return (
      <a className={Styles.link} href={href} onClick={onClick} {...rest}>
        {children}
      </a>
  );
}
