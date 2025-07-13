import { motion } from 'framer-motion';
import { FaShieldAlt } from 'react-icons/fa';

const Guarantees = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-green-900 to-gray-900 p-8 rounded-2xl shadow-xl"
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4 mb-4 text-green-400 text-xl font-bold">
        <FaShieldAlt />
        تضمین‌های ما
      </div>
      <p className="text-gray-300 text-lg">
        ما برای هر پروژه تضمین فروش داریم. اگر به فروش مشخص‌شده در قرارداد نرسیدید، ما متعهد می‌شویم <span className="text-green-400 font-bold">۳ برابر هزینه پرداختی</span> را به شما بازگردانیم.
      </p>
    </motion.div>
  );
};

export default Guarantees;