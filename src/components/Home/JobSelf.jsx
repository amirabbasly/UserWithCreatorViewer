import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const steps = [
  {
    title: "خود را به ما بسپارید",
    description:
      "با سپردن کسب‌وکارتان به ما، قدم اول برای دیده‌شدن در فضای دیجیتال را محکم بردارید.",
    delay: 0.2,
  },
  {
    title: "ما شما را سئو می‌کنیم",
    description:
      "تیم تخصصی سئوی ما با تحلیل دقیق بازار، سایت شما را در نتایج گوگل به صدر می‌رساند.",
    delay: 0.4,
  },
  {
    title: "فروش تضمینی چند برابری",
    description:
      "با دیده‌شدن بیشتر و ترافیک هدفمند، فروش شما به‌صورت تضمینی افزایش خواهد یافت.",
    delay: 0.6,
  },
];

const JobSelf = () => {
  return (
    <div className="relative text-white py-16 px-8 flex flex-col items-center">
      {/* عنوان اصلی */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        مسیر رشد دیجیتال شما
      </motion.h1>

      {/* دایره‌ها + فلش‌ها */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* دایره */}
            <motion.div
              className="relative w-64 h-64 rounded-full 
                border-4 border-purple-500 flex items-center justify-center p-6 text-center
                bg-white/10 backdrop-blur-md shadow-xl shadow-purple-500/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: step.delay }}
            >
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">{step.title}</h2>
                <p className="text-sm md:text-base leading-relaxed">{step.description}</p>
              </div>
            </motion.div>

            {/* فلش بین مراحل */}
            {index < steps.length - 1 && (
              <FaArrowRight className="hidden md:block text-3xl text-purple-400 mx-6 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSelf;
