/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ModalProps } from "../types/modal.type";
import ModalInput from "./ModalInput";

const Modal = ({ isOpen, onClose, title, onSubmit, fields }: ModalProps) => {
  const methods = useForm();

  const handleSubmit: SubmitHandler<FieldValues> = (data: {
    [key: string]: any;
  }) => {
    onSubmit(data);
    methods.reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open ">
      <div className="modal-box">
        <h3 className="text-2xl text-center mb-6 font-bold text-blue-600 uppercase ">
          {title}
        </h3>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <div className="py-4">
              {fields.map((field) => (
                <ModalInput
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  defaultValue={field.defaultValue}
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
                submit
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Modal;
