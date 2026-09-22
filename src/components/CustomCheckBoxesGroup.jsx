import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function CustomCheckBoxesGroup({
  label,
  value = [], // تأكد أن القيمة الافتراضية مصفوفة فارغة لتجنب الأخطاء
  onChange,
  options,
}) {
  return (
    <div>
      <label
        style={{ fontWeight: "bold", display: "block", marginBottom: "8px" }}
      >
        {label}
      </label>

      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          control={
            <Checkbox
              value={option.value}
              // الحل هنا: نتحقق إذا كانت مصفوفة الاختيارات تحتوي على قيمة هذا الـ Checkbox المحدد
              checked={value.includes(option.value)}
              onChange={onChange}
            />
          }
          label={option.label}
        />
      ))}
    </div>
  );
}
