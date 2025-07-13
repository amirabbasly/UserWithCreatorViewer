import React from 'react';
import Lottie from 'lottie-react';
import cloudHostingAnimation from '../../assets/digital-marketing.json';
import { Link } from 'react-router-dom';

const OptionInterface = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-6">
      {/* بخش انیمیشن (سمت چپ) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Lottie 
          animationData={cloudHostingAnimation} 
          loop={true} 
          style={{ width: '80%', maxWidth: '500px' }} 
        />
      </div>

      {/* بخش متنی و دکمه (سمت راست) */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-right p-6">
        <h2 className="text-3xl font-bold text-gray-200 mb-4">
          هاستینگ، دامین و بازاریابی الکترونیکی
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          ما به شما خدمات هاستینگ و دامین با جدیدترین فناوری‌ها و بهترین قیمت‌ها ارائه می‌دهیم، با تضمین بالاترین سطح سرعت، امنیت و پشتیبانی فنی به صورت شبانه‌روزی. همچنین خدمات بازاریابی الکترونیکی را ارائه می‌دهیم تا به شما کمک کنیم به بزرگ‌ترین بخش از مخاطبان هدف خود برسید، فروش خود را افزایش دهید و به اهداف تجاری خود با بهترین نتایج دست یابید.
        </p>
        <Link to="/order">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            سفارش هاستینگ و دامین شما
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OptionInterface;