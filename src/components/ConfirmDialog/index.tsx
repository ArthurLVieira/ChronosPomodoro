import type React from 'react';
import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

export interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'warning' | 'info';
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  variant = 'info',
}) => {
  const confirmButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const variantClass = styles[variant] || styles.info;

  return (
    <div
      className={styles.overlay}
      onClick={handleBackdropClick}
      role='dialog'
      aria-modal='true'
      aria-labelledby='confirm-dialog-title'
    >
      <div className={styles.dialog}>
        <h2 id='confirm-dialog-title' className={styles.title}>
          {title}
        </h2>
        <p className={styles.message}>{message}</p>
        <div className={styles.actions}>
          <button
            className={`${styles.button} ${styles.cancelButton}`}
            onClick={onClose}
            type='button'
          >
            {cancelText}
          </button>
          <button
            ref={confirmButtonRef}
            className={`${styles.button} ${styles.confirmButton} ${variantClass}`}
            onClick={() => {
              onConfirm();
              onClose(); // opcional: fechar após confirmar (pode ser ajustado)
            }}
            type='button'
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
