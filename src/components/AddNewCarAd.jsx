import { useState } from "react";
import CustomSelect from "./CustomSelect";
import CustomRadioGroup from "./CustomRadioGroup";
import CustomNumberField from "./CustomNumberField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import CustomCheckBoxesGroup from "./CustomCheckBoxesGroup";

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 57 }, (_, index) => {
  const year = currentYear - index;
  return { value: year.toString(), label: year.toString() };
});

export default function AddNewCarAd() {
  const intialState = {
    carBrand: "",
    selectedYear: "",
    carModel: "",
    carStatus: "جديد",
    fuelType: "بنزين",
    mileage: "",
    gearType: "أوتوماتيك",
    LicensingStatus: "مرخصة",
    bodyType: "",
    Externalcolor: "",
    Internalcolor: "",
    engineCapacity: "",
    custom: false,
    shasiNumber: "",
    batteryCapacity: "",
    internalSpecifications: [],
    externalSpecifications: [],
    technicalSpecifications: [],
  };

  const [vehicleData, setVehicleData] = useState(intialState);

  function handDataChange(field, value) {
    setVehicleData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  function handleFuelTypeChange(e) {
    const value = e.target.value;
    setVehicleData((prev) => ({
      ...prev,
      fuelType: value,
      batteryCapacity: value !== "كهرباء" ? "" : prev.batteryCapacity,
    }));
  }

  function handleCheckboxGroupChange(field, e) {
    const { value, checked } = e.target;
    setVehicleData((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  }

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

  return (
    <section className="w-full lg:col-span-3 p-4 rounded-lg shadow-md flex flex-col bg-white gap-6">
      <h2>بيانات المركبة</h2>
      {/* الاستخدام الثاني: إعلانات السيارات */}
      <CustomSelect
        label="ماركة السيارة"
        value={vehicleData.carBrand}
        onChange={(e) => handDataChange("carBrand", e.target.value)}
        options={carOptions}
        helperText="اختر الشركة المصنعة للسيارة"
      />
      <CustomSelect
        label="الموديل"
        value={vehicleData.carModel}
        onChange={(e) => handDataChange("carModel", e.target.value)}
        options={modelOptions}
        helperText="اختر الموديل"
      />
      <CustomSelect
        label="سنة الصنع / الإنتاج"
        value={vehicleData.selectedYear}
        onChange={(e) => handDataChange("selectedYear", e.target.value)}
        options={yearOptions}
        helperText="اختر السنة"
      />
      <CustomSelect
        label="نوع الهيكل"
        value={vehicleData.bodyType}
        onChange={(e) => handDataChange("bodyType", e.target.value)}
        options={bodyTypeOptions}
        helperText="اختر نوع الهيكل"
      />
      <CustomSelect
        label="لون المركبة من الخارج"
        value={vehicleData.Externalcolor}
        onChange={(e) => handDataChange("Externalcolor", e.target.value)}
        options={colorOptions}
        helperText="اختر لون المركبة من الخارج"
      />
      <CustomSelect
        label="لون المركبة من الداخل"
        value={vehicleData.Internalcolor}
        onChange={(e) => handDataChange("Internalcolor", e.target.value)}
        options={colorOptions}
        helperText="لون المركبة من الداخل"
      />
      <CustomSelect
        label="سعة المحرك"
        value={vehicleData.engineCapacity}
        onChange={(e) => handDataChange("engineCapacity", e.target.value)}
        options={engineCapacityOptions}
        helperText="اختر سعة المحرك"
      />
      <CustomNumberField
        label="المسافة المقطوعة"
        min={0}
        max={1000000}
        value={vehicleData.mileage}
        onChange={(e) => handDataChange("mileage", e.target.value)}
      />
      {/* الاستخدام الأول: تحديد نوع عرض العقار (أفقي row) */}
      <CustomRadioGroup
        label="حالة السيارة"
        name="listing-type"
        value={vehicleData.carStatus}
        onChange={(e) => handDataChange("carStatus", e.target.value)}
        options={statusOptions}
        row={true} // الخيارات رح تظهر بجانب بعض
      />
      <CustomRadioGroup
        label="نوع الوقود"
        name="fuel-type"
        value={vehicleData.fuelType}
        onChange={(e) => handleFuelTypeChange(e)}
        options={fuelOptions}
        row={true} // الخيارات رح تظهر بجانب بعض
      />
      <CustomSelect
        disabled={vehicleData.fuelType !== "كهرباء"} // تعطيل القائمة إذا لم يكن نوع الوقود كهرباء
        label="سعة البطارية"
        value={vehicleData.batteryCapacity}
        onChange={(e) => handDataChange("batteryCapacity", e.target.value)}
        options={batteryCapacityOptions}
        helperText="اختر سعة البطارية"
      />

      <CustomRadioGroup
        label="نوع ناقل الحركة"
        name="gear-type"
        value={vehicleData.gearType}
        onChange={(e) => handDataChange("gearType", e.target.value)}
        options={gearOptions}
        row={true} // الخيارات رح تظهر بجانب بعض
      />

      <CustomRadioGroup
        label="حالة الترخيص"
        name="licensing-status"
        value={vehicleData.LicensingStatus}
        onChange={(e) => handDataChange("LicensingStatus", e.target.value)}
        options={LicensingStatusOptions}
        row={true} // الخيارات رح تظهر بجانب بعض
      />
      <FormControlLabel
        control={
          <Checkbox
            value={vehicleData.custom}
            onChange={(e) => handDataChange("custom", e.target.checked)}
          />
        }
        label="هل المركبة مجمركة"
      />

      <section className="w-full lg:col-span-1 p-4 rounded-lg shadow-md flex flex-col gap-4 bg-white">
        <div className="flex gap-4 border-2 border-solid border-gray-300 p-2 rounded-lg">
          <CustomCheckBoxesGroup
            label="المواصفات الداخلية"
            name="internal-specifications"
            value={vehicleData.internalSpecifications}
            onChange={(e) =>
              handleCheckboxGroupChange("internalSpecifications", e)
            }
            options={internalSpecificationsOptions}
          />
        </div>
        <div className="flex gap-4 border-2 border-solid border-gray-300 p-2 rounded-lg">
          <CustomCheckBoxesGroup
            label="المواصفات الخارجية"
            name="external-specifications"
            value={vehicleData.externalSpecifications}
            onChange={(e) =>
              handleCheckboxGroupChange("externalSpecifications", e)
            }
            options={externalSpecificationsOptions}
          />
        </div>
        <div className="flex gap-4 border-2 border-solid border-gray-300 p-2 rounded-lg">
          <CustomCheckBoxesGroup
            label="المواصفات التقنية"
            name="technical-specifications"
            value={vehicleData.technicalSpecifications}
            onChange={(e) =>
              handleCheckboxGroupChange("technicalSpecifications", e)
            }
            options={technicalSpecificationsOptions}
          />
        </div>
      </section>
      <TextField
        label="رقم الشاصي"
        value={vehicleData.shasiNumber}
        onChange={(e) => handDataChange("shasiNumber", e.target.value)}
        helperText="أدخل رقم الشاصي"
        fullWidth
        margin="normal"
      />
    </section>
  );
}
