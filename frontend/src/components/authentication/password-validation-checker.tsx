import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";

interface PasswordValidationChecker {
  title: string;
  checked: string;
}

function PasswordValidationChecker({
  title,
  checked,
}: PasswordValidationChecker) {
  return (
    <div className="flex gap-3 items-center">
      {checked ? (
        <AiOutlineCheckCircle size={10} className="text-lime-600" />
      ) : (
        <BsCircle size={10} className="text-gray-500" />
      )}
      <small className="font-semibold text-gray-500">{title}</small>
    </div>
  );
}

export default PasswordValidationChecker;
