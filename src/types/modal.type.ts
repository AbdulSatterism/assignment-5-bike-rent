/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onSubmit: (formData: { [key: string]: any }) => void;
  fields: Array<{
    defaultValue?: any;
    name: string;
    type: string;
    placeholder?: string;
    label: string;
  }>;
}
