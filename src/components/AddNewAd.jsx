import { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import CustomNumberField from "./CustomNumberField";
import ImageUploadPreview from "./ImageUploadPreview";
import CustomCheckBoxesGroup from "./CustomCheckBoxesGroup";
import CustomSelect from "./CustomSelect";
import AddNewCarAd from "./AddNewCarAd";

const categoryComponents = {
  cars: AddNewCarAd,
};

export default function AddNewAd() {
  const formData = {
    adTitle: "",
    adFullDescription: "",
    adPrice: 0,
    category: "",
    adSmallDescription: "",
    adImages: [null, null, null],
    errors: [],
    paymentMethods: [],
  };
  const [adData, setAdData] = useState(formData);
  const childRef = useRef();
  const category = adData.category;
  const ChildComponent = categoryComponents[category];

  function handleSave() {
    const validation = childRef.current?.validate();
    if (validation && !validation.valid) {
      alert(validation.errors.join(", "));
      return;
    }

    const categoryData = childRef.current?.getData();

    const fullData = {
      ...adData,
      categoryData, // بيانات السيارة (أو أي نوع تاني بالمستقبل)
    };

    console.log("Full Data to Save:", fullData);
  }

  const intialCategoriesOptions = [
    { id: 1, value: "cars", label: "سيارات" },
    { id: 2, value: "search", label: "بحث" },
    { id: 3, value: "real Estate", label: "عقارات" },
    { id: 4, value: "land", label: "أراضي" },
  ];

  function handDataChange(field, value) {
    setAdData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  function handleCheckboxGroupChange(field, e) {
    const { value, checked } = e.target;
    setAdData((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  }

  const paymentMethodOptions = [
    { value: "كاش", label: "كاش" },
    { value: "اقساط", label: "اقساط" },
  ];

  return (
    <>
      <main className="w-full">
        <form className="w-full max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          <section className="w-full lg:col-span-3 p-4 rounded-lg shadow-md flex flex-col bg-white gap-6">
            <CustomSelect
              label="اختر فئة الإعلان"
              value={adData.category}
              onChange={(e) => handDataChange("category", e.target.value)}
              options={intialCategoriesOptions}
            />
            <TextField
              label="عنوان الإعلان"
              value={adData.adTitle}
              onChange={(e) => handDataChange("adTitle", e.target.value)}
              helperText="أدخل عنوان الإعلان"
              fullWidth
            />
            <TextField
              label="وصف الإعلان المختصر"
              value={adData.adSmallDescription}
              onChange={(e) =>
                handDataChange("adSmallDescription", e.target.value)
              }
              helperText="أدخل وصف الإعلان المختصر"
              fullWidth
            />
            <TextField
              value={adData.adFullDescription}
              onChange={(e) =>
                handDataChange("adFullDescription", e.target.value)
              }
              helperText="أدخل وصف الإعلان الكامل"
              id="outlined-multiline-flexible"
              label="وصف الإعلان الكامل"
              multiline
              maxRows={4}
            />
            <CustomNumberField
              label="السعر"
              min={0}
              value={adData.adPrice}
              onChange={(e) => handDataChange("adPrice", e.target.value)}
            />
            <CustomCheckBoxesGroup
              label="طريقة الدفع"
              name="payment-method"
              value={adData.paymentMethods}
              onChange={(e) => handleCheckboxGroupChange("paymentMethods", e)}
              options={paymentMethodOptions}
            />
          </section>
          <section className="w-full lg:col-span-1 p-4 rounded-lg shadow-md flex flex-col items-center gap-4 bg-white text-center justify-center">
            <ImageUploadPreview
              isRequired={true}
              title="اختر صورة الاعلان الرئيسية"
              selectedImage={adData.adImages[0]}
              onImageChange={(file) => {
                handDataChange("adImages", [
                  file,
                  adData.adImages[1],
                  adData.adImages[2],
                ]);
                if (file) handDataChange("Errors", []); // أول ما يختار صورة شيل الخطأ تلقائياً
              }}
              errors={adData.Errors} // 👈 بنمرر الـ state تبعت الخطأ هون
            />
            <ImageUploadPreview
              title="اختر صورة"
              selectedImage={adData.adImages[1]}
              onImageChange={(file) =>
                handDataChange("adImages", [
                  adData.adImages[0],
                  file,
                  adData.adImages[2],
                ])
              }
            />
            <ImageUploadPreview
              title="اختر صورة"
              selectedImage={adData.adImages[2]}
              onImageChange={(file) =>
                handDataChange("adImages", [
                  adData.adImages[0],
                  adData.adImages[1],
                  file,
                ])
              }
            />
          </section>

          {ChildComponent && (
            <section className="w-full lg:col-span-3 p-4 rounded-lg shadow-md flex flex-col bg-white gap-6">
              <ChildComponent ref={childRef} />
            </section>
          )}
          <section className="w-full flex justify-center lg:col-span-4 p-4 rounded-lg shadow-md flex-col bg-white gap-6">
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              حفظ
            </button>
          </section>
        </form>
      </main>
    </>
  );
}
