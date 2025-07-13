import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import {
  FaChartLine,
  FaRecycle,
  FaClock,
  FaBullhorn,
  FaShieldAlt,
  FaSearchDollar,
  FaArrowRight,
  FaRocket,
  FaGlobe,
  FaUsers,
  FaLaptopCode,
} from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Clientele = () => {
  const navigate = useNavigate();
  // Card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // State for managing active card
  const [activeCard, setActiveCard] = useState(null);

  // Slider data in Persian
  const sliderItems = [
    {
      title: 'مزیت اول',
      description:
        'کشف کنید چگونه راهکارهای ما کسب‌وکار شما را با ویژگی‌های نوآورانه ارتقا می‌دهد.',
      icon: <FaChartLine className="text-4xl text-white" />,
    },
    {
      title: 'مزیت دوم',
      description:
        'با مدیریت بهینه منابع، بهره‌وری خود را افزایش دهید و به سوددهی پایدار برسید.',
      icon: <FaRecycle className="text-4xl text-white" />,
    },
    {
      title: 'مزیت سوم',
      description:
        'زمان اداری خود را تا ۸۰٪ کاهش دهید و بر رشد کسب‌وکار خود تمرکز کنید.',
      icon: <FaClock className="text-4xl text-white" />,
    },
    {
      title: 'مزیت چهارم',
      description:
        'تضمین کیفیت خدمات و ارتقای جایگاه شما در بازار با استراتژی‌های منحصر به فرد.',
      icon: <FaBullhorn className="text-4xl text-white" />,
    },
    {
      title: 'مزیت پنجم',
      description:
        'افزایش ترافیک سایت و بهبود رتبه‌بندی موتورهای جستجو با راهکارهای سئو حرفه‌ای.',
      icon: <FaSearchDollar className="text-4xl text-white" />,
    },
  ];

  // Ref for Swiper control
  const swiperRef = useRef(null);

  // Handle card click
  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  // Handle card hover
  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  // Handle card leave
  const handleCardLeave = () => {
    setActiveCard(null);
  };

  // Handle navigation to about page
  const handleNavigate = () => {
    navigate('/about');
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-gray-900/30 min-h-screen dir-rtl">
      <div className="max-w-7xl mx-auto py-8">
        {/* Section: Challenges We Solve */}
        <motion.div
          className="backdrop-blur-lg bg-gray-800/40 rounded-lg p-6 sm:p-8 mb-6 border border-gray-700/50 shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="border-b border-gray-600 pb-4 mb-4">
            <div className="flex justify-center mb-4">
              <FaRocket className="text-4xl text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-right">
              چالش‌هایی که حل آن تخصص ماست
            </h2>
          </div>
          <div className="border-b border-gray-600 pb-4 mb-4">
            <p className="text-white text-sm sm:text-base leading-relaxed text-justify">
              رقبای ما در دنیای دیجیتال از ما پیشی گرفته‌اند. رقابت عنصر اصلی بازاریابی در بازار امروز است. دیجیتال ترنسفورمیشن موضوع اصلی ورود آژانس‌های بازاریابی دیجیتال است. این مهمترین دغدغه‌ای است که با آن، به ما مراجعه می‌کنند. حل این مساله نیازمند اطلاعات کامل و بسیار از سمت کسب‌وکار شما و تخصص و مهارت آژانس دیجیتال مارکتینگ آراسیس در دیجیتال مارکتینگ است؛ طی یک جلسه، همراه هم به راهکاری برای ورود آژانس دیجیتال مارکتینگ آراسیس و سپس راهکارهای افزایش فروش شما و پیش گرفتن از رقبا رسیده و کار را با هم شروع کنیم.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleNavigate}
              className="flex items-center gap-2 text-white bg-[#003087] hover:bg-[#0040b0] px-4 py-2 rounded-lg transition-colors"
            >
              مشاوره رایگان
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </motion.div>

        {/* Section: High Cost of Lead Generation */}
        <motion.div
          className={`backdrop-blur-lg bg-gray-800/40 rounded-lg p-6 sm:p-8 mb-6 border border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-xl ${
            activeCard === 0 ? 'shadow-xl' : ''
          }`}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          onClick={() => handleCardClick(0)}
          onMouseEnter={() => handleCardHover(0)}
          onMouseLeave={handleCardLeave}
        >
          <div className="border-b border-gray-600 pb-4 mb-4">
            <div className="flex justify-center mb-4">
              <FaChartLine className="text-4xl text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">
              هزینه‌های بالای سرنخ‌های تجاری
            </h3>
          </div>
          <div className="border-b border-gray-600 pb-4 mb-4">
            <p className="text-white text-sm sm:text-base leading-relaxed text-justify mb-4">
              هزینه ایجاد تماس‌های ورودی و تولید سرنخ‌های تجاری برای ما بالاست.
            </p>
            <p className="text-white text-sm sm:text-base leading-relaxed text-justify">
              شما به تجربه آژانس دیجیتال مارکتینگ آراسیس در بهینه‌سازی نرخ تبدیل نیاز دارید تا همراه هم، با بررسی کل فرآیند‌های بازاریابی و تبلیغات شما از تبلیغات گوگل تا محتوای صفحات فرود، بعد از علت‌یابی و یافتن راه‌حل، در افزایش نرخ تبدیل به شما کمک کنیم. این پروسه، مسیری چند ماهه و نیازمند همکاری تنگاتنگ بین آژانس دیجیتال مارکتینگ آراسیس و شما دارد. باید در کنار هم قرار بگیریم و کانال‌های مختلف تبلیغاتی شما را بررسی کنیم و راهکاری بهینه‌سازی آنها کشف کنیم.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleNavigate}
              className="flex items-center gap-2 text-white bg-[#003087] hover:bg-[#0040b0] px-4 py-2 rounded-lg transition-colors"
            >
              مشاوره رایگان
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </motion.div>

        {/* Section: Google Ads Outsourcing */}
        <motion.div
          className={`backdrop-blur-lg bg-gray-800/40 rounded-lg p-6 sm:p-8 mb-6 border border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-xl ${
            activeCard === 1 ? 'shadow-xl' : ''
          }`}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          onClick={() => handleCardClick(1)}
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={handleCardLeave}
        >
          <div className="border-b border-gray-600 pb-4 mb-4">
            <div className="flex justify-center mb-4">
              <FaBullhorn className="text-4xl text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">
              برون‌سپاری تبلیغات گوگل
            </h3>
          </div>
          <div className="border-b border-gray-600 pb-4 mb-4">
            <p className="text-white text-sm sm:text-base leading-relaxed text-justify mb-4">
              می‌خواهم تبلیغات گوگل خود را برون‌سپاری کنم.
            </p>
            <p className="text-white text-sm sm:text-base leading-relaxed text-justify">
              امروز تبلیغات گوگل دیگر مثل سال‌های گذشته نیست، با ورود هوش مصنوعی به دنیای تبلیغات، این ابزار به ظاهر آسان و در اصل بسیار مشکل، متحول شده است. تبلیغات گوگل تخصص اصلی آژانس دیجیتال مارکتینگ آراسیس است و با داشتن هزاران اکانت تبلیغاتی گوگل، در هر حرفه و تخصصی که باشید، ما حرفی برای گفتن داریم و نمونه‌های موفق و واقعی بسیاری را تجربه کرده‌ایم. کار با آژانس دیجیتال مارکتینگ آراسیس در تبلیغات گوگل، فرآیندهای استاندارد و هماهنگ با تمام پارتنرهای گوگل در سراسر دنیا دارد، استانداردهای بین‌المللی که با آن پروژه‌ها انجام می‌پذیرند. آژانس دیجیتال مارکتینگ آراسیس تنها پارتنر گوگل در خاورمیانه است که با معرفی یک متد اختصاصی به نام ROAD، تمام فرآیند‌ها را به حرفه‌ای‌ترین صورت ممکن به جلو می‌برد.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleNavigate}
              className="flex items-center gap-2 text-white bg-[#003087] hover:bg-[#0040b0] px-4 py-2 rounded-lg transition-colors"
            >
              مشاوره رایگان
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </motion.div>

        {/* Section: Targeted Advertising */}
        <motion.div
          className={`backdrop-blur-lg bg-gray-800/40 rounded-lg p-6 sm:p-8 mb-6 border border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-xl ${
            activeCard === 2 ? 'shadow-xl' : ''
          }`}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          onClick={() => handleCardClick(2)}
          onMouseEnter={() => handleCardHover(2)}
          onMouseLeave={handleCardLeave}
        >
          <div className="border-b border-gray-600 pb-4 mb-4">
            <div className="flex justify-center mb-4">
              <FaSearchDollar className="text-4xl text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">
              تبلیغات هدفمند برای گروه خاص
            </h3>
          </div>
          <div className="border-b border-gray-600 pb-4 mb-4">
            <p className="text-white text-sm sm:text-base leading-relaxed text-justify mb-4">
              به تبلیغات در گروه خاصی از مردم نیاز داریم.
            </p>
            <p className="text-white text-sm sm:text-base leading-relaxed text-justify">
              اینجا مرز تلاقی تبلیغات و هوش مصنوعی است. پس از سال‌ها کار کردن با گوگل، مشاهده نیاز کاربران ایرانی و دسترسی بالا به شبکه‌های تبلیغات دیجیتال بین‌المللی، امروز سیستم تبلیغاتی آژانس دیجیتال مارکتینگ آراسیس می‌تواند مخاطب مورد نظر شما را با توجه به علاقمندی‌اش شناسایی و تبلیغ شما را دقیقا برای همان شخص و به صورت هدفمند پخش نماید. اگر شما دوست دارید تبلیغاتتان فقط برای علاقمندان به خودروی مرسدس بنز پخش شود، ما این امکان را در شبکه تبلیغاتی آژانس دیجیتال مارکتینگ آراسیس فراهم کرده‌ایم. امروز این شبکه فقط در اختیار برند‌های خاص قرار می‌گیرد؛ اما خیلی زود به صورت عمومی نیز قابل استفاده خواهد بود.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleNavigate}
              className="flex items-center gap-2 text-white bg-[#003087] hover:bg-[#0040b0] px-4 py-2 rounded-lg transition-colors"
            >
              مشاوره رایگان
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </motion.div>

        {/* Section: Digital Marketing Services */}
        <motion.div
          className="backdrop-blur-lg bg-gray-800/40 rounded-lg p-6 sm:p-8 mb-6 border border-gray-700/50 shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="border-b border-gray-600 pb-4 mb-4">
            <div className="flex justify-center mb-4">
              <FaGlobe className="text-4xl text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-right">
              خدمات دیجیتال مارکتینگ
            </h2>
          </div>
          <div className="border-b border-gray-600 pb-4 mb-4">
            <p className="text-white text-sm sm:text-base leading-relaxed text-justify">
              با راهکارهای جامع دیجیتال مارکتینگ آژانس دیجیتال مارکتینگ آراسیس، حضور آنلاین خود را ارتقا دهید. خدمات شامل مدیریت شبکه‌های اجتماعی، تولید محتوا و تبلیغات هدفمند برای افزایش ترافیک و تبدیل.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleNavigate}
              className="flex items-center gap-2 text-white bg-[#003087] hover:bg-[#0040b0] px-4 py-2 rounded-lg transition-colors"
            >
              مشاوره رایگان
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </motion.div>

        {/* Section: Sales Guarantees */}
      {/* Section: Sales Guarantees */}
<motion.div
  className="backdrop-blur-lg bg-gray-800/40 rounded-lg p-4 sm:p-6 md:p-8 mb-6 border border-gray-700/50 shadow-lg"
  variants={cardVariants}
  initial="hidden"
  animate="visible"
>
  <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
    {/* آیتم ۱: تضمین قیمت */}
    <div className="flex-1 min-w-[250px] max-w-[350px] bg-gray-900/20 rounded-lg p-4">
      <div className="border-b border-gray-600 pb-4 mb-4">
        <div className="flex justify-center mb-4">
          <FaShieldAlt className="text-4xl text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">
          تضمین قیمت
        </h3>
      </div>
      <div className="border-b border-gray-600 pb-4 mb-4">
        <p className="text-white text-sm sm:text-base leading-relaxed text-justify">
          قیمت‌های رقابتی بدون هزینه‌های پنهان، بهترین ارزش را برای سرمایه‌گذاری شما تضمین می‌کنیم.
        </p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleNavigate}
          className="flex items-center gap-2 text-white bg-[#003087] hover:bg-[#0040b0] px-4 py-2 rounded-lg transition-colors"
        >
          مشاوره رایگان
          <FaArrowRight className="text-white" />
        </button>
      </div>
    </div>

    {/* آیتم ۲: تضمین کیفیت */}
    <div className="flex-1 min-w-[250px] max-w-[350px] bg-gray-900/20 rounded-lg p-4">
      <div className="border-b border-gray-600 pb-4 mb-4">
        <div className="flex justify-center mb-4">
          <FaBullhorn className="text-4xl text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">
          تضمین کیفیت
        </h3>
      </div>
      <div className="border-b border-gray-600 pb-4 mb-4">
        <p className="text-white text-sm sm:text-base leading-relaxed text-justify">
          خدمات با کیفیت بالا و متناسب با نیازهای شما، ارائه شده با دقت و توجه به جزئیات.
        </p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleNavigate}
          className="flex items-center gap-2 text-white bg-[#003087] hover:bg-[#0040b0] px-4 py-2 rounded-lg transition-colors"
        >
          مشاوره رایگان
          <FaArrowRight className="text-white" />
        </button>
      </div>
    </div>

    {/* آیتم ۳: تضمین سئو */}
    <div className="flex-1 min-w-[250px] max-w-[350px] bg-gray-900/20 rounded-lg p-4">
      <div className="border-b border-gray-600 pb-4 mb-4">
        <div className="flex justify-center mb-4">
          <FaSearchDollar className="text-4xl text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">
          تضمین سئو
        </h3>
      </div>
      <div className="border-b border-gray-600 pb-4 mb-4">
        <p className="text-white text-sm sm:text-base leading-relaxed text-justify">
          افزایش رتبه سایت شما در موتورهای جستجو با استراتژی‌های اثبات شده سئو، جذب ترافیک ارگانیک بیشتر.
        </p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleNavigate}
          className="flex items-center gap-2 text-white bg-[#003087] hover:bg-[#0040b0] px-4 py-2 rounded-lg transition-colors"
        >
          مشاوره رایگان
          <FaArrowRight className="text-white" />
        </button>
      </div>
    </div>
  </div>
</motion.div>

        {/* Section: Boost Sales */}
        <motion.div
          className="backdrop-blur-lg bg-gray-800/40 rounded-lg p-6 sm:p-8 mb-6 border border-gray-700/50 shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="border-b border-gray-600 pb-4 mb-4">
            <div className="flex justify-center mb-4">
              <FaUsers className="text-4xl text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-right">
              فروش ما پایین است!
            </h2>
          </div>
          <div className="border-b border-gray-600 pb-4 mb-4">
            <p className="text-white text-sm sm:text-base leading-relaxed text-justify mb-4">
              (راهکاری افزایش فروش) یکی از بیشترین جستجوهای مردم در کسب‌وکارها و در موتور جستجوی گوگل است. این یک سوال اساسی در کسب‌وکارهای نوپا و در حال رشد است و راه‌حل آن در دنیای دیجیتال، تخصص آژانس دیجیتال مارکتینگ آراسیس است. در دنیای دیجیتال می‌توان یک فروشگاه ۶ متری را به فروش باورنکردنی رساند. آژانس دیجیتال مارکتینگ آراسیس ثابت می‌کند همه آنچه در مورد فروش و تحول سازمان‌ها با ورود به دنیای دیجیتال شنیده‌اید، درست است. ما در کنار تمام این داستان‌های موفقیت، قصه‌های شکست زیادی نیز شنیده‌ایم؛ و با درس گرفتن از پیروزی‌ها و شکست‌ها امروز در کنار شما ایستاده‌ایم تا با هم به اوج قله موفقیت برسیم.
            </p>
            <p className="text-white text-sm sm:text-base font-bold text-center">
              به یک جلسه نیاز داریم.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleNavigate}
              className="flex items-center gap-2 text-white bg-[#003087] hover:bg-[#0040b0] px-4 py-2 rounded-lg transition-colors"
            >
              مشاوره رایگان
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </motion.div>

        {/* Section: Google Ranking */}
        <motion.div
          className="backdrop-blur-lg bg-gray-800/40 rounded-lg p-6 sm:p-8 mb-6 border border-gray-700/50 shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="border-b border-gray-600 pb-4 mb-4">
            <div className="flex justify-center mb-4">
              <FaGlobe className="text-4xl text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-right">
              به رتبه یک گوگل فکر می‌کنم
            </h2>
          </div>
          <div className="border-b border-gray-600 pb-4 mb-4">
            <p className="text-white text-sm sm:text-base leading-relaxed text-justify mb-4">
              اگر در حال فکر به فتح قله موفقیت هستید؛ جای درستی آمده‌اید. آژانس دیجیتال مارکتینگ آراسیس متخصص گوگل است، هر فکر و برنامه‌ای برای رسیدن به رتبه‌های یک ارگانیک و یا از طریق تبلیغات گوگل دارید؛ هر دو در تخصص ماست. حتی اگر کسی پیش از این به وب‌سایت شما صدمه زده و رتبه‌های خود را از دست داده‌اید، ما برای آن هم راهکار داریم. اما پیش از هر کاری، وب‌سایت شما را بررسی کنیم و با شما گفتگویی تلفنی در مورد وضعیت و هدف شما داشته باشیم. پس از آن راهکارهای کوتاه‌مدت و درازمدت به همراه یک نقشه راه دقیق به شما ارائه خواهیم‌کرد تا با سرعت حرکت کنیم.
            </p>
            <p className="text-white text-sm sm:text-base font-bold text-center">
              آدرس وب‌سایت خودتان را به ما بدهید.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleNavigate}
              className="flex items-center gap-2 text-white bg-[#003087] hover:bg-[#0040b0] px-4 py-2 rounded-lg transition-colors"
            >
              مشاوره رایگان
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </motion.div>

        {/* Section: CRM Software */}
        <motion.div
          className="backdrop-blur-lg bg-gray-800/40 rounded-lg p-6 sm:p-8 mb-6 border border-gray-700/50 shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="border-b border-gray-600 pb-4 mb-4">
            <div className="flex justify-center mb-4">
              <FaLaptopCode className="text-4xl text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-right">
              راهکار نرم‌افزاری برای افزایش بازدهی تیم فروش
            </h2>
          </div>
          <div className="border-b border-gray-600 pb-4 mb-4">
            <p className="text-white text-sm sm:text-base leading-relaxed text-justify mb-4">
              اینجا همان نقطه مالکیت تکنولوژی توسط آژانس دیجیتال مارکتینگ آراسیس است. نرم‌افزار CRM آژانس دیجیتال مارکتینگ آراسیس حاصل تجربه ۱۰ ساله ما بر روی Microsoft CRM و ایرانیزه کردن فرآیندهای موردنیاز هموطنان و حتی خود ما در این نرم‌افزار بوده است. ما تمام تجربه خود در این سال‌ها را در یک نرم‌افزار ساده و کارا قرار داده‌ایم. این نرم‌افزار که امروز نسل سوم آن را تجربه می‌کنید، بعد از تجربه طولانی آژانس دیجیتال مارکتینگ آراسیس با نرم‌افزار مایکروسافت و شخصی‌سازی امکانات آن برای آژانس دیجیتال مارکتینگ آراسیس (یک تجارت B2B) تولید گردیده است. به جرات می‌گوییم اگر یک سازمان B2B هستید، بهتر و موثرتر از این چیزی پیدا نخواهد کرد.
            </p>
            <p className="text-white text-sm sm:text-base font-bold text-center">
              رایگان شروع کنید.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleNavigate}
              className="flex items-center gap-2 text-white bg-[#003087] hover:bg-[#0040b0] px-4 py-2 rounded-lg transition-colors"
            >
              مشاوره رایگان
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </motion.div>

        {/* Section: App Installations */}
        <motion.div
          className="backdrop-blur-lg bg-gray-800/40 rounded-lg p-6 sm:p-8 mb-6 border border-gray-700/50 shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="border-b border-gray-600 pb-4 mb-4">
            <div className="flex justify-center mb-4">
              <FaRocket className="text-4xl text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-right">
              نیاز به نصب اپلیکیشن در تعداد بالا
            </h2>
          </div>
          <div className="border-b border-gray-600 pb-4 mb-4">
            <p className="text-white text-sm sm:text-base leading-relaxed text-justify mb-4">
              روزی ۳۰.۰۰۰ نصب برای شما کافی است؟ این پتانسیل باورنکردنی آژانس دیجیتال مارکتینگ آراسیس برای گرفتن نصب اپلیکیشن‌های موبایل است. شاید باورپذیر نباشد؛ ولی با کمک شبکه تبلیغاتی آژانس دیجیتال مارکتینگ آراسیس و شبکه‌های بین‌المللی تبلیغاتی که به آنها دسترسی داریم، در هر ابعاد و هزینه‌ای به افزایش نصب اپلیکیشن شما کمک می‌کنیم. از سال ۹۸ تا امروز برندهایی نظیر تپسی، آسان پرداخت، نماوا، ایرانسل، علی بابا و بسیاری از موفق‌ترین استارتاپ‌ها از این سرویس آژانس دیجیتال مارکتینگ آراسیس استفاده کرده‌اند و همچنان آژانس دیجیتال مارکتینگ آراسیس اولین انتخاب این برندها است. با هر بودجه تبلیغاتی، ما نهایت نتیجه را برای شما گارانتی می‌کنیم.
            </p>
            <p className="text-white text-sm sm:text-base font-bold text-center">
              نام اپلیکیشن خود را برای ما بفرستید.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleNavigate}
              className="flex items-center gap-2 text-white bg-[#003087] hover:bg-[#0040b0] px-4 py-2 rounded-lg transition-colors"
            >
              مشاوره رایگان
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </motion.div>

        {/* Slider Section */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
            مزایای بیشتر
          </h2>
          <div className="relative">
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {sliderItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="backdrop-blur-lg bg-gray-800/40 rounded-lg p-6 sm:p-8 border border-gray-700/50 shadow-lg min-h-[250px] flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-center">
                      <div className="border-b border-gray-600 pb-4 mb-4">
                        <div className="flex justify-center mb-4">{item.icon}</div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                      </div>
                      <div className="border-b border-gray-600 pb-4 mb-4">
                        <p className="text-white text-sm sm:text-base leading-relaxed text-justify">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <button
                          onClick={handleNavigate}
                          className="flex items-center gap-2 text-white bg-[#003087] hover:bg-[#0040b0] px-4 py-2 rounded-lg transition-colors"
                        >
                          مشاوره رایگان
                          <FaArrowRight className="text-white" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientele;