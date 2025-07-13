import React, { useState } from 'react';
import { 
  FaUserCircle, FaInfoCircle, FaPhoneAlt, FaCogs, FaHandshake, 
  FaBriefcase, FaTags, FaChevronDown, FaGlobe, FaBars, FaTimes 
} from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useNavigate } from 'react-router-dom';

const languageOptions = [
  { code: 'fa', label: 'فارسی', flag: '🇮🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
];

const NavigationMenu = () => {
  const [language, setLanguage] = useState('fa');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = useNavigate();
  const currentLang = languageOptions.find(lang => lang.code === language);

  const toggleLangDropdown = () => setLangDropdownOpen(!langDropdownOpen);
  const selectLanguage = (code) => {
    setLanguage(code);
    setLangDropdownOpen(false);
  };
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white p-3 sm:p-4 flex items-center justify-between shadow-lg rtl"
      dir="rtl"
    >
      {/* Logo and Title */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <span className="text-base sm:text-lg font-extrabold tracking-wide select-none whitespace-nowrap">
          آژانس دیجیتال مارکتینگ آرسیس
        </span>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
          aria-label="منوی موبایل"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Navigation Links and Language Selector for Desktop */}
      <div className="hidden sm:flex items-center gap-3 sm:gap-4 md:gap-6 flex-nowrap overflow-x-auto scrollbar-hidden flex-shrink-0">
        <a
          onClick={() => navigation('/about')}
          className="flex items-center gap-1 hover:text-gray-300 transition-colors text-xs sm:text-sm whitespace-nowrap cursor-pointer"
        >
          <FaInfoCircle size={14} /> درباره ما
        </a>
        <a
          onClick={() => navigation('/about')}
          className="flex items-center gap-1 hover:text-gray-300 transition-colors text-xs sm:text-sm whitespace-nowrap cursor-pointer"
        >
          <FaPhoneAlt size={14} /> تماس با ما
        </a>
        <a
          onClick={() => navigation('/about')}
          className="flex items-center gap-1 hover:text-gray-300 transition-colors text-xs sm:text-sm whitespace-nowrap cursor-pointer"
        >
          <FaCogs size={14} /> خدمات
        </a>
        <a
          onClick={() => navigation('/about')}
          className="flex items-center gap-1 hover:text-gray-300 transition-colors text-xs sm:text-sm whitespace-nowrap cursor-pointer"
        >
          <FaHandshake size={14} /> همکاری
        </a>
        <a
          onClick={() => navigation('/about')}
          className="flex items-center gap-1 hover:text-gray-300 transition-colors text-xs sm:text-sm whitespace-nowrap cursor-pointer"
        >
          <FaBriefcase size={14} /> نمونه و سابقه
        </a>
        <a
          onClick={() => navigation('/price')}
          className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded-full hover:bg-blue-700 transition-colors text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer"
        >
          <FaTags size={14} /> تعرفه‌ها
        </a>

        {/* User Icon */}
        <div className="flex-shrink-0 flex items-center">
          <FaUserCircle
            size={20}
            data-tooltip-id="user-tooltip"
            className="cursor-pointer hover:text-gray-300 transition-colors"
          />
          <Tooltip id="user-tooltip" place="bottom" content="پروفایل کاربری" />
        </div>

        {/* Language Selector */}
        <div className="relative select-none flex-shrink-0 flex items-center">
          <button
            onClick={toggleLangDropdown}
            className="flex items-center gap-1 sm:gap-2 border border-gray-400 rounded-md px-2 sm:px-3 py-1 text-white bg-black bg-opacity-20 hover:bg-opacity-40 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 whitespace-nowrap"
            aria-haspopup="listbox"
            aria-expanded={langDropdownOpen}
            aria-label="انتخاب زبان"
          >
            <FaGlobe size={16} />
            <span className="text-base">{currentLang.flag}</span>
            <span className="hidden sm:inline text-xs sm:text-sm">{currentLang.label}</span>
            <FaChevronDown
              size={12}
              className={`transition-transform ${langDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>

          {langDropdownOpen && (
            <ul
              className="absolute right-0 top-full mt-2 w-28 sm:w-32 bg-[#203a43] rounded-md shadow-lg z-50"
              role="listbox"
            >
              {languageOptions.map((lang) => (
                <li
                  key={lang.code}
                  role="option"
                  aria-selected={language === lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={`cursor-pointer flex items-center gap-2 px-3 py-2 hover:bg-blue-600 transition-colors text-xs sm:text-sm ${
                    language === lang.code ? 'bg-blue-700 font-semibold' : ''
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Mobile Menu (Off-Canvas from Left) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#203a43] z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="بستن منو"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col p-4 gap-4">
            <a
              onClick={() => {
                navigation('/about');
                toggleMobileMenu();
              }}
              className="flex items-center gap-2 hover:text-gray-300 transition-colors text-sm"
            >
              <FaInfoCircle size={16} /> درباره ما
            </a>
            <a
              onClick={() => {
                navigation('/contact');
                toggleMobileMenu();
              }}
              className="flex items-center gap-2 hover:text-gray-300 transition-colors text-sm"
            >
              <FaPhoneAlt size={16} /> تماس با ما
            </a>
            <a
              onClick={() => {
                navigation('/services');
                toggleMobileMenu();
              }}
              className="flex items-center gap-2 hover:text-gray-300 transition-colors text-sm"
            >
              <FaCogs size={16} /> خدمات
            </a>
            <a
              onClick={() => {
                navigation('/collaboration');
                toggleMobileMenu();
              }}
              className="flex items-center gap-2 hover:text-gray-300 transition-colors text-sm"
            >
              <FaHandshake size={16} /> همکاری
            </a>
            <a
              onClick={() => {
                navigation('/portfolio');
                toggleMobileMenu();
              }}
              className="flex items-center gap-2 hover:text-gray-300 transition-colors text-sm"
            >
              <FaBriefcase size={16} /> نمونه و سابقه
            </a>
            <a
              onClick={() => {
                navigation('/pricing');
                toggleMobileMenu();
              }}
              className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              <FaTags size={16} /> تعرفه‌ها
            </a>
            <div className="flex items-center gap-2">
              <FaUserCircle
                size={20}
                data-tooltip-id="user-tooltip-mobile"
                className="cursor-pointer hover:text-gray-300 transition-colors"
              />
              <Tooltip id="user-tooltip-mobile" place="bottom" content="پروفایل کاربری" />
            </div>
            <div className="relative select-none">
              <button
                onClick={toggleLangDropdown}
                className="flex items-center gap-2 border border-gray-400 rounded-md px-3 py-1 text-white bg-black bg-opacity-20 hover:bg-opacity-40 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-haspopup="listbox"
                aria-expanded={langDropdownOpen}
                aria-label="انتخاب زبان"
              >
                <FaGlobe size={16} />
                <span className="text-base">{currentLang.flag}</span>
                <span className="text-sm">{currentLang.label}</span>
                <FaChevronDown
                  size={12}
                  className={`transition-transform ${langDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>
              {langDropdownOpen && (
                <ul
                  className="absolute right-0 top-full mt-2 w-32 bg-[#203a43] rounded-md shadow-lg z-50"
                  role="listbox"
                >
                  {languageOptions.map((lang) => (
                    <li
                      key={lang.code}
                      role="option"
                      aria-selected={language === lang.code}
                      onClick={() => {
                        selectLanguage(lang.code);
                        toggleMobileMenu();
                      }}
                      className={`cursor-pointer flex items-center gap-2 px-3 py-2 hover:bg-blue-600 transition-colors text-sm ${
                        language === lang.code ? 'bg-blue-700 font-semibold' : ''
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* CSS for Scrollbar and Animation */}
      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
};

export default NavigationMenu;