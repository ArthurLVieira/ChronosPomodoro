// confirmDialogStore.ts
import { create } from 'zustand';
import { type ConfirmDialogProps } from './../../components/ConfirmDialog';

type ConfirmOptions = Omit<
  ConfirmDialogProps,
  'isOpen' | 'onClose' | 'onConfirm'
>;

interface ConfirmDialogStore {
  isOpen: boolean;
  options: ConfirmOptions | null;
  onConfirm: (() => void) | null;
  showConfirm: (options: ConfirmOptions, onConfirm: () => void) => void;
  hideConfirm: () => void;
  confirmAction: () => void;
}

export const useConfirmDialogStore = create<ConfirmDialogStore>((set, get) => ({
  isOpen: false,
  options: null,
  onConfirm: null,

  showConfirm: (options, onConfirm) =>
    set({ isOpen: true, options, onConfirm: () => onConfirm }),

  hideConfirm: () => set({ isOpen: false, options: null, onConfirm: null }),

  confirmAction: () => {
    const { onConfirm, hideConfirm } = get();
    if (onConfirm) onConfirm();
    hideConfirm();
  },
}));
