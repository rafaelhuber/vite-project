import { useEffect, useState } from "react";

function Alert({ children = " ", onClose, className }) {
  const [visible, setVisible] = useState(true);
  const { box, button } = checkAlert(className);

  function checkAlert(color) {
    if (color === "red") {
      return {
        box: "text-red-800 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800",
        button:
          "dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700 bg-red-50 text-red-500 focus:ring-red-400 p-1.5 hover:bg-red-200",
      };
    } else if (color === "blue") {
      return {
        box: "text-blue-800 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800",
        button:
          "dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700 bg-blue-50 text-blue-500 focus:ring-blue-400 p-1.5 hover:bg-blue-200",
      };
    } else {
      return {
        box: "text-gray-800 border-gray-300 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-800",
        button:
          "dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 bg-gray-50 text-gray-500 focus:ring-gray-400 p-1.5 hover:bg-gray-200",
      };
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div
      id="alert-border-2"
      className={`fixed top-4 right-4 z-50  flex items-start gap-2 p-4 mb-4  border-t-4 ${box}}`}
      role="alert"
    >
      <svg
        className="shrink-0 w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <div className="ms-3 text-sm font-medium">
        <div>{children}</div>
      </div>
      <button
        type="button"
        className={`ms-auto -mx-1.5 -my-1.5  rounded-lg focus:ring-2inline-flex items-center justify-center h-8 w-8 ${button}`}
        data-dismiss-target="#alert-border-2"
        aria-label="Close"
        onClick={() => {
          setVisible(false);
          if (onClose) onClose();
        }}
      >
        <span className="sr-only">Dismiss</span>
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
}

export default Alert;
