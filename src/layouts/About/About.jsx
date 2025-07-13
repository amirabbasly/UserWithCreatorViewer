import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaCheckSquare,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import NavigationMenu from "../../components/Home/NavigationMenu";
import Footer from "../../components/Home/Footer";
import fakeprofile from "../../assets/image/profilefake.jpg";
const About = () => {
  // Fix Leaflet marker icon issue
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

  // FAQ data in Persian
  const faqs = [
    {
      question: "خدمات شرکت شما چیست؟",
      answer:
        "ما طیف وسیعی از خدمات شامل مشاوره، مدیریت پروژه و راه‌حل‌های نوآورانه برای موفقیت کسب‌وکارها ارائه می‌دهیم.",
    },
    {
      question: "دفتر شما کجاست؟",
      answer:
        "دفتر مرکزی ما در خیابان تجاری ۱۲۳، دبی، امارات متحده عربی واقع شده است. نقشه را در زیر مشاهده کنید.",
    },
    {
      question: "چگونه می‌توان با پشتیبانی تماس گرفت؟",
      answer:
        "می‌توانید از طریق ایمیل support@company.com یا شماره تلفن ۴۵۶۷-۱۲۳-۴-۹۷۱+ با تیم پشتیبانی ما تماس بگیرید.",
    },
  ];

  // Contact info for checkbox list
  const contactInfo = [
    {
      label: "آدرس:  تهران , جردن , خیابان مریم غربی , پلاک 131  ",
      icon: <FaMapMarkerAlt />,
    },
    { label: "تلفن: +98 939 7979 861", icon: <FaCheckSquare /> },
    { label: "ایمیل: info@aeseslab.com", icon: <FaCheckSquare /> },
    {
      label: "ساعات کاری:  هرروز  ۹ صبح تا ۵ بعدازظهر",
      icon: <FaCheckSquare />,
    },
  ];

  // Team slider data
  const team = [
    { name: "جان دو", role: "مدیرعامل", image: fakeprofile },
    { name: "جین اسمیت", role: "مدیر فنی", image: fakeprofile },
    { name: "مایک جانسون", role: "توسعه‌دهنده ارشد", image: fakeprofile },
  ];

  // Social media links
  const socials = [
    { icon: <FaFacebook />, url: "https://facebook.com", label: "فیسبوک" },
    { icon: <FaTwitter />, url: "https://twitter.com", label: "توییتر" },
    { icon: <FaLinkedin />, url: "https://linkedin.com", label: "لینکدین" },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com",
      label: "اینستاگرام",
    },
  ];

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gray-900 text-white px-4 md:px-12 py-16 font-vazir"
    >
      <style jsx global>{`
        @import url("https://cdn.jsdelivr.net/npm/vazirmatn@33.0.0/Vazirmatn-font-face.css");
        .font-vazir {
          font-family: "Vazirmatn", sans-serif;
        }
      `}</style>
      <NavigationMenu />

      {/* Header Section */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-8"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            درباره ما
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            ما یک شرکت پیشرو هستیم که به ارائه راه‌حل‌های نوآورانه برای
            کسب‌وکارهای سراسر جهان اختصاص دارد.
          </p>
        </div>
      </motion.main>

      {/* Team Slider Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">اعضای ارشد</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
                />
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          سوالات متداول
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-lg overflow-hidden"
              initial={false}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex justify-between items-center w-full p-4 cursor-pointer bg-gray-700 bg-opacity-30 hover:bg-opacity-50 transition-all text-right"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span
                  className={`text-2xl transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 text-gray-300 text-right">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Info Checkbox List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          اطلاعات تماس
        </h2>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-lg p-6">
          <ul className="space-y-4">
            {contactInfo.map((info, index) => (
              <li key={index} className="flex items-center text-right">
                <span className="text-blue-500 mr-2">{info.icon}</span>
                <span className="text-gray-300">{info.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">موقعیت ما</h2>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-lg p-6">
          <MapContainer
            center={[25.2048, 55.2708]}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
            className="rounded-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[25.2048, 55.2708]}>
              <Popup>دفتر ما: خیابان تجاری ۱۲۳، دبی، امارات متحده عربی</Popup>
            </Marker>
          </MapContainer>
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/place/Dubai/@25.2048,55.2708,13z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <FaMapMarkerAlt className="ml-2" />
              مشاهده در گوگل مپ
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          ارتباط با ما
        </h2>
        <div className="flex justify-center space-x-6">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-300 hover:text-blue-500 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              {social.icon}
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-8">
        <Footer />
      </main>
    </div>
  );
};

export default About;
