import Styles from './styles.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ id, children, ...props }) => {
  return (
    <>
      <div className={Styles.button}>
        <button id={id} className={Styles.buttonLink} {...props}>
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
