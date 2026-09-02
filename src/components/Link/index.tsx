import React from 'react';
import Styles from './styles.module.css';
import RouterLink from '../RouterLink';
import type { LinkProps } from 'react-router';

interface MenuLinkProps extends LinkProps {
  to: string;
  children: React.ReactNode;
}

export const MenuLink: React.FC<MenuLinkProps> = ({
  to,
  children,
  ...rest
}) => {
  return (
    <>
      <RouterLink to={to} className={Styles.link} {...rest}>
        {children}
      </RouterLink>
    </>
  );
};
