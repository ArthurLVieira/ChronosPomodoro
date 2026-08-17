import Styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>{children}</div>
    </div>
  );
}
