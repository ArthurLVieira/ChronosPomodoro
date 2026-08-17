import Styles from './styles.module.css';

type LinkProps = {
    children: React.ReactNode,
    attribute: string,
};

export function Link({ children }: LinkProps) {
  return (
      <a className={Styles.link} href="#">
        {children}
      </a>
  );
}
