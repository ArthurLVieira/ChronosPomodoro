import styles from './styles.module.css';

const PLACEHOLDER_EXCLUDED_TYPES = new Set([
  'number',
  'range',
  'date',
  'time',
  'datetime-local',
  'month',
  'week',
  'color',
  'file',
  'checkbox',
  'radio',
  'submit',
  'reset',
  'button',
  'hidden',
  'image'
]);

type InputProps = {
  id?: string;
  label?: string;
  showLabel?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
} & React.ComponentProps<'input'>;

function Input({
  label,
  showLabel = true,
  borderColor = 'var(--gray-300)',
  backgroundColor = 'var(--gray-800)',
  textColor = 'var(--text-default)',
  id,
  className,
  style,
  type,
  placeholder,
  ...rest
}: InputProps) {

  const inputStyle = {
    '--input-border-color': borderColor,
    '--input-bg': backgroundColor,
    '--input-text-color': textColor,
    ...style,
  } as React.CSSProperties;

  // Decide se deve renderizar o placeholder com base no tipo
  const shouldRenderPlaceholder = !PLACEHOLDER_EXCLUDED_TYPES.has(String(type));
  const finalPlaceholder = shouldRenderPlaceholder ? placeholder : undefined;

  return (
    <div className={styles.container}>
      {showLabel && label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={finalPlaceholder}
        className={`${styles.input} ${className || ''}`}
        style={inputStyle}
        {...rest} // rest pode conter outras props, mas já extraímos type e placeholder
      />
    </div>
  );
};

export default Input;