import { useState } from "react";

export default function Language() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  // function closeDropdown() {
  //   setIsOpen(false);
  // }

  const handleClick = () => {
    toggleDropdown();
    setNotifying(false);
  };
  return (
    <div className="relative">
      <button
        className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full dropdown-toggle hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={handleClick}
      >
        <span
          className={`absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 ${
            !notifying ? "hidden" : "flex"
          }`}
        >
          <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
        </span>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="12" width="28" height="20" rx="3" fill="#0A17A7"/>
            <mask id="mask0_99_57066"  maskUnits="userSpaceOnUse" x="8" y="12" width="28" height="20">
            <rect x="8" y="12" width="28" height="20" rx="3" fill="white"/>
            </mask>
            <g mask="url(#mask0_99_57066)">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.7175 10.0835L18.6666 18.1433V10.6666H25.3333V18.1433L37.2824 10.0835L38.7736 12.2943L29.3262 18.6666H36V25.3333H29.3262L38.7736 31.7056L37.2824 33.9164L25.3333 25.8566V33.3333H18.6666V25.8566L6.7175 33.9164L5.22632 31.7056L14.6737 25.3333H7.99997V18.6666H14.6737L5.22632 12.2943L6.7175 10.0835Z" fill="white"/>
            <path d="M26.668 18.3322L39.3333 10" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round"/>
            <path d="M28.0128 25.6975L39.3667 33.3503" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round"/>
            <path d="M16.0055 18.3104L4.16248 10.329" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round"/>
            <path d="M17.29 25.6049L4.16248 34.3104" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 24H20V32H24V24H36V20H24V12H20V20H8V24Z" fill="#E6273E"/>
            </g>
            </svg>



      </button>
      
    </div>
  );
}
