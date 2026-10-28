import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      navigate("/home");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 font-sans"
      dir="rtl"
    >
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 250 230"
              className="h-12 w-12 bg-white"
            >
              <path
                d="M0 0 C75.9 0 151.8 0 230 0 C230 71.94 230 143.88 230 218 C154.1 218 78.2 218 0 218 C0 146.06 0 74.12 0 0 Z "
                fill="#FFFFFF"
                transform="translate(0,0)"
              />
              <path
                d="M0 0 C1.69 -0.01 1.69 -0.01 3.41 -0.02 C4.64 -0 5.87 0.01 7.13 0.03 C8.43 0.03 9.73 0.03 11.07 0.03 C14.62 0.02 18.18 0.05 21.73 0.08 C25.45 0.1 29.17 0.1 32.88 0.11 C39.92 0.12 46.96 0.15 53.99 0.19 C62.01 0.24 70.02 0.26 78.03 0.28 C94.51 0.32 110.99 0.39 127.47 0.48 C126.82 4.2 126.3 6.15 123.59 8.83 C122.99 9.44 122.38 10.05 121.76 10.67 C121.1 11.31 120.44 11.95 119.77 12.61 C119.09 13.28 118.42 13.95 117.72 14.64 C115.56 16.79 113.39 18.92 111.22 21.04 C109.77 22.48 108.33 23.92 106.88 25.35 C105.49 26.73 104.1 28.11 102.7 29.48 C102.06 30.13 101.41 30.77 100.74 31.43 C100.12 32.03 99.5 32.64 98.87 33.26 C98.33 33.79 97.79 34.31 97.24 34.86 C96.66 35.39 96.07 35.93 95.47 36.48 C94.83 37.2 94.19 37.92 93.53 38.65 C88.62 41.58 83.67 41 78.06 40.94 C76.8 40.94 75.54 40.94 74.25 40.94 C70.8 40.94 67.36 40.91 63.91 40.89 C60.31 40.86 56.71 40.86 53.11 40.85 C46.29 40.84 39.47 40.81 32.66 40.77 C24.89 40.72 17.13 40.7 9.37 40.68 C-6.6 40.64 -22.56 40.57 -38.53 40.48 C-34.44 31.94 -27.14 24.98 -20.8 18.04 C-17.6 14.43 -14.58 10.69 -11.57 6.93 C-5.77 -0.02 -5.77 -0.02 0 0 Z "
                fill="#129FF5"
                transform="translate(73.53021240234375,37.51898193359375)"
              />
              <path
                d="M0 0 C-3.03 13.52 -9.9 26.78 -15.05 39.62 C-16.88 44.17 -18.68 48.73 -20.44 53.31 C-20.86 54.4 -21.29 55.5 -21.73 56.62 C-22.58 58.88 -23.38 61.17 -24.11 63.47 C-26.87 71.72 -29.71 75.43 -37 80 C-38.37 80.91 -39.73 81.82 -41.09 82.73 C-43.4 84.29 -45.72 85.83 -48.04 87.36 C-51.81 89.83 -55.52 92.34 -59.14 95.03 C-59.77 95.5 -60.4 95.97 -61.06 96.45 C-62.24 97.34 -63.42 98.23 -64.58 99.14 C-66.18 100.33 -66.18 100.33 -69 102 C-71.18 101.6 -71.18 101.6 -73 101 C-69.82 77.23 -64.33 54.5 -56 32 C-55.74 31.16 -55.47 30.31 -55.2 29.44 C-53.11 23.55 -50.21 21.29 -44.69 18.5 C-43.72 18.05 -42.75 17.59 -41.75 17.12 C-40.75 16.63 -39.74 16.14 -38.71 15.63 C-35.49 14.05 -32.25 12.52 -29 11 C-26.77 9.93 -24.55 8.86 -22.32 7.79 C-20.17 6.77 -18.03 5.76 -15.88 4.75 C-14.86 4.27 -13.85 3.79 -12.81 3.3 C-11.38 2.65 -11.38 2.65 -9.93 1.98 C-8.68 1.41 -8.68 1.41 -7.41 0.82 C-4.8 -0.07 -2.74 -0.15 0 0 Z "
                fill="#1D2737"
                transform="translate(139,85)"
              />
              <path
                d="M0 0 C1.68 -0.01 1.68 -0.01 3.4 -0.01 C5.25 0 5.25 0 7.14 0.02 C9.09 0.02 9.09 0.02 11.07 0.02 C14.63 0.02 18.19 0.04 21.75 0.06 C25.47 0.08 29.19 0.08 32.91 0.08 C39.95 0.09 47 0.11 54.04 0.14 C62.06 0.18 70.08 0.19 78.1 0.21 C94.6 0.24 111.09 0.29 127.59 0.36 C127.59 1.02 127.59 1.68 127.59 2.36 C126.6 2.69 125.61 3.02 124.59 3.36 C124.26 3.03 123.93 2.7 123.59 2.36 C121.95 2.25 120.3 2.22 118.65 2.21 C117.58 2.2 116.51 2.19 115.41 2.18 C113.63 2.17 113.63 2.17 111.82 2.17 C110.58 2.16 109.34 2.15 108.07 2.14 C103.95 2.12 99.82 2.1 95.7 2.09 C94.29 2.08 92.87 2.08 91.45 2.07 C85.55 2.05 79.65 2.03 73.75 2.02 C65.29 2 56.84 1.97 48.38 1.91 C42.44 1.87 36.49 1.85 30.55 1.85 C27 1.85 23.45 1.83 19.9 1.8 C15.93 1.77 11.97 1.77 8.01 1.78 C6.83 1.76 5.66 1.74 4.45 1.73 C-2.38 1.71 -2.38 1.71 -8.19 4.9 C-8.92 5.71 -9.65 6.52 -10.41 7.36 C-7.97 1.92 -6.11 -0.02 0 0 Z "
                fill="#4DAEF4"
                transform="translate(73.40995788574219,37.63923645019531)"
              />
              <path
                d="M0 0 C0.33 0.99 0.66 1.98 1 3 C-0.4 5.26 -2.2 7.02 -4 9 C-1.13 9.82 1.39 10.12 4.38 10.1 C5.23 10.09 6.09 10.09 6.98 10.09 C7.91 10.08 8.83 10.07 9.79 10.06 C10.76 10.06 11.73 10.05 12.73 10.05 C16.86 10.03 21 10.01 25.13 9.98 C38.46 9.9 51.7 10.12 65 11 C65 11.33 65 11.66 65 12 C40.91 12 16.82 12 -8 12 C-6.39 7.97 -5.6 6.2 -2.88 3.19 C-2.34 2.58 -1.8 1.98 -1.24 1.36 C-0.83 0.91 -0.42 0.46 0 0 Z "
                fill="#1C77FA"
                transform="translate(44,65)"
              />
              <path
                d="M0 0 C0.33 0.99 0.66 1.98 1 3 C-0.4 5.26 -2.2 7.02 -4 9 C-0.06 10.15 3.94 10.53 8 11 C8 11.33 8 11.66 8 12 C2.72 12 -2.56 12 -8 12 C-6.39 7.97 -5.6 6.2 -2.88 3.19 C-2.34 2.58 -1.8 1.98 -1.24 1.36 C-0.83 0.91 -0.42 0.46 0 0 Z "
                fill="#2267FB"
                transform="translate(44,65)"
              />
              <path
                d="M0 0 C13.53 0 27.06 0 41 0 C41 0.66 41 1.32 41 2 C40.01 2.33 39.02 2.66 38 3 C37.5 2.51 37.5 2.51 37 2 C34.26 1.84 31.55 1.74 28.81 1.68 C27.58 1.65 27.58 1.65 26.32 1.62 C23.7 1.56 21.07 1.5 18.44 1.44 C16.66 1.39 14.88 1.35 13.1 1.31 C8.74 1.2 4.37 1.1 0 1 C0 0.67 0 0.34 0 0 Z "
                fill="#38DDED"
                transform="translate(160,38)"
              />
              <path
                d="M0 0 C0.66 0.33 1.32 0.66 2 1 C0.09 3.3 -1.83 5.59 -3.75 7.88 C-4.56 8.85 -4.56 8.85 -5.38 9.85 C-5.91 10.47 -6.44 11.1 -6.98 11.74 C-7.47 12.32 -7.95 12.89 -8.44 13.49 C-10.16 15.16 -11.82 16.04 -14 17 C-9.68 11 -4.98 5.46 0 0 Z "
                fill="#4F84FB"
                transform="translate(59,48)"
              />
              <path
                d="M0 0 C1.55 4.13 0.82 7.77 0 12 C-1.48 12.99 -1.48 12.99 -3 14 C-2.49 9.03 -1.77 4.71 0 0 Z "
                fill="#4E5866"
                transform="translate(76,138)"
              />
              <path
                d="M0 0 C0.33 0.99 0.66 1.98 1 3 C-0.43 5.04 -0.43 5.04 -2.44 7.19 C-3.1 7.9 -3.75 8.62 -4.43 9.36 C-4.95 9.9 -5.47 10.44 -6 11 C-6.66 10.67 -7.32 10.34 -8 10 C-5.36 6.7 -2.72 3.4 0 0 Z "
                fill="#4D83FB"
                transform="translate(44,65)"
              />
            </svg>
            <span className="font-sans text-2xl font-bold tracking-tight text-[#141826] ">
              Trader
            </span>
          </div>

          <h2 className="mt-3 text-center text-xl font-bold text-gray-600">
            تسجيل الدخول إلى حسابك
          </h2>
          <p className="mt-1 text-center text-sm text-gray-400">
            تصفح وانشر إعلاناتك بكل سهولة
          </p>
        </div>

        {/* نموذج تسجيل الدخول */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <TextField
                label="اسم المستخدم"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                helperText="أدخل اسم المستخدم المعتمد"
                fullWidth
                variant="outlined"
                // تحسين توافق MUI مع اتجاه النص العربي والـ Tailwind
                InputLabelProps={{
                  style: { right: 16, left: "auto", transformOrigin: "right" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": { borderColor: "#2563eb" }, // لون أزرق مطابق للهوية عند التركيز
                  },
                }}
              />
            </div>

            <div>
              <TextField
                label="كلمة المرور"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                helperText="أدخل كلمة المرور الخاصة بك"
                fullWidth
                variant="outlined"
                InputLabelProps={{
                  style: { right: 16, left: "auto", transformOrigin: "right" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": { borderColor: "#2563eb" },
                  },
                }}
              />
            </div>
          </div>

          {/* خيارات إضافية لتجميل التصميم */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
              />
              <span>تذكرني</span>
            </label>
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              نسيت كلمة المرور؟
            </a>
          </div>

          {/* زر تسجيل الدخول الثيم المتناسق مع أزرار موقعك */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              تسجيل الدخول
            </button>
          </div>
        </form>

        {/* أسفل الكرت لإنشاء حساب جديد */}
        <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-100">
          ليس لديك حساب؟{" "}
          <button
            onClick={() => navigate("/register")}
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
          >
            أنشئ حساباً جديداً الآن
          </button>
        </div>
      </div>
    </div>
  );
}
