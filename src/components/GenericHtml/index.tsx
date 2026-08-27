import type React from 'react';
import Style from './styles.module.css';

interface GenericHtmlProps {
  children: React.ReactNode;
}

const GenericHtml: React.FC<GenericHtmlProps> = ({ children }) => {
  return <div className={Style.genericHtml}>{children}</div>;
};

export default GenericHtml;
