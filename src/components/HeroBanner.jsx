import heroImage from "../assets/heroImage.jpg"; // استيراد صورة افتراضية من مجلد الأصول
const HeroBanner = ({
  backgroundImage = heroImage, // صورة افتراضية للعقار
  title = "Trader - تصفح وانشر إعلاناتك بسهولة",
  subtitle = "اكتشف أفضل العروض",
  primaryBtnText = "عرض التفاصيل",
  secondaryBtnText = "اتصل بنا",
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div
      className="relative w-full h-100 overflow-hidden shadow-lg bg-cover bg-center flex items-center md:h-120 lg:h-136"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      dir="rtl" // لضمان المحاذاة الصحيحة باللغة العربية
    >
      {/* طبقة التغبيش أو التعتيم الخلفية (Overlay) لتوضيح النص الأبيض */}
      <div className="absolute inset-0 bg-linear-to-l from-black/80 via-black/40 to-transparent z-0" />

      {/* محتوى البانر */}
      <div className="absolute right-8 md:right-16 z-10 max-w-xl text-white flex flex-col gap-2">
        <h1 className="text-2xl md:text-4xl font-bold tracking-wide select-none drop-shadow-md">
          {title}
        </h1>
        <p className="text-base md:text-xl font-medium text-gray-200 drop-shadow-sm">
          {subtitle}
        </p>

        {/* الأزرار التفاعلية */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={onPrimaryClick}
            className="px-5 py-2 bg-white text-black font-semibold rounded-md text-sm md:text-base hover:bg-gray-100 transition-colors duration-200 shadow"
            cursor="pointer"
          >
            {primaryBtnText}
          </button>

          <button
            onClick={onSecondaryClick}
            className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-md text-sm md:text-base transition-colors duration-200 shadow"
            cursor="pointer"
          >
            {secondaryBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
