import Styles from './styles.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  color?: 'green' | 'red';
}

const Button: React.FC<ButtonProps> = ({ icon, color = 'green', ...props }) => {
  return (
    <>
      <button className={`${Styles.button} ${Styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
};

export default Button;
