export default function ImageUploadPreview({
  selectedImage,
  onImageChange,
  title = "اختر صورة",
  isRequired = false,
  error = "", // 👈 بنضيف prop جديد للخطأ
}) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageChange(file);
    }
  };

  const handleRemove = () => {
    onImageChange(null);
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-1">
      {" "}
      {/* تم إضافة gap ومسافة */}
      {!selectedImage ? (
        <label
          className={`w-full h-32 border-2 border-dashed bg-gray-50 flex flex-col items-center justify-center cursor-pointer rounded-lg text-gray-500 transition
            ${error ? "border-red-500 hover:border-red-600 bg-red-50/30" : "border-gray-300 hover:border-blue-500"} 
          `}
        >
          <span className={`text-sm ${error ? "text-red-600" : ""}`}>
            {title} {isRequired && <span className="text-red-500">*</span>}
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
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
      {/* 👈 إظهار نص الخطأ بشكل أنيق تحت الحقل مباشرة */}
      {error && (
        <span className="text-xs text-red-500 font-medium">{error}</span>
      )}
    </div>
  );
}
