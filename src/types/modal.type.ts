/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  initialData: { [key: string]: any };
  onSubmit: (formData: { [key: string]: any }) => void;
  fields: Array<{
    name: string;
    type: string;
    placeholder: string;
    label: string;
  }>;
}
