import { useFormContext } from "react-hook-form";

type TModalInputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
};

const ModalInput = ({
  name,
  label,
  type = "text",
  placeholder,
}: TModalInputProps) => {
  const { register } = useFormContext();

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default ModalInput;
