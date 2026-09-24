import { useState, forwardRef, useImperativeHandle } from "react";
import CustomRadioGroup from "./CustomRadioGroup";
import CustomNumberFormat from "./CustomNumberFormat";
import CustomCheckBoxesGroup from "./CustomCheckBoxesGroup";
const AddNewHomeAd = forwardRef((props, ref) => {
  const intialState = {
    NumberOfRooms: "",
    NumberOfBathrooms: "",
    NumberOfKitchen: "",
    Furnished: "",
    area: "",
    numberOfFloors: "",
    mainFeatures: [],
    anotherFeatures: [],
    nearbyServices: [],
    buldingAge: "",
    advertiserType: "",
    isMortgaged: "",
  };

  const [HomeData, setHomeData] = useState(intialState);

  function handleChange(field, value) {
    setHomeData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }

  const mainFeaturesOptions = [
    { id: 1, value: "SwimmingPool", label: "مسبح" },
    { id: 2, value: "Garden", label: "حديقة" },
    { id: 3, value: "Garage", label: "كراج" },
    { id: 4, value: "Elevator", label: "مصعد" },
    { id: 5, value: "SecuritySystem", label: "نظام أمني" },
    { id: 6, value: "Gym", label: "صالة رياضية" },
  ];
  const anotherFeaturesOptions = [
    { id: 1, value: "Balcony", label: "شرفة" },
    { id: 2, value: "Fireplace", label: "مدفأة" },
    { id: 3, value: "AirConditioning", label: "تكييف" },
    { id: 4, value: "SolarPanels", label: "ألواح شمسية" },
    { id: 5, value: "SmartHomeSystem", label: "نظام المنزل الذكي" },
    { id: 6, value: "HomeTheater", label: "مسرح منزلي" },
  ];

  const nearbyServicesOptions = [
    { id: 1, value: "School", label: "مدرسة" },
    { id: 2, value: "Hospital", label: "مستشفى" },
    { id: 3, value: "ShoppingMall", label: "مركز تسوق" },
    { id: 4, value: "PublicTransport", label: "وسائل النقل العام" },
    { id: 5, value: "Park", label: "حديقة عامة" },
    { id: 6, value: "Restaurant", label: "مطعم" },
  ];

  const numberOfOptions = [
    { id: 1, value: 1, label: "1" },
    { id: 2, value: 2, label: "2" },
    { id: 3, value: 3, label: "3" },
    { id: 4, value: 4, label: "4" },
    { id: 5, value: 5, label: "5" },
    { id: 6, value: "6+", label: "6+" },
  ];

  const numberOfFloorsOptions = [
    { id: 1, value: "OneFloor", label: "طابق واحد" },
    { id: 2, value: "TwoFloors", label: "طابقين" },
    { id: 3, value: "ThreeFloors", label: "ثلاثة طوابق" },
    { id: 4, value: "FourFloors", label: "أربعة طوابق" },
    { id: 5, value: "FiveFloorsAndMore", label: "خمسة طوابق أو أكثر" },
  ];

  const furnishedOptions = [
    { id: 1, value: "furnished", label: "مفروشة" },
    { id: 2, value: "unfurnished", label: "غير مفروشة" },
    { id: 3, value: "semiFurnished", label: "نصف مفروشة" },
  ];

  const buldingAgeOptions = [
    { id: 1, value: "new", label: "جديد" },
    { id: 2, value: "1-5 years", label: "من سنة إلى خمس سنوات" },
    { id: 3, value: "6-10 years", label: "من ستة إلى عشر سنوات" },
    { id: 4, value: "11-20 years", label: "من أحد عشر إلى عشرين سنة" },
    { id: 5, value: "21+ years", label: "أكثر من عشرين سنة" },
  ];
  const advertiserTypeOptions = [
    { id: 1, value: "owner", label: "مالك" },
    { id: 2, value: "broker", label: "وسيط" },
  ];

  const isMortgagedOptions = [
    { id: 1, value: true, label: "مرهون" },
    { id: 2, value: false, label: "غير مرهون" },
  ];

  useImperativeHandle(ref, () => ({
    getData: () => HomeData,
    validate: () => {
      const errors = [];
      if (HomeData.NumberOfRooms === "") {
        errors.push("يجب أن يتم اختيار عدد الغرف");
      }
      if (HomeData.NumberOfBathrooms === "") {
        errors.push("يجب أن يتم اختيار عدد الحمامات");
      }
      if (HomeData.NumberOfKitchen === "") {
        errors.push("يجب أن يتم اختيار عدد المطابخ");
      }
      return {
        valid: errors.length === 0,
        errors,
      };
    },
  }));

  function handleCheckboxGroupChange(field, e) {
    const { value, checked } = e.target;
    setHomeData((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((v) => v !== value),
    }));
  }

  return (
    <>
      <CustomRadioGroup
        label="عدد الغرف"
        name="NumberOfRooms"
        options={numberOfOptions}
        value={HomeData.NumberOfRooms}
        onChange={(e) => handleChange("NumberOfRooms", e.target.value)}
        row={true}
      />
      <CustomRadioGroup
        label="عدد الحمامات"
        name="NumberOfBathrooms"
        options={numberOfOptions}
        value={HomeData.NumberOfBathrooms}
        onChange={(e) => handleChange("NumberOfBathrooms", e.target.value)}
        row={true}
      />
      <CustomRadioGroup
        label="عدد المطابخ"
        name="NumberOfKitchen"
        options={numberOfOptions}
        value={HomeData.NumberOfKitchen}
        onChange={(e) => handleChange("NumberOfKitchen", e.target.value)}
        row={true}
      />
      <CustomRadioGroup
        label="مفروشة أم لا"
        name="Furnished"
        options={furnishedOptions}
        value={HomeData.Furnished}
        onChange={(e) => handleChange("Furnished", e.target.value)}
        row={true}
      />
      <CustomRadioGroup
        label="عدد الطوابق"
        name="numberOfFloors"
        options={numberOfFloorsOptions}
        value={HomeData.numberOfFloors}
        onChange={(e) => handleChange("numberOfFloors", e.target.value)}
        row={true}
      />
      <CustomRadioGroup
        label="عمر البناء"
        name="buldingAge"
        options={buldingAgeOptions}
        value={HomeData.buldingAge}
        onChange={(e) => handleChange("buldingAge", e.target.value)}
        row={true}
      />
      <CustomRadioGroup
        label="نوع المعلن"
        name="advertiserType"
        options={advertiserTypeOptions}
        value={HomeData.advertiserType}
        onChange={(e) => handleChange("advertiserType", e.target.value)}
        row={true}
      />
      <CustomRadioGroup
        label="مرهون أم لا"
        name="isMortgaged"
        options={isMortgagedOptions}
        value={HomeData.isMortgaged}
        onChange={(e) => handleChange("isMortgaged", e.target.value)}
        row={true}
      />
      <CustomNumberFormat
        label="أدخل المساحة بالمتر المربع"
        name="area"
        value={HomeData.area}
        onChange={(e) => handleChange("area", e.target.value)}
        fullWidth
        variant="outlined"
      />

      <section className="w-full lg:col-span-1 p-4 rounded-lg shadow-md flex flex-col gap-4 bg-white">
        <div className="flex gap-4 border-2 border-solid border-gray-300 p-2 rounded-lg">
          <CustomCheckBoxesGroup
            label="الميزات الرئيسية"
            name="mainFeatures"
            options={mainFeaturesOptions}
            value={HomeData.mainFeatures}
            onChange={(e) => handleCheckboxGroupChange("mainFeatures", e)}
          />
        </div>
        <div className="flex gap-4 border-2 border-solid border-gray-300 p-2 rounded-lg">
          <CustomCheckBoxesGroup
            label="ميزات أخرى"
            name="anotherFeatures"
            options={anotherFeaturesOptions}
            value={HomeData.anotherFeatures}
            onChange={(e) => handleCheckboxGroupChange("anotherFeatures", e)}
          />
        </div>
        <div className="flex gap-4 border-2 border-solid border-gray-300 p-2 rounded-lg">
          <CustomCheckBoxesGroup
            label="خدمات قريبة"
            name="nearbyServices"
            options={nearbyServicesOptions}
            value={HomeData.nearbyServices}
            onChange={(e) => handleCheckboxGroupChange("nearbyServices", e)}
          />
        </div>
      </section>
    </>
  );
});

export default AddNewHomeAd;
