import HeroBanner from "./HeroBanner"; // تأكد من مسار الملف الصحيح
import AdCard from "./AdCard"; // تأكد من مسار الملف الصحيح
const HomePage = () => {
  const handleDetailsClick = () => {
    alert("تم الضغط على عرض التفاصيل");
    // هون بتقدر تستخدم React Router للتنقل مثل: navigate('/details')
  };

  const handleContactClick = () => {
    alert("تم الضغط على اتصل بنا");
  };

  return (
    <div className="bg-gray-50 px-0 pb-6 pt-0 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* استدعاء الـ Component */}
        <HeroBanner
          title="Trader - تصفح وانشر إعلاناتك بسهولة"
          subtitle="اكتشف أفضل العروض"
          onPrimaryClick={handleDetailsClick}
          onSecondaryClick={handleContactClick}
        />

        {/* باقي محتوى الشاشة الرئيسية مثل بطاقات السيارات والعقارات بكون تحت البانر */}
        <div className="mt-8">
          <AdCard
            title="سيارة تويوتا"
            description="سيارة تويوتا 2020 بحالة ممتازة"
            image="https://www.usnews.com/object/image/0000019d-2121-d441-a7bd-e3bb23450000/2026-chevrolet-corvette-front-angle-view-ak.jpg?update-time=1774377312762&size=responsiveGallery&format=webp"
            price={15000}
          />
          <AdCard
            title="سيارة تويوتا"
            description="سيارة تويوتا 2020 بحالة ممتازة"
            image="https://www.usnews.com/object/image/0000019d-2121-d441-a7bd-e3bb23450000/2026-chevrolet-corvette-front-angle-view-ak.jpg?update-time=1774377312762&size=responsiveGallery&format=webp"
            price={15000}
          />
          <AdCard
            title="سيارة تويوتا"
            description="سيارة تويوتا 2020 بحالة ممتازة"
            image="https://www.usnews.com/object/image/0000019d-2121-d441-a7bd-e3bb23450000/2026-chevrolet-corvette-front-angle-view-ak.jpg?update-time=1774377312762&size=responsiveGallery&format=webp"
            price={15000}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
