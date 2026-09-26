import HeroBanner from "./HeroBanner"; // تأكد من مسار الملف الصحيح
import { useNavigate } from "react-router-dom";
import AdCard from "./AdCard";

const HomePage = ({ ads = [] }) => {
  const navigate = useNavigate();

  const handleDetailsClick = (ad) => {
    navigate(`/ad-details/${ad.id}`);
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
          onPrimaryClick={() => ads[0] && handleDetailsClick(ads[0])}
          onSecondaryClick={handleContactClick}
        />

        <section className="mt-8 px-4" aria-label="Available ads">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#141826]">
              أحدث الإعلانات
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 ">
            {ads.map((ad) => (
              <AdCard
                key={ad.id}
                title={ad.title}
                description={ad.description}
                imageUrl={ad.mainImage}
                price={ad.price}
                onClick={() => handleDetailsClick(ad)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
