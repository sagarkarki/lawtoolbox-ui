export type ToastTypes =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "loader";

export interface ToastElement {
  id?: number;
  title?: string;
  description: string;
  type?: ToastTypes;
  children?: React.ReactNode;
}
