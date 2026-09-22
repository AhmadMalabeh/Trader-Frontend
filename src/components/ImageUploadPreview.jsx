export default function ImageUploadPreview({
  selectedImage,
  onImageChange,
  title = "اختر صورة",
}) {
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // اختيار صورة واحدة فقط
    if (file) {
      onImageChange(file); // تمرير الصورة للـ Parent لتخزينها في مكانها الصحيح
    }
  };

  const handleRemove = () => {
    onImageChange(null); // إرجاع القيمة لـ null في الـ Parent عند الضغط على ✕
  };

  return (
    <div className="w-full max-w-sm">
      {!selectedImage ? (
        <label className="w-full h-32 border-2 border-dashed border-gray-300 hover:border-blue-500 bg-gray-50 flex flex-col items-center justify-center cursor-pointer rounded-lg text-gray-500 transition">
          <span className="text-sm">{title}</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden" // إخفاء حقل المتصفح الافتراضي
          />
        </label>
      ) : (
        <div className="relative w-full h-32 border-2 border-solid border-gray-300 rounded-lg overflow-hidden bg-gray-100">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
