import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface PasswordInputProps {
  placeholder: string;
  id: string;
  name: string;
  onPaste: (event: React.ClipboardEvent<HTMLInputElement>) => void;
  value: number;
  register: UseFormRegister<any>;
}

const PasswordInput = ({
  placeholder,
  id,
  name,
  register,
  onPaste,
  value,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center">
      <input
        type={showPassword ? "text" : "password"}
        id={id}
        name={name}
        className={`bg-gray-50 border border-gray-500 w-full rounded-lg p-2.5 sm:w-full sm:block`}
        placeholder={placeholder}
        {...register}
        onPaste={onPaste}
        value={value}
      />
      <span
        onClick={togglePasswordVisibility}
        className="cursor-pointer mx-[-40px]"
      >
        {showPassword ? (
          <AiFillEyeInvisible className="text-gray-800 w-7 h-7" />
        ) : (
          <AiFillEye className="text-gray-800 w-7 h-7" />
        )}
      </span>
    </div>
  );
};

export default PasswordInput;
