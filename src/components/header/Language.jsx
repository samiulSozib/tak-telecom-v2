import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getLanguages } from "../../redux/actions/locationAction";
import { Internet } from "../../icons";

export default function Language() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const { languages } = useSelector((state) => state.locationReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, [dispatch]);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleLanguageChange(lang) {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  }

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full dropdown-toggle hover:text-gray-700 h-11 w-11 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        onClick={toggleDropdown}
      >
        <Internet className="w-[28px] h-[28px]"/>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <ul className="py-2">
            {languages?.map((lang) => (
              <li
                key={lang.code}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleLanguageChange(lang.language_code)}
              >
                {lang.language_name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
