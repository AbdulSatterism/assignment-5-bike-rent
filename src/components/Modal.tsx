/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormProvider, useForm } from "react-hook-form";
import { ModalProps } from "../types/modal.type";
import ModalInput from "./ModalInput";

const Modal = ({
  isOpen,
  onClose,
  title,
  initialData,
  onSubmit,
  fields,
}: ModalProps) => {
  const methods = useForm({ defaultValues: initialData });

  const handleSubmit = (data: { [key: string]: any }) => {
    onSubmit(data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <div className="py-4">
              {fields.map((field) => (
                <ModalInput
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  label={field.label}
                />
              ))}
            </div>
            <div className="modal-action">
              <button type="button" onClick={onClose} className="btn">
                Cancel
              </button>
              <button type="submit" className="btn bg-blue-600">
                update
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Modal;
