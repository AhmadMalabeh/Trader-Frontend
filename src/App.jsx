import AddNewAd from "./components/AddNewAd";
import HomePage from "./components/HomePage";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Outlet,
} from "react-router-dom"; // 1. استيراد Outlet
import Navbar from "./components/Navbar";
import AdDetails from "./components/AdDetails";
import ProfileDetails from "./components/PofileDetails";
import ChatPage from "./components/ChatPage";
import Login from "./components/Login";
import Register from "./components/Register";
function AdDetailsRoute({ ads }) {
  const { id } = useParams();
  const ad = ads.find((item) => String(item.id) === id) || ads[0];

  return <AdDetails ad={ad} />;
}
// 2. إنشاء مكون الـ Layout الذي يحتوي على الـ Navbar وباقي الصفحات
function MainLayout() {
  return (
    <>
      <Navbar /> {/* الـ Navbar سيظهر هنا دائماً للصفحات التابعة له */}
      <div className="mt-0">
        <Outlet /> {/* هنا سيتم عرض المكونات (الصفحات) بشكل ديناميكي */}
      </div>
    </>
  );
}

function App() {
  const testAd = {
    id: 1,

    // بيانات الإعلان
    title: "Toyota Camry 2022",
    price: "18,500",
    location: "عمان - تلاع العلي",
    postedAt: "منذ يومين",

    description:
      "سيارة Toyota Camry 2022 بحالة ممتازة، فحص كامل، استخدام شخصي، بدون مشاكل. السيارة نظيفة ومستخدمة بعناية.",

    // الصور
    mainImage: "https://images.unsplash.com/photo-1550355291-bbee04a92027",

    secondaryImages: [
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    ],

    // معلومات البائع
    seller: {
      name: "Ahmad Ali",
      phone: "+962790000000",
      avatar: "https://i.pravatar.cc/150?img=12",
    },

    // البيانات التي ستظهر في قسم المواصفات
    specs: [
      { label: "الماركة", value: "Toyota" },
      { label: "الموديل", value: "Camry" },
      { label: "سنة الصنع", value: "2022" },
      { label: "نوع الهيكل", value: "سيدان" },
      { label: "اللون الخارجي", value: "أبيض" },
      { label: "اللون الداخلي", value: "أسود" },
      { label: "سعة المحرك", value: "2500 cc" },
      { label: "المسافة المقطوعة", value: "45,000 km" },
      { label: "حالة السيارة", value: "مستعملة" },
      { label: "نوع الوقود", value: "بنزين" },
      { label: "ناقل الحركة", value: "أوتوماتيك" },
      { label: "حالة الترخيص", value: "مرخصة" },
      { label: "مجمركة", value: "نعم" },
      { label: "طرق الدفع", value: "كاش، تقسيط" },
      { label: "رقم الشاصي", value: "JTDB11HK202200123" },

      {
        label: "المواصفات الداخلية",
        value: "مقاعد جلد، شاشة، تكييف",
      },
      {
        label: "المواصفات الخارجية",
        value: "جنوط، كاميرا خلفية، حساسات",
      },
      {
        label: "المواصفات التقنية",
        value: "ABS، Airbags، مثبت سرعة",
      },
    ],
  };

  const ads = [
    testAd,
    {
      ...testAd,
      id: 2,
      title: "BMW X5 2021",
      price: "32,000",
      location: "عمان - عبدون",
      postedAt: "منذ 5 أيام",
      description:
        "BMW X5 بحالة ممتازة، صيانة دورية، ومواصفات عالية مناسبة للعائلة.",
      mainImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
      secondaryImages: [
        "https://images.unsplash.com/photo-1525609004556-c46c7dcfbbd3",
        "https://images.unsplash.com/photo-1542362567-b07e54358753",
      ],
    },
    {
      ...testAd,
      id: 3,
      title: "شقة حديثة للبيع",
      price: "95,000",
      location: "عمان - الجبيهة",
      postedAt: "منذ أسبوع",
      description:
        "شقة واسعة بتشطيب حديث، موقع هادئ وقريبة من الخدمات الرئيسية.",
      mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      secondaryImages: [
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      ],
    },
  ];

  const user = {
    id: "user-ahmad-ali",
    avatar: "https://i.pravatar.cc/150?img=12",
    name: "Ahmad Ali",
    phone: "+962790000000",
    memberSince: "يناير 2021",
    email: "malabehahmad5@gmail.com",
  };

  return (
    <div className="bg-gray-50 m-auto">
      <BrowserRouter>
        <div className="border-2 border-gray-200 rounded-lg shadow-lg max-w-7xl m-auto">
          <Routes>
            {/* صفحة الـ Login مستقلة تماماً وخارج الـ Layout، فلن يظهر فيها الـ Navbar */}
            <Route path="/" element={<Login />} />

            <Route path="/register" element={<Register />} />

            {/* جميع هذه الصفحات بالأسفل ستعرض داخل الـ MainLayout وبالتالي سيظهر معها الـ Navbar تلقائياً */}
            <Route element={<MainLayout />}>
              <Route path="/home" element={<HomePage ads={ads} />} />
              <Route path="/add-new-ad" element={<AddNewAd />} />
              <Route
                path="/ad-details/:id"
                element={<AdDetailsRoute ads={ads} />}
              />
              <Route
                path="/profile"
                element={
                  <ProfileDetails
                    user={user}
                    ads={ads}
                    favoriteAds={[ads[1]]}
                  />
                }
              />
              <Route
                path="/messages"
                element={
                  <ChatPage
                    currentUser={{
                      id: user.id,
                      displayName: user.name,
                      role: "user",
                      avatarUrl: user.avatar,
                    }}
                  />
                }
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
