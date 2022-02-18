export interface ToastElement {
    id?: number;
    title?: string;
    description: string;
    type?: "primary" | "success" | "danger" | "warning" | "loader";
    children?: React.ReactNode;
};