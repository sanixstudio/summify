import React from "react";
import { RegisterForm } from "..";

const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  // Apply Tailwind CSS classes to style the modal
  const modalClass = isOpen
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";

  return (
    <div className={modalClass}>
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

      <div className="modal-container bg-white w-11/12 bg-inherit md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        {/* Close button */}
        <button
          onClick={() => onClose()}
          className="modal-close absolute top-0 right-0 cursor-pointer p-4"
        >
          <svg
            className="fill-current h-12 w-12 text-gray-500 bg-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              className="text-gray-500"
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Modal content */}
        <div className="modal-content py-4 text-left px-6">
          <RegisterForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
