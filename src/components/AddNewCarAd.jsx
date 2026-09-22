import { useState } from "react";
import CustomSelect from "./CustomSelect";
import CustomRadioGroup from "./CustomRadioGroup";
import CustomNumberField from "./CustomNumberField";

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

  const LicensingStatusOptions = [
    { value: "مرخصة", label: "مرخصة" },
    { value: "غير مرخصة", label: "غير مرخصة" },
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
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <main className="flex gap-4 justify-center flex-wrap">
        <section className=" p-4 rounded-lg shadow-md m-1 flex flex-col w-3/4">
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
            onChange={(e) => setFuelType(e.target.value)}
            options={fuelOptions}
            row={true} // الخيارات رح تظهر بجانب بعض
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
          <CustomNumberField
            label="المسافة المقطوعة"
            min={0}
            max={1000000}
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
          />
        </section>

        <section className="bg-amber-50 p-4 rounded-lg shadow-md">
          {/* الاستخدام الثاني: إعلانات السيارات */}
          <CustomSelect
            label="ماركة السيارة"
            value={carBrand}
            onChange={(e) => setCarBrand(e.target.value)}
            options={carOptions}
            helperText="اختر الشركة المصنعة للسيارة"
          />
        </section>
      </main>

      <div style={{ marginTop: "20px" }} className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          إرسال البيانات للسيرفر
        </button>
      </div>
    </form>
  );
}
