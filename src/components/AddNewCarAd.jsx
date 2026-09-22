import { useState } from "react";
import CustomSelect from "./CustomSelect";
import CustomRadioGroup from "./CustomRadioGroup";
import CustomNumberField from "./CustomNumberField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import CustomCheckBoxesGroup from "./CustomCheckBoxesGroup";
import ImageUploadPreview from "./ImageUploadPreview";

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 57 }, (_, index) => {
  const year = currentYear - index;
  return { value: year.toString(), label: year.toString() };
});

export default function AddNewCarAd() {
  // 1. تعريف الـ State لكل قائمة عشان تأخذ القيمة المحددة
  const [carBrand, setCarBrand] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carStatus, setCarStatus] = useState("جديد"); // القيمة الافتراضية "new"
  const [fuelType, setFuelType] = useState("بنزين"); // القيمة الافتراضية "gasoline"
  const [mileage, setMileage] = useState(""); // القيمة الافتراضية فارغة
  const [gearType, setGearType] = useState("أوتوماتيك"); // القيمة الافتراضية "automatic"
  const [LicensingStatus, setLicensingStatus] = useState("مرخصة"); // القيمة الافتراضية "licensed"
  const [bodyType, setBodyType] = useState(""); // القيمة الافتراضية فارغة
  const [Externalcolor, setExternalColor] = useState(""); // القيمة الافتراضية فارغة
  const [Internalcolor, setInternalColor] = useState(""); // القيمة الافتراضية فارغة
  const [engineCapacity, setEngineCapacity] = useState(""); // القيمة الافتراضية فارغة
  const [custom, setCustom] = useState(false); // القيمة الافتراضية false
  const [shasiNumber, setShasiNumber] = useState(""); // القيمة الافتراضية فارغة
  const [paymentMethod, setPaymentMethod] = useState(""); // القيمة الافتراضية فارغة
  const [price, setPrice] = useState(0); // القيمة الافتراضية فارغة
  const [batteryCapacity, setBatteryCapacity] = useState(""); // القيمة الافتراضية فارغة
  const [internalSpecifications, setInternalSpecifications] = useState([]); // القيمة الافتراضية فارغة
  const [externalSpecifications, setExternalSpecifications] = useState([]); // القيمة الافتراضية فارغة
  const [technicalSpecifications, setTechnicalSpecifications] = useState([]); // القيمة الافتراضية فارغة
  const [adImages, setAdImages] = useState([null, null, null]); // الـ State الخاصة بالصورة مرفوعة هنا

  const updateImageAtIndex = (index, file) => {
    setAdImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = file; // تحديث الخانة المحددة فقط (إما بإضافة ملف أو null عند الحذف)
      return newImages;
    });
  };

  const internalSpecificationsOptions = [
    { id: 1, value: "مقاعد جلدية", label: "مقاعد جلدية" },
    { id: 2, value: "نظام ملاحة GPS", label: "نظام ملاحة GPS" },
    { id: 3, value: "كاميرا خلفية", label: "كاميرا خلفية" },
    { id: 4, value: "نظام صوتي فاخر", label: "نظام صوتي فاخر" },
  ];

  const externalSpecificationsOptions = [
    { id: 1, value: "جنوط رياضية", label: "جنوط رياضية" },
    { id: 2, value: "فتحة سقف", label: "فتحة سقف" },
    { id: 3, value: "مصابيح LED", label: "مصابيح LED" },
    { id: 4, value: "حساسات ركن", label: "حساسات ركن" },
  ];

  const technicalSpecificationsOptions = [
    { id: 1, value: "نظام فرامل ABS", label: "نظام فرامل ABS" },
    { id: 2, value: "نظام ثبات إلكتروني", label: "نظام ثبات إلكتروني" },
    { id: 3, value: "وسائد هوائية", label: "وسائد هوائية" },
    {
      id: 4,
      value: "نظام مراقبة ضغط الإطارات",
      label: "نظام مراقبة ضغط الإطارات",
    },
  ];

  const batteryCapacityOptions = [
    { value: "30kWh", label: "30kWh" },
    { value: "40kWh", label: "40kWh" },
    { value: "50kWh", label: "50kWh" },
    { value: "60kWh", label: "60kWh" },
  ];

  const LicensingStatusOptions = [
    { value: "مرخصة", label: "مرخصة" },
    { value: "غير مرخصة", label: "غير مرخصة" },
  ];
  const paymentMethodOptions = [
    { value: "كاش", label: "كاش" },
    { value: "اقساط", label: "اقساط" },
  ];
  const engineCapacityOptions = [
    { value: "1000cc", label: "1000cc" },
    { value: "1500cc", label: "1500cc" },
    { value: "2000cc", label: "2000cc" },
    { value: "2500cc", label: "2500cc" },
  ];
  const colorOptions = [
    { value: "أحمر", label: "أحمر" },
    { value: "أزرق", label: "أزرق" },
    { value: "أخضر", label: "أخضر" },
    { value: "أسود", label: "أسود" },
    { value: "أبيض", label: "أبيض" },
  ];

  const bodyTypeOptions = [
    { value: "سيدان", label: "سيدان" },
    { value: "هاتشباك", label: "هاتشباك" },
    { value: "SUV", label: "SUV" },
    { value: "بيك أب", label: "بيك أب" },
  ];

  const carOptions = [
    { value: "toyota", label: "تويوتا" },
    { value: "bmw", label: "بي إم دبليو" },
    { value: "mercedes", label: "مرسيدس" },
  ];

  const modelOptions = [
    { value: "corolla", label: "كورولا" },
    { value: "camry", label: "كامري" },
    { value: "3series", label: "السلسلة 3" },
  ];

  const statusOptions = [
    { value: "جديد", label: "جديد" },
    { value: "مستعمل", label: "مستعمل" },
  ];
  const fuelOptions = [
    { value: "بنزين", label: "بنزين" },
    { value: "ديزل", label: "ديزل" },
    { value: "كهرباء", label: "كهرباء" },
    { value: "هايبرد", label: "هايبرد" },
  ];
  const gearOptions = [
    { value: "أوتوماتيك", label: "أوتوماتيك" },
    { value: "يدوي", label: "يدوي/عادي" },
  ];

  // 3. دالة إرسال البيانات إلى السيرفر
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      car: carBrand,
      year: selectedYear,
      model: carModel,
      status: carStatus,
      fuel: fuelType,
      mileage: mileage,
      custom: custom,
      internalSpecifications: internalSpecifications,
    };

    console.log("البيانات الجاهزة للإرسال:", formData);

    // هنا بتستعمل fetch أو axios عشان تبعت البيانات

    // try {
    //   const response = await fetch('https://example.com', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   const data = await response.json();
    //   alert('تم حفظ الإعلان بنجاح!');
    // } catch (error) {
    //   console.error('خطأ في الإرسال:', error);
    // }
  };

  function handleFuelTypeChange(event) {
    const newFuelType = event.target.value;
    setFuelType(newFuelType);

    // إذا اختار نوع وقود غير الكهرباء، صفر السعة فوراً في نفس الحدث
    if (newFuelType !== "كهرباء") {
      setBatteryCapacity("");
    }
  }

  // 2. دالة الـ onChange المخصصة للمصفوفات
  function handleInternalSpecificationsChange(event) {
    const { value, checked } = event.target;

    if (checked) {
      // إذا حدد المربع، أضف القيمة للمصفوفة
      setInternalSpecifications([...internalSpecifications, value]);
    } else {
      // إذا ألغى التحديد، احذف القيمة من المصفوفة
      setInternalSpecifications(
        internalSpecifications.filter((item) => item !== value),
      );
    }
  }
  function handleExternalSpecificationsChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setExternalSpecifications([...externalSpecifications, value]);
    } else {
      setExternalSpecifications(
        externalSpecifications.filter((item) => item !== value),
      );
    }
  }
  function handleTechnicalSpecificationsChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setTechnicalSpecifications([...technicalSpecifications, value]);
    } else {
      setTechnicalSpecifications(
        technicalSpecifications.filter((item) => item !== value),
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <main className="w-full max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <section className="w-full lg:col-span-3 p-4 rounded-lg shadow-md flex flex-col bg-white gap-6">
          <h2>بيانات المركبة</h2>
          {/* الاستخدام الثاني: إعلانات السيارات */}
          <CustomSelect
            label="ماركة السيارة"
            value={carBrand}
            onChange={(e) => setCarBrand(e.target.value)}
            options={carOptions}
            helperText="اختر الشركة المصنعة للسيارة"
          />
          <CustomSelect
            label="الموديل"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            options={modelOptions}
            helperText="اختر الموديل"
          />
          <CustomSelect
            label="سنة الصنع / الإنتاج"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            options={yearOptions}
            helperText="اختر السنة"
          />
          <CustomSelect
            label="نوع الهيكل"
            value={bodyType}
            onChange={(e) => setBodyType(e.target.value)}
            options={bodyTypeOptions}
            helperText="اختر نوع الهيكل"
          />
          <CustomSelect
            label="لون المركبة من الخارج"
            value={Externalcolor}
            onChange={(e) => setExternalColor(e.target.value)}
            options={colorOptions}
            helperText="اختر لون المركبة من الخارج"
          />
          <CustomSelect
            label="لون المركبة من الداخل"
            value={Internalcolor}
            onChange={(e) => setInternalColor(e.target.value)}
            options={colorOptions}
            helperText="لون المركبة من الداخل"
          />
          <CustomSelect
            label="سعة المحرك"
            value={engineCapacity}
            onChange={(e) => setEngineCapacity(e.target.value)}
            options={engineCapacityOptions}
            helperText="اختر سعة المحرك"
          />
          <CustomNumberField
            label="المسافة المقطوعة"
            min={0}
            max={1000000}
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
          />
          {/* الاستخدام الأول: تحديد نوع عرض العقار (أفقي row) */}
          <CustomRadioGroup
            label="حالة السيارة"
            name="listing-type"
            value={carStatus}
            onChange={(e) => setCarStatus(e.target.value)}
            options={statusOptions}
            row={true} // الخيارات رح تظهر بجانب بعض
          />
          <CustomRadioGroup
            label="نوع الوقود"
            name="fuel-type"
            value={fuelType}
            onChange={(e) => handleFuelTypeChange(e)}
            options={fuelOptions}
            row={true} // الخيارات رح تظهر بجانب بعض
          />
          <CustomSelect
            disabled={fuelType !== "كهرباء"} // تعطيل القائمة إذا لم يكن نوع الوقود كهرباء
            label="سعة البطارية"
            value={batteryCapacity}
            onChange={(e) => setBatteryCapacity(e.target.value)}
            options={batteryCapacityOptions}
            helperText="اختر سعة البطارية"
          />

          <CustomRadioGroup
            label="نوع ناقل الحركة"
            name="gear-type"
            value={gearType}
            onChange={(e) => setGearType(e.target.value)}
            options={gearOptions}
            row={true} // الخيارات رح تظهر بجانب بعض
          />

          <CustomRadioGroup
            label="حالة الترخيص"
            name="licensing-status"
            value={LicensingStatus}
            onChange={(e) => setLicensingStatus(e.target.value)}
            options={LicensingStatusOptions}
            row={true} // الخيارات رح تظهر بجانب بعض
          />
          <FormControlLabel
            control={
              <Checkbox
                value={custom}
                onChange={(e) => setCustom(e.target.checked)}
              />
            }
            label="هل المركبة مجمركة"
          />

          <section className="w-full lg:col-span-1 p-4 rounded-lg shadow-md flex flex-col gap-4 bg-white">
            <div className="flex gap-4 border-2 border-solid border-gray-300 p-2 rounded-lg">
              <CustomCheckBoxesGroup
                label="المواصفات الداخلية"
                name="internal-specifications"
                value={internalSpecifications}
                onChange={(e) => handleInternalSpecificationsChange(e)}
                options={internalSpecificationsOptions}
              />
            </div>
            <div className="flex gap-4 border-2 border-solid border-gray-300 p-2 rounded-lg">
              <CustomCheckBoxesGroup
                label="المواصفات الخارجية"
                name="external-specifications"
                value={externalSpecifications}
                onChange={(e) => handleExternalSpecificationsChange(e)}
                options={externalSpecificationsOptions}
              />
            </div>
            <div className="flex gap-4 border-2 border-solid border-gray-300 p-2 rounded-lg">
              <CustomCheckBoxesGroup
                label="المواصفات التقنية"
                name="technical-specifications"
                value={technicalSpecifications}
                onChange={(e) => handleTechnicalSpecificationsChange(e)}
                options={technicalSpecificationsOptions}
              />
            </div>
          </section>
          <TextField
            label="رقم الشاصي"
            value={shasiNumber}
            onChange={(e) => setShasiNumber(e.target.value)}
            helperText="أدخل رقم الشاصي"
            fullWidth
            margin="normal"
          />
          <CustomNumberField
            label="السعر"
            min={0}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <CustomRadioGroup
            label="طريقة الدفع"
            name="payment-method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            options={paymentMethodOptions}
            row={true} // الخيارات رح تظهر بجانب بعض
          />
        </section>

        <section className="w-full lg:col-span-1 p-4 rounded-lg shadow-md flex flex-col gap-4 bg-white text-center">
          <ImageUploadPreview
            title="اختر صورة الرئيسية للإعلان"
            selectedImage={adImages[0]}
            onImageChange={(file) => updateImageAtIndex(0, file)}
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
      </main>

      <div style={{ marginTop: "20px" }} className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          حفظ الإعلان
        </button>
      </div>
    </form>
  );
}
