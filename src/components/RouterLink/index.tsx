import { Link, type LinkProps } from 'react-router';

interface RouterLinkProps extends LinkProps {
  to: string;
  children: React.ReactNode;
}

const RouterLink: React.FC<RouterLinkProps> = ({ to, children, ...rest }) => {
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
};

export default RouterLink;
