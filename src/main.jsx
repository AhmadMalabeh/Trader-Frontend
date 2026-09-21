import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 1. استيراد الأدوات المساعدة للـ RTL والثيمات من MUI و Emotion
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

// 2. إعداد الكاش المخصص لقلب خصائص الـ CSS (مثل تحويل الـ padding من اليسار إلى اليمين)
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// 3. إنشاء الثيم وتحديد الاتجاه العام كـ 'rtl'
const theme = createTheme({
  direction: "rtl",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 4. تغليف التطبيق بالكاش والثيم، مع إضافة وسم لقلب النصوص العادية */}
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <App />
        </div>
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>,
);
