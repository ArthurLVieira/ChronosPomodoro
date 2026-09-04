import ConfirmDialog from '../components/ConfirmDialog';
import { useConfirmDialogStore } from '../stores/confirmDialogStore';

const GlobalConfirmDialog = () => {
  const { isOpen, options, hideConfirm, confirmAction } =
    useConfirmDialogStore();

  if (!options) return null;

  return (
    <ConfirmDialog
      isOpen={isOpen}
      onClose={hideConfirm}
      onConfirm={confirmAction}
      title={options.title}
      message={options.message}
      confirmText={options.confirmText}
      cancelText={options.cancelText}
      variant={options.variant}
    />
  );
};

export default GlobalConfirmDialog;
