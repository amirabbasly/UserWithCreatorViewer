import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative px-6 py-10 max-w-7xl mx-auto"
    >
      {/* بک‌گراند شیشه‌ای حبابی */}
      <div
        className="
    absolute inset-0
    bg-gradient-to-tr from-gray-800/60 via-gray-900/40 to-gray-800/60
    rounded-3xl
    backdrop-blur-lg
    border border-gray-700/40
    shadow-lg
    z-0
  "
        style={{
          filter: "drop-shadow(0 0 20px rgba(100, 100, 255, 0.4))",
        }}
      />

      <div className="relative flex flex-col md:flex-row justify-between gap-10 text-gray-200">
        {/* لوگوی ساده یا اسم شرکت */}
        <div className="flex items-center justify-center md:justify-start w-32 h-32 md:w-40 md:h-40 rounded-full text-3xl font-extrabold text-white select-none shadow-2xl">
          <h1 className="text-center">Arses آرسیس</h1>
        </div>

        {/* درباره شرکت */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">درباره ما</h2>
          <p className="text-gray-300 leading-relaxed">
            شرکت ما با هدف ارائه بهترین خدمات فناوری اطلاعات و توسعه
            نرم‌افزارهای مدرن، از سال ۱۳۹۵ فعالیت خود را آغاز کرده است. ما با
            تیمی متخصص و متعهد، بهترین راهکارها را برای کسب و کار شما ارائه
            می‌دهیم.
          </p>
        </div>

        {/* اطلاعات تماس */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">تماس با ما</h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <FaMapMarkerAlt /> تهران , جردن , خیابان مریم غربی , پلاک 131
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <FaPhoneAlt /> +98 939 7979 861
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <FaPhoneAlt /> +98 776-42465
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
              <FaEnvelope /> info@arseslab.com
            </li>
          </ul>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">شبکه‌های اجتماعی</h2>
          <div className="flex gap-6 text-gray-400 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © 2025 شرکت ما. همه حقوق محفوظ است.
      </div>
    </motion.footer>
  );
};

export default Footer;
