import { motion } from 'framer-motion';
import { FaCheckCircle, FaUserTie } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const stats = [
  { title: 'سال شروع', value: '۵ سال پیش' },
  { title: 'پروژه موفق', value: '۳۰۰+' },
  { title: 'اعضای تیم', value: '۴۰ نفر' },
  { title: 'پوشش', value: 'ایران و خارج از کشور' },
];

const licenses = [
  'مجوز تبلیغات',
  'نشر دیجیتال',
  'اینماد',
  'ثبت مالیاتی',
  'تأمین اجتماعی',
  'اتحادیه کسب‌وکارهای مجازی',
  'وزارت ارشاد اسلامی',
];

const experts = [
  { name: 'رضا محمدی', title: 'برنامه‌نویس ارشد' },
  { name: 'زهرا احمدی', title: 'مدیر مارکتینگ' },
  { name: 'علی رضایی', title: 'مدیر پروژه' },
  { name: 'محمد یوسفی', title: 'تحلیل‌گر ارشد' },
  { name: 'نگین محمدی', title: 'طراح رابط کاربری' },
];

const StatsAndLicensesAndExperts = () => {
  return (
    <>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-green-950 p-6 rounded-2xl text-center shadow-lg"
          >
            <div className="text-2xl font-bold text-green-400">{item.value}</div>
            <div className="text-sm text-gray-300 mt-2">{item.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Licenses */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl text-green-400 font-bold mb-6 text-center">مجوزها و تاییدیه‌ها</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {licenses.map((license, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-sm text-green-300"
            >
              <FaCheckCircle className="text-green-500" />
              {license}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Experts Slider */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl text-green-400 font-bold mb-8 text-center">اعضای کلیدی تیم</h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
        >
          {experts.map((person, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="bg-gray-800 p-6 rounded-xl text-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaUserTie className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-green-300">{person.name}</h3>
                <p className="text-gray-400">{person.title}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
};

export default StatsAndLicensesAndExperts;
