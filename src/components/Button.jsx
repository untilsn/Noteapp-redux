import React from "react";

const Button = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="inline-flex items-center justify-center p-6 text-xl text-white bg-black rounded-full "
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </span>
    </div>
  );
};

export default Button;
