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
  labelText?: string;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
} & React.ComponentProps<'input'>;

function Input({
  id,
  labelText,
  borderColor = 'var(--gray-300)',
  backgroundColor = 'var(--gray-800)',
  textColor = 'var(--text-default)',
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

  const shouldRenderPlaceholder = !PLACEHOLDER_EXCLUDED_TYPES.has(String(type));

  return (
    <div className={styles.container}>
      { labelText && (
        <label htmlFor={id} className={styles.label}>
          {labelText}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={shouldRenderPlaceholder ? placeholder : undefined}
        className={`${styles.input} ${className || ''}`}
        style={inputStyle}
        {...rest}
      />
    </div>
  );
};

export default Input;