import { motion } from "framer-motion";
import Typewriter from "react-typewriter-effect";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center mb-16"
    >
      <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl mb-4">
        Arses | آرسیس
      </p>
      <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl">
        شرکت دیجیتال مارکتینگ آرسیس با بیش از ۵ سال سابقه و بیش از ۳۰۰ پروژه
        موفق، یکی از معتبرترین تیم‌های نرم‌افزاری ایران است.
      </p>
    </motion.div>
  );
};

export default Header;
