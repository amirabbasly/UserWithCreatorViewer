import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "react-typewriter-effect"; // وارد کردن کتابخانه
import icon from "../../../public/favicon.png";

const slides = [
  {
    title: "برنامه بازاریابی هدفمند ",
    subtitle: "تحولی در کسب‌وکار دیجیتال شما",
    description: "خدمات دیجیتال مارکتینگ با تمرکز بر رشد برند و افزایش فروش.",
  },
  {
    title: "تبلیغات هدفمند تضمینی",
    subtitle: "رسیدن به مشتری واقعی",
    description: "با تبلیغات آنلاین دقیق، مخاطب درست را جذب کنید.",
  },
  {
    title: "سئو و بهینه سازی گوگل",
    subtitle: "در صدر نتایج گوگل دیده شوید",
    description: "با استراتژی‌های سئو، جایگاه برندتان را تثبیت کنید.",
  },
];

const SliderInterface = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-[90%] max-w-3xl h-[80vh] rounded-2xl text-white px-8 py-6 relative text-right font-vazir mx-auto my-12 shadow-xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20">
      {/* Company Logo and Name */}
      <div className="top-4 left-6 flex items-center justify-between gap-2">
        <img src={icon} alt="لوگوی شرکت" className="w-16 h-24" />
        <span className="text-sm md:text-base font-bold text-white">
          نوین تجارت دیجیتال آرسیس
        </span>
      </div>

      {/* Page Number */}
      <div className="absolute right-1 rotate-90 origin-bottom-right text-xs text-white/60">
        صفحه {current + 1}
      </div>

      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            <Typewriter
              text={slides[current].title}
              cursorColor="white"
              typeSpeed={100}
              deleteSpeed={50}
              delay={2000}
            />
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-fuchsia-500 mb-2">
            {slides[current].subtitle}
          </h2>
          <p className="text-sm md:text-lg text-white/80 max-w-lg">
            {slides[current].description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Presenter */}
      <div className="absolute bottom-6 right-8 text-sm">
        <p>ارائه شده توسط</p>
        <p className="font-bold">تیم دیجیتال مارکتینگ آرسیس</p>
      </div>

      {/* Next Slide Circle */}
      <div className="absolute bottom-6 left-8">
        <div
          onClick={nextSlide}
          className="w-24 h-24 rounded-full bg-gradient-to-tr from-fuchsia-500 to-black flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
        >
          <p className="text-xs">اسلاید بعدی</p>
        </div>
      </div>
    </div>
  );
};

export default SliderInterface;