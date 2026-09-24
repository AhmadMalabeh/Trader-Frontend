import { useState } from "react";
import TextField from "@mui/material/TextField";
import CustomNumberField from "./CustomNumberField";
import ImageUploadPreview from "./ImageUploadPreview";
import CustomCheckBoxesGroup from "./CustomCheckBoxesGroup";

export default function AddNewAd({ children }) {
  const [adTitle, setAdTitle] = useState("");
  const [adFullDescription, setAdFullDescription] = useState("");
  const [adPrice, setAdPrice] = useState("");
  const [adsmallDescription, setAdSmallDescription] = useState("");
  const [adImages, setAdImages] = useState([null, null, null]); // الـ State الخاصة بالصورة مرفوعة هنا
  const [Errors, setErrors] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState([]);

  const paymentMethodOptions = [
    { value: "كاش", label: "كاش" },
    { value: "اقساط", label: "اقساط" },
  ];

  const updateImageAtIndex = (index, file) => {
    setAdImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = file; // تحديث الخانة المحددة فقط (إما بإضافة ملف أو null عند الحذف)
      return newImages;
    });
  };

  function handlePaymentMethodChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setPaymentMethod([...paymentMethod, value]);
    } else {
      setPaymentMethod(paymentMethod.filter((item) => item !== value));
    }
  }

  return (
    <>
      <main className="w-full">
        <form className="w-full max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          <section className="w-full lg:col-span-3 p-4 rounded-lg shadow-md flex flex-col bg-white gap-6">
            <TextField
              label="عنوان الإعلان"
              value={adTitle}
              onChange={(e) => setAdTitle(e.target.value)}
              helperText="أدخل عنوان الإعلان"
              fullWidth
            />
            <TextField
              label="وصف الإعلان المختصر"
              value={adsmallDescription}
              onChange={(e) => setAdSmallDescription(e.target.value)}
              helperText="أدخل وصف الإعلان المختصر"
              fullWidth
            />
            <TextField
              value={adFullDescription}
              onChange={(e) => setAdFullDescription(e.target.value)}
              helperText="أدخل وصف الإعلان الكامل"
              id="outlined-multiline-flexible"
              label="وصف الإعلان الكامل"
              multiline
              maxRows={4}
            />
            <CustomNumberField
              label="السعر"
              min={0}
              value={adPrice}
              onChange={(e) => setAdPrice(e.target.value)}
            />
            <CustomCheckBoxesGroup
              label="طريقة الدفع"
              name="payment-method"
              value={paymentMethod}
              onChange={(e) => handlePaymentMethodChange(e)}
              options={paymentMethodOptions}
            />
          </section>
          <section className="w-full lg:col-span-1 p-4 rounded-lg shadow-md flex flex-col items-center gap-4 bg-white text-center justify-center">
            <ImageUploadPreview
              isRequired={true}
              title="اختر صورة الاعلان الرئيسية"
              selectedImage={adImages[0]}
              onImageChange={(file) => {
                updateImageAtIndex(0, file);
                if (file) setErrors([]); // أول ما يختار صورة شيل الخطأ تلقائياً
              }}
              errors={Errors} // 👈 بنمرر الـ state تبعت الخطأ هون
            />
            <ImageUploadPreview
              title="اختر صورة"
              selectedImage={adImages[1]}
              onImageChange={(file) => updateImageAtIndex(1, file)}
            />
            <ImageUploadPreview
              title="اختر صورة"
              selectedImage={adImages[2]}
              onImageChange={(file) => updateImageAtIndex(2, file)}
            />
          </section>

          <section className="w-full lg:col-span-3 p-4 rounded-lg shadow-md flex flex-col bg-white gap-6">
            {children}
          </section>
        </form>
      </main>
    </>
  );
}
