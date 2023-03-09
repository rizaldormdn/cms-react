import React from "react";

interface InputProps {
  placeholder: any;
  showPassword: boolean;
  action: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const InputPassword: React.FC<InputProps> = ({
  showPassword,
  action,
  placeholder,
}) => {
  return (
    <section>
      <div className="flex">
        <input
          className="px-2 py-2 border border-gray-700 focus:border-gray-400 lg:w-full md:w-full rounded-md items-start justify-center"
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
        />
        <div className="flex ml-[-50px] items-center text-[16px] text-[#3A3541]">
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              action(e);
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </section>
  );
};
