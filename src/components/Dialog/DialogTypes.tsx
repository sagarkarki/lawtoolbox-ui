export type DialogWidthType = "xl" | "lg" | "md" | "sm";

export interface DialogProps {
  title: string;
  component: React.ReactNode;
  cancelText?: string;
  okText?: string;
  size?: DialogWidthType;
}

export interface OpenDialogType {
  okCallback: () => void;
  cancelCallback?: () => void;
  onOpen: (dialog: DialogProps) => void;
  onClose: () => void;
}
